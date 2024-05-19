import {Component, OnInit} from '@angular/core';
import {FiliereModule} from "../../Models/Entity/FiliereModule/filiere-module";
import {FormControl, FormGroup} from "@angular/forms";
import {Module} from "../../Models/Entity/Module/module";
import {ModulesService} from "../../Services/Modules/modules.service";

@Component({
  selector: 'app-table-delegue-modules',
  templateUrl: './table-delegue-modules.component.html',
  styleUrls: ['./table-delegue-modules.component.css']
})
export class TableDelegueModulesComponent implements OnInit {
  ngOnInit(): void {
    this.getAllFiliereModules();
  }
  filiereModules:FiliereModule = new FiliereModule()
  formEditModule: FormGroup = new FormGroup({
    id: new FormControl(''),
    nom: new FormControl(''),
    semester: new FormControl(''),
    order: new FormControl(''),
  });
  editModule(module: Module) {
    this.  formEditModule = new FormGroup({
      id: new FormControl(module.id),
      nom: new FormControl(module.nom),
      semester: new FormControl(module.semester),
      order: new FormControl(module.order),
    });
    const editeModule = document.getElementById('editeModule');
    //@ts-ignore
    editeModule.setAttribute("style",'display: block');
  }
  hideForm() {
    const editeModule = document.getElementById('editeModule');
    //@ts-ignore
    editeModule.setAttribute("style",'display: none');
  }
  updateModule() {
    this.hideForm();
    this.modulesService.updateModule(this.formEditModule.value).subscribe(() => {
      this.getAllFiliereModules();
    });
  }

  getAllFiliereModules() {
    this.hideForm();
    //@ts-ignore
    this.modulesService.getAllModulesByIdDelegue(localStorage.getItem("Id")).subscribe((data: any) => {
      this.filiereModules = data;
    });
  }

  constructor(private modulesService:ModulesService) {
  }
}
