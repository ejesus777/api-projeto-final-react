import { Router } from "express";
import { db } from "../db";
import { formatarItem, linkHttpsValido, listarItens, obterItem } from "../itens";
import { estaDisponivel, validarPeriodo } from "../reservas";

export const rotasItens = Router();

rotasItens.get("/", (_req, res) => {
  res.json(listarItens(res.locals.tema).map(formatarItem));
});

rotasItens.get("/:id", (req, res) => {
  const item = obterItem(res.locals.tema, req.params.id);
  if (!item) {
    res.status(404).json({ erro: "Item não encontrado." });
    return;
  }
  res.json(formatarItem(item));
});

rotasItens.get("/:id/disponibilidade", (req, res) => {
  const tema = res.locals.tema;
  const item = obterItem(tema, req.params.id);
  if (!item) {
    res.status(404).json({ erro: "Item não encontrado." });
    return;
  }

  const { inicio, fim } = req.query;
  const quantidade = req.query.quantidade === undefined ? 1 : Number(req.query.quantidade);

  const erro = validarPeriodo(tema, item, inicio, fim, quantidade);
  if (erro) {
    res.status(400).json({ erro });
    return;
  }

  res.json({
    disponivel: estaDisponivel(tema, item, inicio as string, fim as string, quantidade),
  });
});

rotasItens.patch("/:id", (req, res) => {
  const tema = res.locals.tema;
  const item = obterItem(tema, req.params.id);
  if (!item) {
    res.status(404).json({ erro: "Item não encontrado." });
    return;
  }

  const campos = Object.keys(req.body ?? {});
  if (campos.length !== 1 || campos[0] !== "imagem") {
    res.status(400).json({ erro: "Só é possível alterar o campo imagem." });
    return;
  }

  const { imagem } = req.body;
  if (imagem !== null && !linkHttpsValido(imagem)) {
    res.status(400).json({ erro: "A imagem tem de ser um link https:// válido (ou null para a remover)." });
    return;
  }

  db.prepare("UPDATE itens SET imagem = ? WHERE tema = ? AND id = ?").run(imagem, tema, item.id);
  res.json(formatarItem({ ...item, imagem }));
});
