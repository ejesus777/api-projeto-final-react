# API do Projeto Final

API REST que o frontend em React do teu projeto vai usar. Tem os 7 temas do projeto final, cada um com os seus itens (alojamentos, carros, espaços…) e as suas reservas, guardados numa base de dados SQLite.

Não precisas de alterar o código da API — só de a instalar, arrancar e usar.

## 1. Requisitos

- **Node.js 18 ou superior** (confirma com `node -v`)
- **Postman** e a coleção do teu tema, que recebes no Teams (para adicionar as imagens aos itens — ver secção 8)

## 2. Instalar e arrancar

Na pasta da API, num terminal:

```bash
npm install
npm run seed
npm start
```

| Comando | O que faz |
|---|---|
| `npm install` | Instala as dependências (só é preciso uma vez). |
| `npm run seed` | Cria o ficheiro `dados.db` com os dados iniciais dos 7 temas. |
| `npm start` | Arranca a API em **http://localhost:3001**. |

Deixa este terminal aberto enquanto trabalhas no frontend. Para parar a API: `Ctrl + C`.

Para confirmar que está a funcionar, abre http://localhost:3001 no browser — aparece a lista de temas.

## 3. O teu tema

Todos os pedidos começam pelo tema do teu grupo. Define-o numa constante no teu projeto React e usa-a em todo o lado:

```js
const API = "http://localhost:3001/o-teu-tema"; // troca pelo URL base do teu tema (tabela abaixo)
```

| Tema | URL base | Preço | `quantidade` na reserva | Campos próprios do tema |
|---|---|---|---|---|
| Estadias | `/estadias` | `precoNoite` | n.º de hóspedes | `quartos`, `casasDeBanho`, `wifi`, `piscina`, `aceitaAnimais` |
| Rent-a-car | `/rentacar` | `precoDia` | n.º de passageiros (com o condutor) | `caixa`, `combustivel`, `portas`, `malas` |
| Autocaravanas | `/autocaravanas` | `precoDia` | n.º de viajantes | `cozinha`, `casaDeBanho`, `chuveiro`, `caixa`, `aceitaAnimais` |
| Quintas e Eventos | `/quintas` | `precoDia` | n.º de convidados | `espacoExterior`, `catering`, `quartos`, `estacionamento` |
| Equipamento Audiovisual | `/audiovisual` | `precoDia` | n.º de unidades do equipamento | `marca`, `acessorios` |
| Hotel para Animais | `/hotelanimais` | `precoNoite` | n.º de animais | `porte`, `espacoExterior`, `passeiosDiarios`, `vigilanciaVeterinaria` |
| Estacionamento no Aeroporto | `/parqueaeroporto` | `precoDia` | n.º de passageiros do transfer | `distanciaTerminalMin`, `lavagem`, `carregamentoEletrico`, `videovigilancia` |

## 4. Pedidos disponíveis

| Método | Rota | Para quê | Resposta |
|---|---|---|---|
| GET | `/{tema}/itens` | Listar todos os itens | `200` com um array |
| GET | `/{tema}/itens/{id}` | Detalhe de um item | `200`, ou `404` |
| GET | `/{tema}/itens/{id}/disponibilidade?inicio=…&fim=…&quantidade=…` | Ver se há disponibilidade | `200` com `{ "disponivel": true }` ou `false`, ou `400` |
| PATCH | `/{tema}/itens/{id}` | Adicionar/alterar a imagem de um item | `200`, ou `400` |
| GET | `/{tema}/reservas` | Listar as reservas | `200` com um array |
| POST | `/{tema}/reservas` | Criar uma reserva | `201`, `400` ou `409` |
| DELETE | `/{tema}/reservas/{id}` | Cancelar uma reserva | `204` (sem corpo), ou `404` |

A pesquisa, os filtros e a ordenação **não** são feitos pela API: o `GET /itens` devolve tudo e é o teu frontend que filtra e ordena.

## 5. Formato dos dados

