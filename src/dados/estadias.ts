import type { DadosTema } from "./tipos";

export const estadias: DadosTema = {
  itens: [
    {
      nome: "Estúdio Alfama com Vista Rio",
      descricao: "Estúdio renovado num prédio antigo de Alfama, com janela virada para o Tejo e a 5 minutos a pé do Miradouro de Santa Luzia.",
      categoria: "T0", localizacao: "Lisboa", preco: 75, capacidade: 2, avaliacao: 4.7,
      extras: { quartos: 0, casasDeBanho: 1, wifi: true, piscina: false, aceitaAnimais: false },
    },
    {
      nome: "Apartamento Ribeira",
      descricao: "T1 com varanda sobre o Cais da Ribeira, cozinha equipada e acesso fácil ao metro.",
      categoria: "T1", localizacao: "Porto", preco: 85, capacidade: 2, avaliacao: 4.8,
      extras: { quartos: 1, casasDeBanho: 1, wifi: true, piscina: false, aceitaAnimais: false },
    },
    {
      nome: "Loft Cedofeita",
      descricao: "Loft em open space na zona das galerias de arte, ideal para uma escapadinha a dois.",
      categoria: "T0", localizacao: "Porto", preco: 60, capacidade: 2, avaliacao: 4.4,
      extras: { quartos: 0, casasDeBanho: 1, wifi: true, piscina: false, aceitaAnimais: true },
    },
    {
      nome: "T2 Príncipe Real",
      descricao: "Apartamento amplo com dois quartos, perto do Jardim do Príncipe Real e do Bairro Alto.",
      categoria: "T2", localizacao: "Lisboa", preco: 140, capacidade: 4, avaliacao: 4.6,
      extras: { quartos: 2, casasDeBanho: 2, wifi: true, piscina: false, aceitaAnimais: false },
    },
    {
      nome: "Casa da Praia da Rocha",
      descricao: "T2 num condomínio com piscina, a 200 metros da Praia da Rocha.",
      categoria: "T2", localizacao: "Portimão", preco: 120, capacidade: 5, avaliacao: 4.5,
      extras: { quartos: 2, casasDeBanho: 1, wifi: true, piscina: true, aceitaAnimais: false },
    },
    {
      nome: "Moradia com Piscina em Lagos",
      descricao: "Moradia isolada com piscina privada, churrasqueira e vista para a Ponta da Piedade.",
      categoria: "Moradia", localizacao: "Lagos", preco: 260, capacidade: 8, avaliacao: 4.9,
      extras: { quartos: 4, casasDeBanho: 3, wifi: true, piscina: true, aceitaAnimais: true },
    },
    {
      nome: "Apartamento Baixa de Coimbra",
      descricao: "T1 acolhedor na Baixa, a subir a pé para a Universidade em 10 minutos.",
      categoria: "T1", localizacao: "Coimbra", preco: 65, capacidade: 3, avaliacao: 4.3,
      extras: { quartos: 1, casasDeBanho: 1, wifi: true, piscina: false, aceitaAnimais: false },
    },
    {
      nome: "Casa de Campo em Sintra",
      descricao: "Casa de pedra com jardim e lareira, rodeada pela serra e a 10 minutos do centro histórico.",
      categoria: "Moradia", localizacao: "Sintra", preco: 180, capacidade: 6, avaliacao: 4.7,
      extras: { quartos: 3, casasDeBanho: 2, wifi: true, piscina: false, aceitaAnimais: true },
    },
    {
      nome: "T3 Foz do Douro",
      descricao: "Apartamento familiar junto ao mar, com garagem e perto do Parque da Cidade.",
      categoria: "T3", localizacao: "Porto", preco: 190, capacidade: 6, avaliacao: 4.6,
      extras: { quartos: 3, casasDeBanho: 2, wifi: true, piscina: false, aceitaAnimais: false },
    },
    {
      nome: "Estúdio Centro Histórico de Braga",
      descricao: "Estúdio funcional a dois passos da Sé e da Avenida Central.",
      categoria: "T0", localizacao: "Braga", preco: 55, capacidade: 2, avaliacao: 4.2,
      extras: { quartos: 0, casasDeBanho: 1, wifi: true, piscina: false, aceitaAnimais: false },
    },
    {
      nome: "T1 Marina de Albufeira",
      descricao: "T1 com varanda sobre a marina, piscina comum e restaurantes à porta.",
      categoria: "T1", localizacao: "Albufeira", preco: 95, capacidade: 3, avaliacao: 4.4,
      extras: { quartos: 1, casasDeBanho: 1, wifi: true, piscina: true, aceitaAnimais: false },
    },
    {
      nome: "T2 Parque das Nações",
      descricao: "Apartamento moderno com vista rio, perto do Oceanário e da estação do Oriente.",
      categoria: "T2", localizacao: "Lisboa", preco: 130, capacidade: 4, avaliacao: 4.5,
      extras: { quartos: 2, casasDeBanho: 2, wifi: true, piscina: false, aceitaAnimais: false },
    },
  ],
  reservas: [
    { itemId: 2, comecaDaquiA: 5, duracao: 3, quantidade: 2, nome: "Ana Ferreira", email: "ana.ferreira@exemplo.pt" },
    { itemId: 6, comecaDaquiA: 10, duracao: 7, quantidade: 6, nome: "Rui Costa", email: "rui.costa@exemplo.pt" },
  ],
};
