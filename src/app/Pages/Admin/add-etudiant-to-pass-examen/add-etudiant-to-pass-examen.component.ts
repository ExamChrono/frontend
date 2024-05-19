import {Component, OnInit} from '@angular/core';
import {PassExamenEtudiantService} from "../../../Services/PassExamenEtudiant/pass-esamen-etudiant.service";
import {FormControl, FormGroup} from '@angular/forms';
import {AppComponent} from "../../../app.component";
import {RoleUser} from "../../../Models/Enum/role-user";
import {PassExamenEtudiant2} from "../../../Models/Entity/PassExamenEtudiant2/pass-examen-etudiant2";

@Component({
  selector: 'app-add-etudiant-to-pass-examen',
  templateUrl: './add-etudiant-to-pass-examen.component.html',
  styleUrls: ['./add-etudiant-to-pass-examen.component.css']
})
export class AddEtudiantToPassExamenComponent implements OnInit {

  constructor(private passExamenEtudiantService: PassExamenEtudiantService, private appCompoent:AppComponent) {
    this.appCompoent.redirect(RoleUser.Admin)
  }

  etudiantsToPass: any = {}

  ngOnInit(): void {
    this.appCompoent.changeLiActive("PassExam")
    this.getEtudiant();
  }
  formAddEtudiantsToPassExamen = new FormGroup({
    passExamenId: new FormControl(this.etudiantsToPass.passExamenId),
    etudiants: new FormControl([]),
  })
  getEtudiant() {
    let fromLocalstorage = localStorage.getItem('dataAddEtudiant');
    // @ts-ignore
      this.etudiantsToPass = JSON.parse(fromLocalstorage)
    console.log(this.etudiantsToPass)
  }

  saveEtudiantToPassExamen() {
    this.passExamenEtudiantService.addPassExamenEtudiant(this.etudiantsToPass).subscribe((data: any) => {
      console.log(data)
    })
  }

  AddSaveEtudiantsToPassExamen() {
    let addToExamen: Array<PassExamenEtudiant2> = []
    this.formAddEtudiantsToPassExamen.value.passExamenId = this.etudiantsToPass.passExamenId
    let etudiantIds = this.formAddEtudiantsToPassExamen.value.etudiants
    // @ts-ignore
    for (let i = 0; i < etudiantIds.length; i++) {
      let passExamenEtudiant = new PassExamenEtudiant2()
      passExamenEtudiant.passExamenId = this.etudiantsToPass.passExamenId
      // @ts-ignore
      passExamenEtudiant.etudiantsId = etudiantIds[i]
      addToExamen.push(passExamenEtudiant)
    }
    console.log(addToExamen)
    this.passExamenEtudiantService.addPassExamenEtudiant(addToExamen).subscribe((data: any) => {
      console.log(data)
    })
  }
}
