import type { DadosTema } from "./tipos";

export const quintas: DadosTema = {
  itens: [
    {
      nome: "Quinta do Vale Verde",
      descricao: "Quinta minhota com jardins, capela e salão envidraçado para casamentos.",
      categoria: "Quinta", localizacao: "Minho", preco: 3500, capacidade: 250, avaliacao: 4.8,
      extras: { espacoExterior: true, catering: true, quartos: 8, estacionamento: 120 },
    },
    {
      nome: "Quinta da Vinha Alta",
      descricao: "Quinta vinícola no Douro com vista sobre os socalcos e provas de vinho.",
      categoria: "Quinta", localizacao: "Douro", preco: 4200, capacidade: 180, avaliacao: 4.9,
      extras: { espacoExterior: true, catering: true, quartos: 12, estacionamento: 80 },
    },
    {
      nome: "Monte Alentejano das Oliveiras",
      descricao: "Monte tradicional com piscina e olival, para eventos ao pôr do sol.",
      categoria: "Quinta", localizacao: "Alentejo", preco: 2800, capacidade: 150, avaliacao: 4.7,
      extras: { espacoExterior: true, catering: false, quartos: 10, estacionamento: 60 },
    },
    {
      nome: "Salão Nobre da Lapa",
      descricao: "Salão de um palacete do século XIX, com lustres e pé-direito alto.",
      categoria: "Salão", localizacao: "Lisboa", preco: 3000, capacidade: 200, avaliacao: 4.6,
      extras: { espacoExterior: false, catering: true, quartos: 0, estacionamento: 30 },
    },
    {
      nome: "Espaço Armazém 22",
      descricao: "Antigo armazém industrial reconvertido para eventos de empresa e lançamentos.",
      categoria: "Salão", localizacao: "Porto", preco: 1800, capacidade: 300, avaliacao: 4.4,
      extras: { espacoExterior: false, catering: false, quartos: 0, estacionamento: 50 },
    },
    {
      nome: "Salão das Tílias",
      descricao: "Salão de festas familiar, ideal para batizados e aniversários.",
      categoria: "Salão", localizacao: "Centro", preco: 900, capacidade: 120, avaliacao: 4.2,
      extras: { espacoExterior: false, catering: true, quartos: 0, estacionamento: 40 },
    },
    {
      nome: "Jardim da Falésia",
      descricao: "Relvado sobre o mar para cerimónias ao ar livre, com tenda opcional.",
      categoria: "Espaço exterior", localizacao: "Algarve", preco: 2500, capacidade: 150, avaliacao: 4.8,
      extras: { espacoExterior: true, catering: false, quartos: 0, estacionamento: 70 },
    },
    {
      nome: "Pinhal do Lago",
      descricao: "Clareira num pinhal junto a um lago, perfeita para eventos rústicos.",
      categoria: "Espaço exterior", localizacao: "Centro", preco: 1200, capacidade: 200, avaliacao: 4.3,
      extras: { espacoExterior: true, catering: false, quartos: 0, estacionamento: 100 },
    },
    {
      nome: "Terraço Tejo",
      descricao: "Terraço com vista para a Ponte 25 de Abril, para eventos de empresa ao fim do dia.",
      categoria: "Espaço exterior", localizacao: "Lisboa", preco: 2200, capacidade: 100, avaliacao: 4.7,
      extras: { espacoExterior: true, catering: true, quartos: 0, estacionamento: 0 },
    },
    {
      nome: "Quinta da Serra",
      descricao: "Quinta de montanha com lareira e salão em pedra, para eventos de inverno.",
      categoria: "Quinta", localizacao: "Centro", preco: 2100, capacidade: 140, avaliacao: 4.5,
      extras: { espacoExterior: true, catering: true, quartos: 6, estacionamento: 50 },
    },
  ],
  reservas: [
    { itemId: 1, comecaDaquiA: 14, duracao: 1, quantidade: 180, nome: "Inês e Tiago", email: "ines.tiago@exemplo.pt" },
    { itemId: 5, comecaDaquiA: 6, duracao: 2, quantidade: 250, nome: "Tech Summit Porto", email: "eventos@techsummit.pt" },
  ],
};
