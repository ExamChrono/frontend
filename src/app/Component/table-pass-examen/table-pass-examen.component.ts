import {Component, OnInit} from '@angular/core';
import {Etudiant} from "../../Models/Entity/Etudiant/etudiant";
import {PassExamen} from "../../Models/Entity/PassExamen/pass-examen";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {AppComponent} from "../../app.component";
import {PassExamenEtudiantService} from "../../Services/PassExamenEtudiant/pass-esamen-etudiant.service";
import {PassExamenService} from "../../Services/PassExamen/pass-examen.service";

@Component({
  selector: 'app-table-pass-examen',
  templateUrl: './table-pass-examen.component.html',
  styleUrls: ['./table-pass-examen.component.css']
})
export class TablePassExamenComponent implements OnInit{
  constructor(private appComponent: AppComponent,private passExamenService: PassExamenService, private passExamenEtudiantService: PassExamenEtudiantService) {
  }

  ngOnInit(): void {
      this.getAll();
  }
  passExamens: Array<PassExamen> = [];
  formEditPassExamen: FormGroup = new FormGroup({
    id: new FormControl(''),
    date: new FormControl(''),
    moduleId: new FormControl('')
  })
  passExamen: PassExamen = new PassExamen();
  etudiants: Array<Etudiant>=[];
  formAddEtudiantsToPassExamen = new FormGroup({
    passExamenId: new FormControl(),
    etudiants: new FormArray([])
  })
  etudiantsNotInPassExamen: Array<Etudiant> = [];


  EditPassExamen(passExamen: PassExamen | any) {
    this.formEditPassExamen.setValue({
      id: passExamen.id,
      date: passExamen.date,
      moduleId: passExamen.modules.id
    })
    const editPassExamen = document.getElementById('editePassExamen');
    //@ts-ignore
    editPassExamen.setAttribute('style', 'display: block !important');
  }

  deletePassExamen(passExamen: any) {
    this.passExamenService.deletePass(passExamen).subscribe((data: any) => {
      console.log(data)
    })
    this.getAll()
  }

  seeEtudiantsInPassExamen(passExamen:PassExamen) {
    this.passExamenEtudiantService.getAllPassExamenEtudiant().subscribe((data: any) => {
      this.passExamen = passExamen;
      for (let passExamenEtudiant of data) {
        if (passExamenEtudiant.passEsamen.id == passExamen.id) {
          this.etudiants = passExamenEtudiant.etudiants;
        }
      }
      const seeEtudiantsInPassExamen = document.getElementById('seeEtudiantsInPassExamen');
      //@ts-ignore
      seeEtudiantsInPassExamen.setAttribute('style', 'display: block !important');
    })
  }

  hideForm() {
    const editPassExamen = document.getElementById('editePassExamen');
    //@ts-ignore
    editPassExamen.setAttribute('style', 'display: none !important');
    const seeEtudiantsInPassExamen = document.getElementById('seeEtudiantsInPassExamen');
    //@ts-ignore
    seeEtudiantsInPassExamen.setAttribute('style', 'display: none !important');
    this.getAll()
  }

  updatePassExamen() {
    this.formEditPassExamen.value.date = this.appComponent.getFormattedDatetime(this.formEditPassExamen.value.date)
    console.log(this.formEditPassExamen.value)
    this.passExamenService.updatePass(this.formEditPassExamen.value).subscribe((data: any) => {
      console.log(data)
    })
    this.hideForm()
  }

  addEtudiantToPassExamen(passExamen: PassExamen) {
    this.passExamenEtudiantService.getEtudiantToPassExamen(passExamen)
      .subscribe((etudiantsNotInPassExamen:any) => {
        if (etudiantsNotInPassExamen.length !== 0) {

          const etudiantArray: Etudiant[] = etudiantsNotInPassExamen.map((item: any) => {
            // Type assertion: Assert that 'item' is an object with the expected properties
            const etudiant: Etudiant = {
              id: item.id,
              nom: item.nom,
              prenom: item.prenom,
            };
            return etudiant;
          });

          // @ts-ignore
          this.formAddEtudiantsToPassExamen.value.etudiants = etudiantArray;
          this.formAddEtudiantsToPassExamen.value.passExamenId = passExamen.id;

          console.log(this.formAddEtudiantsToPassExamen.value);
          localStorage.setItem('dataAddEtudiant', JSON.stringify(this.formAddEtudiantsToPassExamen.value));
          window.location.href = '/admin/addEtudiantToPassExamen';
        }
      });
  }


  removeAllEtudiantFromPassExamen(passExamen: PassExamen) {
    this.passExamenEtudiantService.deletePassExamenEtudiant(passExamen).subscribe(() => {
      this.getAll()
    })
  }

  AddSaveEtudiantsToPassExamen() {
    this.hideForm()
  }

  getAllPassExamen() {
    this.passExamenService.getAllPass().subscribe((data: any) => {
      this.passExamens = data;
    })
  }
  getAll(){
    this.getAllPassExamen()
  }

  getEtudiantNotInPassExamen(passExamen: PassExamen) {
    this.passExamenEtudiantService.getEtudiantToPassExamen(passExamen).subscribe((data: any) => {
      this.etudiantsNotInPassExamen = data;
    })
  }
}
