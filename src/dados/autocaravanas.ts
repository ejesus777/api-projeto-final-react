import type { DadosTema } from "./tipos";

export const autocaravanas: DadosTema = {
  itens: [
    {
      nome: "VW California Ocean",
      descricao: "Campervan com teto elevatório, cozinha e toldo lateral. Conduz-se como um carro.",
      categoria: "Campervan", localizacao: "Lisboa", preco: 120, capacidade: 4, avaliacao: 4.8,
      extras: { cozinha: true, casaDeBanho: false, chuveiro: false, caixa: "Automática", aceitaAnimais: true },
    },
    {
      nome: "Mercedes Marco Polo",
      descricao: "Campervan premium com aquecimento estacionário e bancos giratórios.",
      categoria: "Campervan", localizacao: "Porto", preco: 135, capacidade: 4, avaliacao: 4.7,
      extras: { cozinha: true, casaDeBanho: false, chuveiro: false, caixa: "Automática", aceitaAnimais: false },
    },
    {
      nome: "Citroën Jumpy Onda",
      descricao: "Campervan compacta para dois, com cama fixa e frigorífico.",
      categoria: "Campervan", localizacao: "Faro", preco: 85, capacidade: 2, avaliacao: 4.4,
      extras: { cozinha: true, casaDeBanho: false, chuveiro: false, caixa: "Manual", aceitaAnimais: true },
    },
    {
      nome: "Ford Nugget",
      descricao: "Campervan com casa de banho compacta, pensada para viagens longas.",
      categoria: "Campervan", localizacao: "Lisboa", preco: 125, capacidade: 4, avaliacao: 4.6,
      extras: { cozinha: true, casaDeBanho: true, chuveiro: false, caixa: "Manual", aceitaAnimais: false },
    },
    {
      nome: "Fiat Ducato Surf Van",
      descricao: "Van adaptada para surfistas, com suporte de pranchas e duche exterior.",
      categoria: "Campervan", localizacao: "Faro", preco: 95, capacidade: 3, avaliacao: 4.5,
      extras: { cozinha: true, casaDeBanho: false, chuveiro: true, caixa: "Manual", aceitaAnimais: true },
    },
    {
      nome: "Benimar Tessoro 482",
      descricao: "Autocaravana perfilada com cama de casal e salão convertível.",
      categoria: "Autocaravana", localizacao: "Lisboa", preco: 150, capacidade: 4, avaliacao: 4.5,
      extras: { cozinha: true, casaDeBanho: true, chuveiro: true, caixa: "Manual", aceitaAnimais: false },
    },
    {
      nome: "Adria Coral XL",
      descricao: "Autocaravana espaçosa com camas individuais e garagem traseira para bicicletas.",
      categoria: "Autocaravana", localizacao: "Porto", preco: 165, capacidade: 4, avaliacao: 4.7,
      extras: { cozinha: true, casaDeBanho: true, chuveiro: true, caixa: "Automática", aceitaAnimais: true },
    },
    {
      nome: "Sunlight A70 Família",
      descricao: "Capucine com 6 lugares para dormir, ideal para famílias com crianças.",
      categoria: "Autocaravana", localizacao: "Lisboa", preco: 175, capacidade: 6, avaliacao: 4.6,
      extras: { cozinha: true, casaDeBanho: true, chuveiro: true, caixa: "Manual", aceitaAnimais: true },
    },
    {
      nome: "Hymer B-Class",
      descricao: "Autocaravana integral de gama alta com painel solar e aquecimento.",
      categoria: "Autocaravana", localizacao: "Faro", preco: 210, capacidade: 4, avaliacao: 4.9,
      extras: { cozinha: true, casaDeBanho: true, chuveiro: true, caixa: "Automática", aceitaAnimais: false },
    },
    {
      nome: "Rimor Seal 9",
      descricao: "Capucine com beliches, pensada para grupos de amigos.",
      categoria: "Autocaravana", localizacao: "Porto", preco: 160, capacidade: 6, avaliacao: 4.3,
      extras: { cozinha: true, casaDeBanho: true, chuveiro: true, caixa: "Manual", aceitaAnimais: false },
    },
  ],
  reservas: [
    { itemId: 1, comecaDaquiA: 4, duracao: 6, quantidade: 2, nome: "Sofia Martins", email: "sofia.martins@exemplo.pt" },
    { itemId: 8, comecaDaquiA: 12, duracao: 10, quantidade: 5, nome: "Carlos Nunes", email: "carlos.nunes@exemplo.pt" },
  ],
};
