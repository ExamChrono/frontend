import {RoleUser} from "../../Enum/role-user";

export class Enseignant {
  id?: number;
  email?: string;
  nom?: string;
  prenom?: string;
  distance?: string;
  age?: number;
  ancien?: boolean;
  maladie?: boolean;
  chargeCours?: boolean;
  priorite?: boolean;
  validation?: boolean;
  roleUser?: RoleUser;
  password?: string;
}
