import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APPService} from "../APP/app.service";
import {PassExamen} from "../../Models/Entity/PassExamen/pass-examen";

@Injectable({
  providedIn: 'root'
})
export class PassExamenService {

  constructor(private http:HttpClient, private appService:APPService) { }

  private apiUrl = this.appService.getApiUrl()+"PassExamen/";

  getAllPass(){
    return this.http.get(this.apiUrl+"all");
  }

  addPass(passExamen:PassExamen){
    return this.http.post(this.apiUrl+"add",passExamen);
  }

  updatePass(passExamen:PassExamen){
    return this.http.put(this.apiUrl+"update",passExamen);
  }

  deletePass(passExamen:PassExamen){
    return this.http.delete(this.apiUrl+"delete/"+passExamen.id);
  }
}
