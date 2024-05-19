import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APPService} from "../APP/app.service";
import {Etudiant} from "../../Models/Entity/Etudiant/etudiant";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http:HttpClient, private appService:APPService) { }

  private apiUrl = this.appService.getApiUrl()+"Etudiant/";

  getAllEtudiant(){
    return this.http.get(this.apiUrl+"all");
  }

  loginEtudiant(etudiant:Etudiant){
    return this.http.post(this.apiUrl+"login",etudiant);
  }

  updateEtudiant(etudiant:Etudiant){
    return this.http.put(this.apiUrl+"update",etudiant);
  }

  createEtudiant(etudiant:Etudiant,validation:boolean){
    return this.http.post(this.apiUrl+"create/"+validation,etudiant);
  }

  deleteEtudiant(etudiant:Etudiant){
    return this.http.delete(this.apiUrl+"delete/"+etudiant.id);
  }

  getEtudiantByEmail(etudiant:Etudiant){
    return this.http.post(this.apiUrl+"getByEmail",etudiant);
  }
}
