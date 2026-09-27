export interface ItemInicial {
  nome: string;
  descricao: string;
  categoria: string;
  localizacao: string;
  preco: number;
  capacidade: number;
  unidades?: number;
  avaliacao: number;
  extras: Record<string, string | number | boolean>;
}

export interface ReservaInicial {
  itemId: number;
  // dias a contar de hoje
  comecaDaquiA: number;
  // n.º de noites ou de dias, conforme o tema
  duracao: number;
  quantidade: number;
  nome: string;
  email: string;
}

export interface DadosTema {
  itens: ItemInicial[];
  reservas: ReservaInicial[];
}
