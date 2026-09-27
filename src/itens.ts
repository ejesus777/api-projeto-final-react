import { db } from "./db";
import { temas } from "./temas";

export interface LinhaItem {
  tema: string;
  id: number;
  nome: string;
  descricao: string;
  categoria: string;
  localizacao: string;
  preco: number;
  capacidade: number;
  unidades: number;
  avaliacao: number;
  imagem: string | null;
  extras: string;
}

export function obterItem(tema: string, id: unknown): LinhaItem | undefined {
  const numero = Number(id);
  if (!Number.isInteger(numero)) return undefined;
  return db
    .prepare("SELECT * FROM itens WHERE tema = ? AND id = ?")
    .get(tema, numero) as LinhaItem | undefined;
}

export function listarItens(tema: string): LinhaItem[] {
  return db
    .prepare("SELECT * FROM itens WHERE tema = ? ORDER BY id")
    .all(tema) as LinhaItem[];
}

export function formatarItem(item: LinhaItem) {
  const campoPreco = temas[item.tema].periodo === "noite" ? "precoNoite" : "precoDia";
  return {
    id: item.id,
    nome: item.nome,
    descricao: item.descricao,
    categoria: item.categoria,
    localizacao: item.localizacao,
    [campoPreco]: item.preco,
    capacidade: item.capacidade,
    unidades: item.unidades,
    avaliacao: item.avaliacao,
    imagem: item.imagem,
    ...JSON.parse(item.extras),
  };
}

export function linkHttpsValido(valor: unknown): boolean {
  if (typeof valor !== "string") return false;
  try {
    return new URL(valor).protocol === "https:";
  } catch {
    return false;
  }
}
