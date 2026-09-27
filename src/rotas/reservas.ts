import { Router } from "express";
import { db } from "../db";
import { obterItem } from "../itens";
import {
  estaDisponivel,
  inserirReserva,
  listarReservas,
  obterReserva,
  validarCliente,
  validarPeriodo,
} from "../reservas";

export const rotasReservas = Router();

rotasReservas.get("/", (_req, res) => {
  res.json(listarReservas(res.locals.tema));
});

rotasReservas.post("/", (req, res) => {
  const tema = res.locals.tema;

  if (!req.body) {
    res.status(400).json({ erro: "O corpo do pedido tem de ser JSON (Content-Type: application/json)." });
    return;
  }

  const { itemId, dataInicio, dataFim, quantidade, nome, email } = req.body;

  const item = typeof itemId === "number" ? obterItem(tema, itemId) : undefined;
  if (!item) {
    res.status(400).json({ erro: "O itemId tem de ser o id (número) de um item deste tema." });
    return;
  }

  const erro =
    validarPeriodo(tema, item, dataInicio, dataFim, quantidade) ?? validarCliente(nome, email);
  if (erro) {
    res.status(400).json({ erro });
    return;
  }

  if (!estaDisponivel(tema, item, dataInicio, dataFim, quantidade)) {
    res.status(409).json({ erro: "Sem disponibilidade para as datas escolhidas." });
    return;
  }

  const id = inserirReserva(tema, item, { dataInicio, dataFim, quantidade, nome, email });
  res.status(201).json(obterReserva(tema, id));
});

rotasReservas.delete("/:id", (req, res) => {
  const tema = res.locals.tema;
  const reserva = obterReserva(tema, req.params.id);
  if (!reserva) {
    res.status(404).json({ erro: "Reserva não encontrada." });
    return;
  }

  db.prepare("DELETE FROM reservas WHERE tema = ? AND id = ?").run(tema, reserva.id);
  res.status(204).end();
});
