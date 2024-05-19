import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APPService} from "../APP/app.service";
import {FiliereEtudiant} from "../../Models/Entity/FiliereEtudiant/filiere-etudiant";
import {FiliereEtudiant2} from "../../Models/Entity/FiliereEtudiant2/filiere-etudiant2";

@Injectable({
  providedIn: 'root'
})
export class FiliereEtudiantService {

  constructor(private http:HttpClient, private appService:APPService) { }

  private apiUrl = this.appService.getApiUrl()+"FiliereEtudiant/";

  getAllFiliereEtudiant(){
    return this.http.get(this.apiUrl+"all");
  }

  addEtudiantToFiliere(filiereEtudiant:FiliereEtudiant2){
    return this.http.post(this.apiUrl+"add",filiereEtudiant);
  }

  deleteEtudiantFromFiliere(filiereEtudiant:FiliereEtudiant2){
    return this.http.delete(this.apiUrl+"delete/"+filiereEtudiant.filiereId+"-"+filiereEtudiant.etudiantId);
  }
}
