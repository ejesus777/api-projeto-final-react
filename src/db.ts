import Database from "better-sqlite3";
import path from "node:path";

function caminhoDaBaseDeDados(): string {
  const i = process.argv.indexOf("--db");
  const caminho = i !== -1 ? process.argv[i + 1] : undefined;
  return path.resolve(caminho ?? "dados.db");
}

export const ficheiroDb = caminhoDaBaseDeDados();
export const db = new Database(ficheiroDb);

db.pragma("foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS itens (
    tema        TEXT    NOT NULL,
    id          INTEGER NOT NULL,
    nome        TEXT    NOT NULL,
    descricao   TEXT    NOT NULL,
    categoria   TEXT    NOT NULL,
    localizacao TEXT    NOT NULL,
    preco       REAL    NOT NULL,
    capacidade  INTEGER NOT NULL,
    unidades    INTEGER NOT NULL DEFAULT 1,
    avaliacao   REAL    NOT NULL,
    imagem      TEXT,
    extras      TEXT    NOT NULL DEFAULT '{}',
    PRIMARY KEY (tema, id)
  );

  CREATE TABLE IF NOT EXISTS reservas (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    tema       TEXT    NOT NULL,
    itemId     INTEGER NOT NULL,
    dataInicio TEXT    NOT NULL,
    dataFim    TEXT    NOT NULL,
    quantidade INTEGER NOT NULL,
    nome       TEXT    NOT NULL,
    email      TEXT    NOT NULL,
    total      REAL    NOT NULL,
    criadaEm   TEXT    NOT NULL,
    FOREIGN KEY (tema, itemId) REFERENCES itens (tema, id)
  );
`);
