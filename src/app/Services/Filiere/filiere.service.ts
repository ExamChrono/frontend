import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APPService} from "../APP/app.service";
import {Filiere} from "../../Models/Entity/Filiere/filiere";

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  constructor(private http:HttpClient, private appService:APPService) { }

  private apiUrl = this.appService.getApiUrl()+"Filiere/";

  getAllFiliere(){
    return this.http.get(this.apiUrl+"all");
  }

  createFiliere(filiere:any){
    return this.http.post(this.apiUrl+"add",filiere);
  }

  deleteFiliere(filiere:Filiere){
    return this.http.delete(this.apiUrl+"delete/"+filiere.id);
  }

  getFiliereByIdDelegue(id:number){
    return this.http.get(this.apiUrl+"getFiliereByIdDelegue/"+id);
  }

  updateFiliere(filiere:Filiere){
    return this.http.put(this.apiUrl+"update",filiere);
  }
}
