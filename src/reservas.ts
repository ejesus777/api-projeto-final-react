import { db } from "./db";
import { temas } from "./temas";
import type { LinhaItem } from "./itens";

const FORMATO_DATA = /^\d{4}-\d{2}-\d{2}$/;
const FORMATO_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MS_POR_DIA = 86_400_000;

export interface LinhaReserva {
  id: number;
  itemId: number;
  itemNome: string;
  dataInicio: string;
  dataFim: string;
  quantidade: number;
  nome: string;
  email: string;
  total: number;
  criadaEm: string;
}

function dataValida(valor: unknown): valor is string {
  if (typeof valor !== "string" || !FORMATO_DATA.test(valor)) return false;
  const data = new Date(`${valor}T00:00:00Z`);
  return !Number.isNaN(data.getTime()) && data.toISOString().startsWith(valor);
}

export function hoje(): string {
  const agora = new Date();
  return new Date(agora.getTime() - agora.getTimezoneOffset() * 60_000)
    .toISOString()
    .slice(0, 10);
}

export function somarDias(data: string, dias: number): string {
  return new Date(Date.parse(data) + dias * MS_POR_DIA).toISOString().slice(0, 10);
}

export function numeroDePeriodos(tema: string, inicio: string, fim: string): number {
  const dias = (Date.parse(fim) - Date.parse(inicio)) / MS_POR_DIA;
  return temas[tema].periodo === "noite" ? dias : dias + 1;
}

export function validarPeriodo(
  tema: string,
  item: LinhaItem,
  dataInicio: unknown,
  dataFim: unknown,
  quantidade: unknown,
): string | null {
  if (!dataValida(dataInicio) || !dataValida(dataFim)) {
    return "As datas têm de estar no formato AAAA-MM-DD.";
  }
  if (dataInicio < hoje()) {
    return "A data de início não pode ser anterior a hoje.";
  }
  if (numeroDePeriodos(tema, dataInicio, dataFim) < 1) {
    return temas[tema].periodo === "noite"
      ? "A data de fim tem de ser posterior à data de início."
      : "A data de fim não pode ser anterior à data de início.";
  }
  if (
    typeof quantidade !== "number" ||
    !Number.isInteger(quantidade) ||
    quantidade < 1 ||
    quantidade > item.capacidade
  ) {
    return `A quantidade tem de ser um número inteiro entre 1 e ${item.capacidade}.`;
  }
  return null;
}

export function validarCliente(nome: unknown, email: unknown): string | null {
  if (typeof nome !== "string" || nome.trim() === "") {
    return "O nome é obrigatório.";
  }
  if (typeof email !== "string" || !FORMATO_EMAIL.test(email)) {
    return "O email não é válido.";
  }
  return null;
}

export function estaDisponivel(
  tema: string,
  item: LinhaItem,
  inicio: string,
  fim: string,
  quantidade: number,
): boolean {
  const { periodo, quantidadeOcupaUnidades } = temas[tema];
  const sobrepoe =
    periodo === "noite"
      ? "dataInicio < @fim AND @inicio < dataFim"
      : "dataInicio <= @fim AND @inicio <= dataFim";

  const { ocupadas } = db
    .prepare(
      `SELECT COALESCE(SUM(${quantidadeOcupaUnidades ? "quantidade" : "1"}), 0) AS ocupadas
       FROM reservas
       WHERE tema = @tema AND itemId = @id AND ${sobrepoe}`,
    )
    .get({ tema, id: item.id, inicio, fim }) as { ocupadas: number };

  const pedidas = quantidadeOcupaUnidades ? quantidade : 1;
  return ocupadas + pedidas <= item.unidades;
}

export function calcularTotal(
  tema: string,
  item: LinhaItem,
  inicio: string,
  fim: string,
  quantidade: number,
): number {
  const multiplicador = temas[tema].quantidadeOcupaUnidades ? quantidade : 1;
  return item.preco * numeroDePeriodos(tema, inicio, fim) * multiplicador;
}

const SELECT_RESERVA = `
  SELECT r.id, r.itemId, i.nome AS itemNome, r.dataInicio, r.dataFim,
         r.quantidade, r.nome, r.email, r.total, r.criadaEm
  FROM reservas r
  JOIN itens i ON i.tema = r.tema AND i.id = r.itemId`;

export function listarReservas(tema: string): LinhaReserva[] {
  return db
    .prepare(`${SELECT_RESERVA} WHERE r.tema = ? ORDER BY r.dataInicio, r.id`)
    .all(tema) as LinhaReserva[];
}

export function obterReserva(tema: string, id: unknown): LinhaReserva | undefined {
  const numero = Number(id);
  if (!Number.isInteger(numero)) return undefined;
  return db
    .prepare(`${SELECT_RESERVA} WHERE r.tema = ? AND r.id = ?`)
    .get(tema, numero) as LinhaReserva | undefined;
}

export function inserirReserva(
  tema: string,
  item: LinhaItem,
  dados: { dataInicio: string; dataFim: string; quantidade: number; nome: string; email: string },
): number {
  const resultado = db
    .prepare(
      `INSERT INTO reservas (tema, itemId, dataInicio, dataFim, quantidade, nome, email, total, criadaEm)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .run(
      tema,
      item.id,
      dados.dataInicio,
      dados.dataFim,
      dados.quantidade,
      dados.nome.trim(),
      dados.email.trim(),
      calcularTotal(tema, item, dados.dataInicio, dados.dataFim, dados.quantidade),
      new Date().toISOString(),
    );
  return Number(resultado.lastInsertRowid);
}
