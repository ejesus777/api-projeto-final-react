import type { DadosTema } from "./tipos";
import { estadias } from "./estadias";
import { rentacar } from "./rentacar";
import { autocaravanas } from "./autocaravanas";
import { quintas } from "./quintas";
import { audiovisual } from "./audiovisual";
import { hotelanimais } from "./hotelanimais";
import { parqueaeroporto } from "./parqueaeroporto";

export const dadosIniciais: Record<string, DadosTema> = {
  estadias,
  rentacar,
  autocaravanas,
  quintas,
  audiovisual,
  hotelanimais,
  parqueaeroporto,
};
