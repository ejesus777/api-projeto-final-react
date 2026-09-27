import type { DadosTema } from "./tipos";

export const rentacar: DadosTema = {
  itens: [
    {
      nome: "Fiat 500",
      descricao: "Citadino compacto, fácil de estacionar no centro da cidade.",
      categoria: "Citadino", localizacao: "Lisboa", preco: 32, capacidade: 4, unidades: 3, avaliacao: 4.3,
      extras: { caixa: "Manual", combustivel: "Gasolina", portas: 3, malas: 1 },
    },
    {
      nome: "Renault Clio",
      descricao: "Citadino económico com ar condicionado e Bluetooth.",
      categoria: "Citadino", localizacao: "Porto", preco: 35, capacidade: 5, unidades: 3, avaliacao: 4.4,
      extras: { caixa: "Manual", combustivel: "Gasolina", portas: 5, malas: 2 },
    },
    {
      nome: "Peugeot 208",
      descricao: "Citadino moderno com ecrã tátil e sensores de estacionamento.",
      categoria: "Citadino", localizacao: "Faro", preco: 36, capacidade: 5, unidades: 2, avaliacao: 4.5,
      extras: { caixa: "Manual", combustivel: "Gasolina", portas: 5, malas: 2 },
    },
    {
      nome: "Dacia Sandero",
      descricao: "A opção mais económica da frota, sem abdicar do espaço.",
      categoria: "Citadino", localizacao: "Faro", preco: 29, capacidade: 5, unidades: 4, avaliacao: 4.1,
      extras: { caixa: "Manual", combustivel: "Gasolina", portas: 5, malas: 2 },
    },
    {
      nome: "Volkswagen Golf Variant",
      descricao: "Carrinha familiar com bagageira grande, ideal para férias.",
      categoria: "Familiar", localizacao: "Lisboa", preco: 55, capacidade: 5, unidades: 2, avaliacao: 4.6,
      extras: { caixa: "Manual", combustivel: "Gasóleo", portas: 5, malas: 4 },
    },
    {
      nome: "Toyota Corolla Touring Sports",
      descricao: "Familiar híbrido, silencioso e com consumos baixos.",
      categoria: "Familiar", localizacao: "Porto", preco: 58, capacidade: 5, unidades: 2, avaliacao: 4.7,
      extras: { caixa: "Automática", combustivel: "Híbrido", portas: 5, malas: 4 },
    },
    {
      nome: "Nissan Qashqai",
      descricao: "SUV confortável com posição de condução elevada.",
      categoria: "SUV", localizacao: "Lisboa", preco: 70, capacidade: 5, unidades: 2, avaliacao: 4.5,
      extras: { caixa: "Manual", combustivel: "Gasolina", portas: 5, malas: 3 },
    },
    {
      nome: "Peugeot 3008",
      descricao: "SUV com caixa automática e câmara de estacionamento.",
      categoria: "SUV", localizacao: "Faro", preco: 72, capacidade: 5, unidades: 1, avaliacao: 4.6,
      extras: { caixa: "Automática", combustivel: "Gasóleo", portas: 5, malas: 3 },
    },
    {
      nome: "Renault Trafic 9 lugares",
      descricao: "Carrinha de 9 lugares para grupos grandes ou eventos de empresa.",
      categoria: "Carrinha", localizacao: "Lisboa", preco: 110, capacidade: 9, unidades: 1, avaliacao: 4.4,
      extras: { caixa: "Manual", combustivel: "Gasóleo", portas: 4, malas: 6 },
    },
    {
      nome: "Mercedes Vito 8 lugares",
      descricao: "Carrinha premium de 8 lugares com bancos em pele.",
      categoria: "Carrinha", localizacao: "Porto", preco: 125, capacidade: 8, unidades: 1, avaliacao: 4.8,
      extras: { caixa: "Automática", combustivel: "Gasóleo", portas: 4, malas: 6 },
    },
    {
      nome: "Tesla Model 3",
      descricao: "Elétrico com 500 km de autonomia e acesso à rede de Superchargers.",
      categoria: "Elétrico", localizacao: "Lisboa", preco: 95, capacidade: 5, unidades: 1, avaliacao: 4.9,
      extras: { caixa: "Automática", combustivel: "Elétrico", portas: 4, malas: 3 },
    },
    {
      nome: "Renault Zoe",
      descricao: "Elétrico citadino, perfeito para deslocações urbanas.",
      categoria: "Elétrico", localizacao: "Porto", preco: 45, capacidade: 5, unidades: 2, avaliacao: 4.3,
      extras: { caixa: "Automática", combustivel: "Elétrico", portas: 5, malas: 2 },
    },
  ],
  reservas: [
    { itemId: 8, comecaDaquiA: 3, duracao: 5, quantidade: 4, nome: "Marta Lopes", email: "marta.lopes@exemplo.pt" },
    { itemId: 11, comecaDaquiA: 7, duracao: 2, quantidade: 2, nome: "João Pires", email: "joao.pires@exemplo.pt" },
  ],
};
