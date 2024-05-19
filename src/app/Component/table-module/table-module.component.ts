import {Component, OnInit} from '@angular/core';
import {FiliereModule} from "../../Models/Entity/FiliereModule/filiere-module";
import {Module} from "../../Models/Entity/Module/module";
import {FormControl, FormGroup} from "@angular/forms";
import {ModulesService} from "../../Services/Modules/modules.service";
import {FiliereModule2} from "../../Models/Entity/FiliereModule2/filiere-module2";
import {PassExamenService} from "../../Services/PassExamen/pass-examen.service";
import {PassExamen} from "../../Models/Entity/PassExamen/pass-examen";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-table-module',
  templateUrl: './table-module.component.html',
  styleUrls: ['./table-module.component.css']
})
export class TableModuleComponent implements OnInit {
  ngOnInit(): void {
      this.getAllFiliereModules();
  }
  filiereModules:Array<FiliereModule> = []

  addModule(filiere: FiliereModule) {
    this.formAddModule = new FormGroup({
      nom: new FormControl(''),
      semester: new FormControl(''),
      order: new FormControl(''),
      filiereId: new FormControl(filiere.id),
    });
    const addModule = document.getElementById('addModule');
    //@ts-ignore
    addModule.setAttribute("style",'display: block');
  }
  formAddModule: FormGroup = new FormGroup({
    nom: new FormControl(''),
    semester: new FormControl(''),
    order: new FormControl(''),
    filiereId: new FormControl(''),
  });
  formEditModule: FormGroup = new FormGroup({
    id: new FormControl(''),
    nom: new FormControl(''),
    semester: new FormControl(''),
    order: new FormControl(''),
  });
  formPassExamenInModule: FormGroup = new FormGroup({
    moduleId: new FormControl(''),
    date: new FormControl('')
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

  deleteModule(module: Module, filiere: FiliereModule) {
    let filiereModule2: FiliereModule2 = new FiliereModule2();
    filiereModule2.filiereId = filiere.id;
    filiereModule2.moduleId = module.id;

    this.modulesService.deleteModule(filiereModule2).subscribe((data: any) => {
      this.getAllFiliereModules();
    });
  }

  hideForm() {
    const editeModule = document.getElementById('editeModule');
    //@ts-ignore
    editeModule.setAttribute("style",'display: none');
    const addModule = document.getElementById('addModule');
    //@ts-ignore
    addModule.setAttribute("style",'display: none');
    const passExamenInModule = document.getElementById('passExamenInModule')
    //@ts-ignore
    passExamenInModule.setAttribute("style",'display: none');
  }

  AddSaveModule() {
    this.modulesService.createModule(this.formAddModule.value).subscribe((data: any) => {
      this.getAllFiliereModules();
    });
  }

  updateModule() {
    this.hideForm();
    this.modulesService.updateModule(this.formEditModule.value).subscribe((data: any) => {
      this.getAllFiliereModules();
    });
  }

  private getAllFiliereModules() {
    this.hideForm();
    this.modulesService.getAllModules().subscribe((data: any) => {
      this.filiereModules = data;
    });
  }

  constructor(private appComponent:AppComponent, private modulesService:ModulesService, private passExamenService:PassExamenService) {
  }

  passExamenInModule(module: Module) {
    this.formPassExamenInModule = new FormGroup({
      moduleId: new FormControl(module.id),
      date: new FormControl(''),
    })
    const passExamenInModule = document.getElementById('passExamenInModule')
    //@ts-ignore
    passExamenInModule.setAttribute("style",'display: block');
  }

  AddSavePassExamenInModule() {
   this.formPassExamenInModule.value.date = this.appComponent.getFormattedDatetime(this.formPassExamenInModule.value.date);
    let passExamen = {
      date: this.formPassExamenInModule.value.date,
      moduleId: this.formPassExamenInModule.value.moduleId
    };
    console.log(passExamen)
    this.passExamenService.addPass(passExamen).subscribe((data: any) => {
      this.getAllFiliereModules();
    });
  }
}
