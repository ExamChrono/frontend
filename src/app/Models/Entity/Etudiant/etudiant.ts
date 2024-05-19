import {RoleUser} from "../../Enum/role-user";

export class Etudiant {
  id?: number;
  matricule?: string;
  email?: string;
  nom?: string;
  prenom?: string;
  validation?: boolean;
  roleUser?: RoleUser;
  password?: string;
}
