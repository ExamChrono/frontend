import {TypeSalle} from "../../Enum/type-salle";
import {PassExamen} from "../PassExamen/pass-examen";
import {Surveille} from "../Surveille/surveille";

export class Salle {
  id?: number;
  numero_salle?: number;
  type_salle? :TypeSalle;
  capacite?: number;
  passExamen?: PassExamen;
  surveille?: Surveille;
}
