import type { DadosTema } from "./tipos";

// capacidade = animais por espaço; unidades = n.º de espaços iguais
export const hotelanimais: DadosTema = {
  itens: [
    {
      nome: "Box Clássica",
      descricao: "Box individual interior com cama ortopédica e dois passeios por dia.",
      categoria: "Cão", localizacao: "Lisboa", preco: 18, capacidade: 1, unidades: 6, avaliacao: 4.3,
      extras: { porte: "Pequeno", espacoExterior: false, passeiosDiarios: 2, vigilanciaVeterinaria: false },
    },
    {
      nome: "Box Clássica Plus",
      descricao: "Box maior para cães de porte médio, com acesso a pátio.",
      categoria: "Cão", localizacao: "Lisboa", preco: 24, capacidade: 2, unidades: 4, avaliacao: 4.5,
      extras: { porte: "Médio", espacoExterior: true, passeiosDiarios: 2, vigilanciaVeterinaria: false },
    },
    {
      nome: "Suite Jardim",
      descricao: "Suite com relvado privado para cães grandes que precisam de espaço.",
      categoria: "Cão", localizacao: "Lisboa", preco: 38, capacidade: 2, unidades: 2, avaliacao: 4.8,
      extras: { porte: "Grande", espacoExterior: true, passeiosDiarios: 3, vigilanciaVeterinaria: true },
    },
    {
      nome: "Box Porto Centro",
      descricao: "Box interior climatizada, a 5 minutos da estação de Campanhã.",
      categoria: "Cão", localizacao: "Porto", preco: 20, capacidade: 1, unidades: 5, avaliacao: 4.2,
      extras: { porte: "Pequeno", espacoExterior: false, passeiosDiarios: 2, vigilanciaVeterinaria: false },
    },
    {
      nome: "Canil Quinta da Maia",
      descricao: "Espaço rural com campo vedado para brincar em grupo.",
      categoria: "Cão", localizacao: "Porto", preco: 26, capacidade: 2, unidades: 4, avaliacao: 4.6,
      extras: { porte: "Médio", espacoExterior: true, passeiosDiarios: 3, vigilanciaVeterinaria: false },
    },
    {
      nome: "Suite Família",
      descricao: "Suite para até três cães da mesma família, com câmara para os donos.",
      categoria: "Cão", localizacao: "Porto", preco: 45, capacidade: 3, unidades: 2, avaliacao: 4.9,
      extras: { porte: "Grande", espacoExterior: true, passeiosDiarios: 3, vigilanciaVeterinaria: true },
    },
    {
      nome: "Gatil Tranquilo",
      descricao: "Espaço só para gatos, longe dos cães, com arranhadores e prateleiras.",
      categoria: "Gato", localizacao: "Lisboa", preco: 15, capacidade: 2, unidades: 6, avaliacao: 4.6,
      extras: { porte: "Pequeno", espacoExterior: false, passeiosDiarios: 0, vigilanciaVeterinaria: false },
    },
    {
      nome: "Suite Felina",
      descricao: "Suite com janela para o jardim e acompanhamento veterinário diário.",
      categoria: "Gato", localizacao: "Lisboa", preco: 22, capacidade: 3, unidades: 3, avaliacao: 4.8,
      extras: { porte: "Médio", espacoExterior: false, passeiosDiarios: 0, vigilanciaVeterinaria: true },
    },
    {
      nome: "Gatil Porto",
      descricao: "Gatil climatizado com zona de brincadeira e visita diária do veterinário.",
      categoria: "Gato", localizacao: "Porto", preco: 17, capacidade: 2, unidades: 5, avaliacao: 4.4,
      extras: { porte: "Pequeno", espacoExterior: false, passeiosDiarios: 0, vigilanciaVeterinaria: true },
    },
    {
      nome: "Box Faro Praia",
      descricao: "Box com pátio no Algarve, para quem vai de férias e deixa o cão perto.",
      categoria: "Cão", localizacao: "Faro", preco: 22, capacidade: 2, unidades: 1, avaliacao: 4.4,
      extras: { porte: "Médio", espacoExterior: true, passeiosDiarios: 2, vigilanciaVeterinaria: false },
    },
  ],
  reservas: [
    { itemId: 10, comecaDaquiA: 3, duracao: 7, quantidade: 1, nome: "Paula Sousa", email: "paula.sousa@exemplo.pt" },
    { itemId: 8, comecaDaquiA: 8, duracao: 4, quantidade: 2, nome: "Miguel Rocha", email: "miguel.rocha@exemplo.pt" },
  ],
};
