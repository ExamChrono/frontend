import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APPService} from "../APP/app.service";
import {Admin} from "../../Models/Entity/Admin/admin";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient, private appService:APPService) { }

  private apiUrl = this.appService.getApiUrl()+"Admin/";

  getAdmin(){
    return this.http.get(this.apiUrl+"get");
  }

  loginAdmin(admin:Admin){
    return this.http.post(this.apiUrl+"login",admin);
  }

  updateAdmin(admin:Admin){
    return this.http.put(this.apiUrl+"update",admin);
  }

  getAdminByEmail(admin:Admin){
    return this.http.post(this.apiUrl+"getByEmail",admin);
  }
}
