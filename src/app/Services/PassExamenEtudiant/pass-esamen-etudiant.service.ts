import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APPService} from "../APP/app.service";
import {PassExamenEtudiant} from "../../Models/Entity/PassExamenEtudiant/pass-examen-etudiant";
import {PassExamen} from "../../Models/Entity/PassExamen/pass-examen";

@Injectable({
  providedIn: 'root'
})
export class PassExamenEtudiantService {

  constructor(private http:HttpClient, private appService:APPService) { }

  private apiUrl = this.appService.getApiUrl()+"PassExamenEtudiant/";

  getAllPassExamenEtudiant(){
    return this.http.get(this.apiUrl+"all");
  }

  addPassExamenEtudiant(passExamenEtudiant:any){
    return this.http.post(this.apiUrl+"add",passExamenEtudiant);
  }

  deletePassExamenEtudiant(passExamen:PassExamen){
    return this.http.delete(this.apiUrl+"delete/"+passExamen.id);
  }
  getEtudiantToPassExamen(passExamen:PassExamen){
    return this.http.post(this.apiUrl+"getEtudiantToPassExamen",passExamen);
  }
}
