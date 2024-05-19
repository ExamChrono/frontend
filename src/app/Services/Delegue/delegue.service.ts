import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APPService} from "../APP/app.service";
import {Delegue} from "../../Models/Entity/Delegue/delegue";

@Injectable({
  providedIn: 'root'
})
export class DelegueService {

  constructor(private http:HttpClient, private appService:APPService) { }

  private apiUrl = this.appService.getApiUrl()+"Delegue/";

  getAllDelegue(){
    return this.http.get(this.apiUrl+"all");
  }

  loginDelegue(delegue:Delegue){
    return this.http.post(this.apiUrl+"login",delegue);
  }

  createDelegue(delegue:any){
    return this.http.post(this.apiUrl+"create",delegue);
  }

  deleteDelegue(delegue:Delegue){
    return this.http.delete(this.apiUrl+"delete/"+delegue.id);
  }

  getDelegueByEmail(delegue:Delegue){
    return this.http.post(this.apiUrl+"getByEmail",delegue);
  }
}
