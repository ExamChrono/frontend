import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APPService} from "../APP/app.service";
import {FiliereGroupe} from "../../Models/Entity/FiliereGroupe/filiere-groupe";
import {FiliereGroupe2} from "../../Models/Entity/FiliereGroupe2/filiere-groupe2";

@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  constructor(private http:HttpClient, private appService:APPService) { }

  private apiUrl = this.appService.getApiUrl()+"Groupe/";

  getAllGroupe(){
    return this.http.get(this.apiUrl+"all");
  }

  createGroupe(groupe:any){
    return this.http.post(this.apiUrl+"add",groupe);
  }

  updateGroupe(groupe:FiliereGroupe){
    return this.http.put(this.apiUrl+"update",groupe);
  }

  deleteGroupe(groupe:FiliereGroupe2){
    return this.http.delete(this.apiUrl+"delete/"+groupe.filiereId+"-"+groupe.groupeId);
  }
}
