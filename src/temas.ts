export type Periodo = "noite" | "dia";

export interface Tema {
  nome: string;
  periodo: Periodo;
  // true quando a quantidade reservada ocupa unidades (ex.: 2 câmaras iguais)
  quantidadeOcupaUnidades: boolean;
}

export const temas: Record<string, Tema> = {
  estadias:        { nome: "Estadias",                    periodo: "noite", quantidadeOcupaUnidades: false },
  rentacar:        { nome: "Rent-a-car",                  periodo: "dia",   quantidadeOcupaUnidades: false },
  autocaravanas:   { nome: "Autocaravanas",               periodo: "dia",   quantidadeOcupaUnidades: false },
  quintas:         { nome: "Quintas e Eventos",           periodo: "dia",   quantidadeOcupaUnidades: false },
  audiovisual:     { nome: "Equipamento Audiovisual",     periodo: "dia",   quantidadeOcupaUnidades: true },
  hotelanimais:    { nome: "Hotel para Animais",          periodo: "noite", quantidadeOcupaUnidades: false },
  parqueaeroporto: { nome: "Estacionamento no Aeroporto", periodo: "dia",   quantidadeOcupaUnidades: false },
};

export function temaExiste(tema: string): boolean {
  return Object.hasOwn(temas, tema);
}
