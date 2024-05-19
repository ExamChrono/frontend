import {Filiere} from "../Filiere/filiere";
import {Enseignant} from "../Enseignant/enseignant";

export class Surveille {
  id?: number;
  nom?: string;
  groupe?: {
    id?: number;
    nbrEtudiant?: number;
    filiere?: Filiere;
  };
  enseignant?: Enseignant;
  code?: string;
}
