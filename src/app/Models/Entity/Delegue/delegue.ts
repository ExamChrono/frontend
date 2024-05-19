import { Etudiant } from "../Etudiant/etudiant";
import {RoleUser} from "../../Enum/role-user";

export class Delegue {
  id?: number;
  etudiant?: Etudiant;
  roleUser?: RoleUser;
  filiere?: string;
}
