import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APPService} from "../APP/app.service";
import {Enseignant} from "../../Models/Entity/Enseignant/enseignant";

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(private http:HttpClient, private appService:APPService) { }

  private apiUrl = this.appService.getApiUrl()+"Enseignant/";

  getAllEnseignant(){
    return this.http.get(this.apiUrl+"all");
  }

  loginEnseignant(enseignant:Enseignant){
    return this.http.post(this.apiUrl+"login",enseignant);
  }

  updateEnseignant(enseignant:Enseignant){
    return this.http.put(this.apiUrl+"update",enseignant);
  }

  createEnseignant(enseignant:Enseignant,validation:boolean){
    return this.http.post(this.apiUrl+"create/"+validation,enseignant);
  }

  deleteEnseignant(enseignant:Enseignant){
    return this.http.delete(this.apiUrl+"delete/"+enseignant.id);
  }

  getEnseignantByEmail(enseignant:Enseignant){
    return this.http.post(this.apiUrl+"getByEmail",enseignant);
  }
}
