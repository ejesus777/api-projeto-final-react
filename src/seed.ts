import readline from "node:readline/promises";
import { db, ficheiroDb } from "./db";
import { temaExiste, temas } from "./temas";
import { dadosIniciais } from "./dados";
import { obterItem } from "./itens";
import { hoje, inserirReserva, somarDias } from "./reservas";

const argumentos = process.argv.slice(2);
const indiceDb = argumentos.indexOf("--db");
const temaPedido = argumentos.find(
  (arg, i) => !arg.startsWith("--") && (indiceDb === -1 || i !== indiceDb + 1),
);

async function confirmar(pergunta: string): Promise<boolean> {
  if (argumentos.includes("--sim")) return true;
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const resposta = await rl.question(`${pergunta} (s/N) `);
  rl.close();
  return resposta.trim().toLowerCase() === "s";
}

function carregarTema(tema: string): void {
  const { itens, reservas } = dadosIniciais[tema];
  const periodo = temas[tema].periodo;

  db.prepare("DELETE FROM reservas WHERE tema = ?").run(tema);
  db.prepare("DELETE FROM itens WHERE tema = ?").run(tema);

  const inserirItem = db.prepare(
    `INSERT INTO itens (tema, id, nome, descricao, categoria, localizacao, preco, capacidade, unidades, avaliacao, extras)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  );
  itens.forEach((item, i) => {
    inserirItem.run(
      tema,
      i + 1,
      item.nome,
      item.descricao,
      item.categoria,
      item.localizacao,
      item.preco,
      item.capacidade,
      item.unidades ?? 1,
      item.avaliacao,
      JSON.stringify(item.extras),
    );
  });

  for (const reserva of reservas) {
    const dataInicio = somarDias(hoje(), reserva.comecaDaquiA);
    const dataFim = somarDias(dataInicio, periodo === "noite" ? reserva.duracao : reserva.duracao - 1);
    inserirReserva(tema, obterItem(tema, reserva.itemId)!, {
      dataInicio,
      dataFim,
      quantidade: reserva.quantidade,
      nome: reserva.nome,
      email: reserva.email,
    });
  }

  console.log(`${temas[tema].nome}: ${itens.length} itens e ${reservas.length} reservas.`);
}

async function main(): Promise<void> {
  if (temaPedido && !temaExiste(temaPedido)) {
    console.error(`Tema desconhecido: ${temaPedido}`);
    console.error(`Temas disponíveis: ${Object.keys(temas).join(", ")}`);
    process.exit(1);
  }

  const alvo = temaPedido ? [temaPedido] : Object.keys(temas);
  const { n } = db
    .prepare(`SELECT COUNT(*) AS n FROM itens WHERE tema IN (${alvo.map(() => "?").join(", ")})`)
    .get(...alvo) as { n: number };

  if (n > 0) {
    const descricao = temaPedido ? `do tema ${temaPedido}` : "de todos os temas";
    const continuar = await confirmar(
      `Isto repõe os dados iniciais ${descricao} e APAGA as reservas e imagens que acrescentaste.\n` +
        `Base de dados: ${ficheiroDb}\nContinuar?`,
    );
    if (!continuar) {
      console.log("Cancelado. Nada foi alterado.");
      return;
    }
  }

  db.transaction(() => alvo.forEach(carregarTema))();
  console.log(`Dados iniciais carregados em ${ficheiroDb}`);
}

main();
