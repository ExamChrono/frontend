import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APPService} from "../APP/app.service";
import {Validation} from "../../Models/Entity/Validation/Validation";

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private http:HttpClient, private appService:APPService) { }

  private apiUrl = this.appService.getApiUrl()+"Validation/";

  sendCode(validation:Validation, subject:string){
    return this.http.post(this.apiUrl+"sendCode/"+subject,validation);
  }

  validateCode(validation:any){
    return this.http.post(this.apiUrl+"validateCode",validation);
  }
}
