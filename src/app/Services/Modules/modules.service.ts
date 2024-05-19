import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APPService} from "../APP/app.service";
import {FiliereModule} from "../../Models/Entity/FiliereModule/filiere-module";
import {FiliereModule2} from "../../Models/Entity/FiliereModule2/filiere-module2";

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  constructor(private http:HttpClient, private appService:APPService) { }

  private apiUrl = this.appService.getApiUrl()+"Modules/";

  getAllModules(){
    return this.http.get(this.apiUrl+"all");
  }

  createModule(module:FiliereModule){
    return this.http.post(this.apiUrl+"add",module);
  }

  updateModule(module:FiliereModule){
    return this.http.put(this.apiUrl+"update",module);
  }

  deleteModule(module:FiliereModule2){
    return this.http.delete(this.apiUrl+"delete/"+module.filiereId+"/"+module.moduleId);
  }

  getAllModulesByIdDelegue(idDelegue: string){
    return this.http.get(this.apiUrl+"getModule/"+idDelegue);
  }
}