Os exemplos desta secção são **fictícios** (aluguer de bicicletas, que não é nenhum dos temas). Todos os temas têm os mesmos campos comuns; os campos próprios do teu tema estão na tabela da secção 3.

**Item:**

```json
{
  "id": 1,
  "nome": "Bicicleta Elétrica Urbana",
  "descricao": "Bicicleta elétrica com cesto, ideal para passeios na cidade.",
  "categoria": "Elétrica",
  "localizacao": "Aveiro",
  "precoDia": 25,
  "capacidade": 1,
  "unidades": 4,
  "avaliacao": 4.5,
  "imagem": null,
  "velocidades": 7,
  "autonomiaKm": 60
}
```

- `capacidade` — o máximo que se pode pôr em `quantidade` numa reserva deste item.
- `unidades` — quantos exemplares iguais existem (ex.: 4 bicicletas iguais). É a API que usa isto para calcular a disponibilidade; não precisas de fazer contas com ele.
- `imagem` — começa a `null`; és tu que a acrescentas (secção 8).

**Reserva:**

```json
{
  "id": 7,
  "itemId": 1,
  "itemNome": "Bicicleta Elétrica Urbana",
  "dataInicio": "2026-10-10",
  "dataFim": "2026-10-13",
  "quantidade": 1,
  "nome": "Ana Silva",
  "email": "ana.silva@exemplo.pt",
  "total": 100,
  "criadaEm": "2026-09-27T15:06:33.125Z"
}
```

## 6. Exemplos com `fetch`

### Listar itens

```js
const resposta = await fetch(`${API}/itens`);
const itens = await resposta.json();
```

### Detalhe de um item

```js
const resposta = await fetch(`${API}/itens/${id}`);
if (!resposta.ok) {
  // 404: o item não existe
}
const item = await resposta.json();
```

### Verificar disponibilidade

```js
const url = `${API}/itens/${id}/disponibilidade?inicio=${dataInicio}&fim=${dataFim}&quantidade=${quantidade}`;
const resposta = await fetch(url);
const dados = await resposta.json();

if (!resposta.ok) {
  console.log(dados.erro); // ex.: "A data de início não pode ser anterior a hoje."
} else if (dados.disponivel) {
  // pode reservar
}
```

### Criar uma reserva

```js
const resposta = await fetch(`${API}/reservas`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    itemId: Number(id),
    dataInicio: "2026-10-10",
    dataFim: "2026-10-13",
    quantidade: Number(quantidade),
    nome: "Ana Silva",
    email: "ana.silva@exemplo.pt",
  }),
});
const dados = await resposta.json();

if (resposta.ok) {
  // 201: reserva criada — dados.total tem o preço final
} else {
  // 400 (dados inválidos) ou 409 (sem disponibilidade)
  setErro(dados.erro);
}
```

> `itemId` e `quantidade` têm de ser **números**. Os valores que vêm de um `<input>` ou do `useParams()` são texto — converte-os com `Number()`.

### Listar as reservas

```js
const resposta = await fetch(`${API}/reservas`);
const reservas = await resposta.json();
```

### Cancelar uma reserva

```js
const resposta = await fetch(`${API}/reservas/${reserva.id}`, { method: "DELETE" });
if (resposta.ok) {
  // 204: cancelada — atualiza a lista
}
```

## 7. Usar o `fetch` num componente React

Os pedidos da secção 6 usam-se assim dentro de um componente: o GET no `useEffect` (para carregar os dados quando o componente aparece) e o POST e o DELETE em funções chamadas por eventos (`onSubmit`, `onClick`). Depois de cada pedido, atualiza o state com a resposta.

### GET — carregar dados quando o componente aparece

```jsx
const [reservas, setReservas] = useState([]);

useEffect(() => {
  async function carregarReservas() {
    const resposta = await fetch(`${API}/reservas`);
    setReservas(await resposta.json());
  }
  carregarReservas();
}, []);
```

