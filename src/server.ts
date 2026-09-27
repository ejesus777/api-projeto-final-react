import express, { type ErrorRequestHandler } from "express";
import cors from "cors";
import { db, ficheiroDb } from "./db";
import { temaExiste, temas } from "./temas";
import { rotasItens } from "./rotas/itens";
import { rotasReservas } from "./rotas/reservas";

const PORTA = 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  const contar = db.prepare("SELECT COUNT(*) AS n FROM itens WHERE tema = ?");
  res.json(
    Object.entries(temas).map(([id, tema]) => ({
      tema: id,
      nome: tema.nome,
      periodo: tema.periodo,
      itens: (contar.get(id) as { n: number }).n,
      url: `http://localhost:${PORTA}/${id}/itens`,
    })),
  );
});

app.use("/:tema", (req, res, next) => {
  if (!temaExiste(req.params.tema)) {
    res.status(404).json({ erro: `Tema desconhecido: ${req.params.tema}` });
    return;
  }
  res.locals.tema = req.params.tema;
  next();
});

app.use("/:tema/itens", rotasItens);
app.use("/:tema/reservas", rotasReservas);

app.use((_req, res) => {
  res.status(404).json({ erro: "Rota não encontrada." });
});

const tratarErros: ErrorRequestHandler = (erro, _req, res, _next) => {
  if (erro.type === "entity.parse.failed") {
    res.status(400).json({ erro: "O corpo do pedido não é JSON válido." });
    return;
  }
  console.error(erro);
  res.status(500).json({ erro: "Erro interno do servidor." });
};
app.use(tratarErros);

app.listen(PORTA, (erro) => {
  if (erro) {
    console.error(`Não foi possível arrancar a API na porta ${PORTA}: ${erro.message}`);
    console.error("Já tens a API aberta noutro terminal? Fecha-a primeiro.");
    process.exit(1);
  }

  console.log(`API a correr em http://localhost:${PORTA}`);
  console.log(`Base de dados: ${ficheiroDb}`);

  const { n } = db.prepare("SELECT COUNT(*) AS n FROM itens").get() as { n: number };
  if (n === 0) {
    console.warn("Atenção: a base de dados está vazia. Corre primeiro: npm run seed");
  }
});
