import type { DadosTema } from "./tipos";

// capacidade = lotação do transfer; unidades = lugares do parque
export const parqueaeroporto: DadosTema = {
  itens: [
    {
      nome: "Parque Coberto Lisboa Norte",
      descricao: "Parque coberto com transfer gratuito para os terminais 1 e 2.",
      categoria: "Coberto", localizacao: "Aeroporto de Lisboa", preco: 12, capacidade: 7, unidades: 200, avaliacao: 4.5,
      extras: { distanciaTerminalMin: 8, lavagem: true, carregamentoEletrico: true, videovigilancia: true },
    },
    {
      nome: "Parque Económico Lisboa",
      descricao: "Parque ao ar livre, a opção mais barata para viagens longas.",
      categoria: "Descoberto", localizacao: "Aeroporto de Lisboa", preco: 6, capacidade: 8, unidades: 300, avaliacao: 4.0,
      extras: { distanciaTerminalMin: 15, lavagem: false, carregamentoEletrico: false, videovigilancia: true },
    },
    {
      nome: "Parque Premium Lisboa",
      descricao: "Parque coberto com valet: entregas o carro à porta do terminal.",
      categoria: "Coberto", localizacao: "Aeroporto de Lisboa", preco: 18, capacidade: 4, unidades: 2, avaliacao: 4.9,
      extras: { distanciaTerminalMin: 3, lavagem: true, carregamentoEletrico: true, videovigilancia: true },
    },
    {
      nome: "Parque Coberto Porto",
      descricao: "Parque coberto com transfer de 10 em 10 minutos.",
      categoria: "Coberto", localizacao: "Aeroporto do Porto", preco: 10, capacidade: 7, unidades: 150, avaliacao: 4.4,
      extras: { distanciaTerminalMin: 6, lavagem: true, carregamentoEletrico: false, videovigilancia: true },
    },
    {
      nome: "Parque Descoberto Maia",
      descricao: "Parque vedado ao ar livre, com transfer a pedido.",
      categoria: "Descoberto", localizacao: "Aeroporto do Porto", preco: 5, capacidade: 8, unidades: 250, avaliacao: 4.1,
      extras: { distanciaTerminalMin: 12, lavagem: false, carregamentoEletrico: false, videovigilancia: true },
    },
    {
      nome: "Parque Elétrico Porto",
      descricao: "Parque coberto com posto de carregamento em todos os lugares.",
      categoria: "Coberto", localizacao: "Aeroporto do Porto", preco: 14, capacidade: 5, unidades: 40, avaliacao: 4.7,
      extras: { distanciaTerminalMin: 7, lavagem: false, carregamentoEletrico: true, videovigilancia: true },
    },
    {
      nome: "Parque Coberto Faro",
      descricao: "Parque coberto com sombra garantida no verão algarvio.",
      categoria: "Coberto", localizacao: "Aeroporto de Faro", preco: 11, capacidade: 7, unidades: 120, avaliacao: 4.5,
      extras: { distanciaTerminalMin: 5, lavagem: true, carregamentoEletrico: false, videovigilancia: true },
    },
    {
      nome: "Parque Descoberto Faro",
      descricao: "Parque ao ar livre com transfer incluído, a 10 minutos do terminal.",
      categoria: "Descoberto", localizacao: "Aeroporto de Faro", preco: 5, capacidade: 8, unidades: 200, avaliacao: 3.9,
      extras: { distanciaTerminalMin: 10, lavagem: false, carregamentoEletrico: false, videovigilancia: false },
    },
    {
      nome: "Parque Low Cost Faro",
      descricao: "Parque simples para quem viaja com pouco orçamento.",
      categoria: "Descoberto", localizacao: "Aeroporto de Faro", preco: 4, capacidade: 6, unidades: 180, avaliacao: 3.8,
      extras: { distanciaTerminalMin: 18, lavagem: false, carregamentoEletrico: false, videovigilancia: true },
    },
    {
      nome: "Parque Descoberto Lisboa Sul",
      descricao: "Parque ao ar livre com lavagem opcional durante a viagem.",
      categoria: "Descoberto", localizacao: "Aeroporto de Lisboa", preco: 7, capacidade: 7, unidades: 220, avaliacao: 4.2,
      extras: { distanciaTerminalMin: 12, lavagem: true, carregamentoEletrico: false, videovigilancia: true },
    },
  ],
  reservas: [
    { itemId: 3, comecaDaquiA: 5, duracao: 4, quantidade: 2, nome: "Helena Dias", email: "helena.dias@exemplo.pt" },
    { itemId: 3, comecaDaquiA: 6, duracao: 3, quantidade: 1, nome: "Nuno Almeida", email: "nuno.almeida@exemplo.pt" },
    { itemId: 1, comecaDaquiA: 9, duracao: 8, quantidade: 4, nome: "Família Correia", email: "correia@exemplo.pt" },
  ],
};