> A função passada ao `useEffect` não pode ser `async`: cria uma função `async` lá dentro e chama-a.

### POST — criar, a partir de um evento

```jsx
async function criarReserva(novaReserva) {
  const resposta = await fetch(`${API}/reservas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(novaReserva),
  });
  const dados = await resposta.json();

  if (!resposta.ok) {
    setErro(dados.erro);
    return;
  }
  setReservas([...reservas, dados]);
}
```

### DELETE — cancelar, a partir de um botão

```jsx
async function cancelarReserva(id) {
  const resposta = await fetch(`${API}/reservas/${id}`, { method: "DELETE" });
  if (resposta.ok) {
    setReservas(reservas.filter((reserva) => reserva.id !== id));
  }
}

// no JSX:
<button onClick={() => cancelarReserva(reserva.id)}>Cancelar</button>
```

Se a API não estiver a correr, o `fetch` lança um erro: envolve o pedido num `try { … } catch { … }` para mostrares uma mensagem ao utilizador.

## 8. Adicionar imagens aos itens (Postman)

Os itens começam sem imagem. Cada grupo escolhe as fotos e acrescenta-as através da API.

1. No Postman: **Import** → escolhe a coleção do teu tema (`API Projeto Final - <tema>.postman_collection.json`), que recebes no Teams. Já vem configurada para o teu tema.
2. Procura uma foto no [Unsplash](https://unsplash.com) ou no [Pexels](https://www.pexels.com), abre-a, clica com o botão direito → **Copiar endereço da imagem**.
3. Abre o pedido **Itens → Adicionar imagem a um item**. No separador **Variables** da coleção, muda `itemId` para o item certo, e no corpo do pedido troca `cola-aqui-o-link-da-imagem` pelo link:

   ```json
   { "imagem": "https://images.unsplash.com/photo-…" }
   ```

4. **Send**. Repete para cada item.

Regras: só se pode alterar o campo `imagem`, o link tem de começar por `https://`, e `null` remove a imagem.

No frontend, mostra uma imagem de substituição quando `item.imagem` for `null`.

## 9. Regras das reservas

- Datas no formato `AAAA-MM-DD`. A data de início não pode ser anterior a hoje.
- **Temas por noites** (Estadias, Hotel para Animais): a data de fim tem de ser depois da de início. Entrada a 10 e saída a 13 = **3 noites**. Quem sai a 13 não impede outra reserva que entre a 13.
- **Temas por dias** (os restantes): a data de fim pode ser igual à de início (1 dia). De 10 a 13 = **4 dias**.
- `quantidade` entre 1 e a `capacidade` do item. `nome` obrigatório e `email` válido.
- **Total** = preço × n.º de noites/dias (no Audiovisual, × quantidade também). É calculado pela API.

## 10. Erros

Todos os erros vêm em JSON, com uma mensagem pronta a mostrar ao utilizador:

```json
{ "erro": "Sem disponibilidade para as datas escolhidas." }
```

| Código | Quando |
|---|---|
| `400` | Dados inválidos (datas, quantidade, email, JSON mal formado…) |
| `404` | Tema, item, reserva ou rota que não existe |
| `409` | Sem disponibilidade para as datas pedidas |

## 11. Entrega do projeto

As tuas reservas e imagens ficam no ficheiro **`dados.db`**, na pasta da API. Quando entregares o projeto, **inclui este ficheiro no `.zip`**.

## 12. Voltar aos dados iniciais

```bash
npm run seed              # repõe todos os temas
npm run seed -- <tema>   # repõe só o teu tema (nome da tabela da secção 3)
```

⚠️ Isto **apaga as reservas e imagens** que acrescentaste (a API pede confirmação antes).

## Outras opções

| Comando | O que faz |
|---|---|
| `npm start -- --db caminho/outro.db` | Arranca a API com outro ficheiro de base de dados. |
| `npm run seed -- --sim` | Repõe os dados sem pedir confirmação. |
| `npm run typecheck` | Verifica os tipos do código TypeScript. |
