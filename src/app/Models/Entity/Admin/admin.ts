import {RoleUser} from "../../Enum/role-user";

export class Admin {
  id?: number;
  email?: string;
  nom?: string;
  prenom?: string;
  roleUser?: RoleUser;
  password?: string;
}
