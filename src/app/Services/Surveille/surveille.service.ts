import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APPService} from "../APP/app.service";
import {Surveille} from "../../Models/Entity/Surveille/surveille";

@Injectable({
  providedIn: 'root'
})
export class SurveilleService {

  constructor(private http:HttpClient, private appService:APPService) { }

  private apiUrl = this.appService.getApiUrl()+"Surveille/";

  getAllSurveille(){
    return this.http.get(this.apiUrl+"all");
  }

  addSurveille(surveille:Surveille){
    return this.http.post(this.apiUrl+"add",surveille);
  }

  deleteSurveille(surveille:Surveille){
    return this.http.delete(this.apiUrl+"delete/"+surveille.id);
  }

  updateSurveille(surveille:Surveille){
    return this.http.put(this.apiUrl+"update",surveille);
  }

  getAllSurveilleByIdEnseignant(IdEnseignant: string | null) {
    return this.http.get(this.apiUrl+"getAllSurveilleByIdEnseignant/"+IdEnseignant);
  }
}
