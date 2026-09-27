import type { DadosTema } from "./tipos";

// capacidade = máximo de unidades por reserva; unidades = total em stock
export const audiovisual: DadosTema = {
  itens: [
    {
      nome: "Sony A7 IV",
      descricao: "Câmara mirrorless full-frame, 33 MP e vídeo 4K a 60 fps.",
      categoria: "Câmara", localizacao: "Lisboa", preco: 45, capacidade: 3, unidades: 3, avaliacao: 4.8,
      extras: { marca: "Sony", acessorios: "2 baterias, carregador, cartão 128 GB" },
    },
    {
      nome: "Canon EOS R6 Mark II",
      descricao: "Câmara full-frame com estabilização no sensor, muito usada em casamentos.",
      categoria: "Câmara", localizacao: "Porto", preco: 50, capacidade: 2, unidades: 2, avaliacao: 4.7,
      extras: { marca: "Canon", acessorios: "2 baterias, carregador, cartão 128 GB" },
    },
    {
      nome: "Blackmagic Pocket 6K",
      descricao: "Câmara de cinema compacta com gravação em RAW.",
      categoria: "Câmara", localizacao: "Lisboa", preco: 60, capacidade: 1, unidades: 1, avaliacao: 4.6,
      extras: { marca: "Blackmagic", acessorios: "3 baterias, SSD 1 TB" },
    },
    {
      nome: "DJI Mini 4 Pro",
      descricao: "Drone com menos de 250 g, vídeo 4K e deteção de obstáculos.",
      categoria: "Drone", localizacao: "Porto", preco: 35, capacidade: 2, unidades: 2, avaliacao: 4.7,
      extras: { marca: "DJI", acessorios: "3 baterias, comando com ecrã" },
    },
    {
      nome: "DJI Air 3",
      descricao: "Drone com duas câmaras e 46 minutos de voo.",
      categoria: "Drone", localizacao: "Lisboa", preco: 55, capacidade: 1, unidades: 1, avaliacao: 4.8,
      extras: { marca: "DJI", acessorios: "3 baterias, filtros ND" },
    },
    {
      nome: "Aputure 300d II",
      descricao: "Projetor LED de 300 W para entrevistas e produções em estúdio.",
      categoria: "Iluminação", localizacao: "Lisboa", preco: 40, capacidade: 4, unidades: 4, avaliacao: 4.6,
      extras: { marca: "Aputure", acessorios: "Softbox, tripé de luz" },
    },
    {
      nome: "Kit Godox SL60 (x3)",
      descricao: "Kit de três luzes LED para iluminação de três pontos.",
      categoria: "Iluminação", localizacao: "Porto", preco: 30, capacidade: 2, unidades: 2, avaliacao: 4.3,
      extras: { marca: "Godox", acessorios: "3 tripés, 3 softboxes, mala" },
    },
    {
      nome: "Rode Wireless PRO",
      descricao: "Sistema de microfones sem fios com gravação interna.",
      categoria: "Som", localizacao: "Lisboa", preco: 20, capacidade: 5, unidades: 5, avaliacao: 4.7,
      extras: { marca: "Rode", acessorios: "2 emissores, recetor, lapelas" },
    },
    {
      nome: "Zoom H6",
      descricao: "Gravador portátil de 6 pistas para som de campo e podcasts.",
      categoria: "Som", localizacao: "Porto", preco: 18, capacidade: 3, unidades: 3, avaliacao: 4.5,
      extras: { marca: "Zoom", acessorios: "Microfone XY, estojo" },
    },
    {
      nome: "Sennheiser MKE 600",
      descricao: "Microfone shotgun para montar na câmara ou numa girafa.",
      categoria: "Som", localizacao: "Lisboa", preco: 15, capacidade: 4, unidades: 4, avaliacao: 4.4,
      extras: { marca: "Sennheiser", acessorios: "Espuma e peluche anti-vento" },
    },
    {
      nome: "Sony FX3",
      descricao: "Câmara de cinema compacta com ventilação ativa para gravações longas.",
      categoria: "Câmara", localizacao: "Porto", preco: 85, capacidade: 1, unidades: 1, avaliacao: 4.9,
      extras: { marca: "Sony", acessorios: "2 baterias, pega XLR" },
    },
    {
      nome: "Canon EOS R50",
      descricao: "Câmara leve para criadores de conteúdo, com ecrã articulado.",
      categoria: "Câmara", localizacao: "Lisboa", preco: 25, capacidade: 3, unidades: 4, avaliacao: 4.2,
      extras: { marca: "Canon", acessorios: "Bateria, carregador, cartão 64 GB" },
    },
  ],
  reservas: [
    { itemId: 2, comecaDaquiA: 5, duracao: 3, quantidade: 2, nome: "Filmes do Norte, Lda.", email: "producao@filmesdonorte.pt" },
    { itemId: 8, comecaDaquiA: 2, duracao: 2, quantidade: 3, nome: "Podcast Café com Código", email: "ola@cafecomcodigo.pt" },
  ],
};
