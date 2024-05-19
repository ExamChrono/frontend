import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APPService} from "../APP/app.service";
import {Salle} from "../../Models/Entity/Salle/salle";

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  constructor(private http:HttpClient, private appService:APPService) { }

  private apiUrl = this.appService.getApiUrl()+"Salle/";

  getAllSalles(){
    return this.http.get(this.apiUrl+"all");
  }

  addSalle(salle:Salle){
    return this.http.post(this.apiUrl+"add",salle);
  }

  updateSalle(salle:Salle){
    return this.http.put(this.apiUrl+"update",salle);
  }

  deleteSalle(salle:Salle){
    return this.http.delete(this.apiUrl+"delete/"+salle.id);
  }
}
