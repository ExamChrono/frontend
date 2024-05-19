import {Component, OnInit} from '@angular/core';
import {RoleUser} from "../../Models/Enum/role-user";
import {FormControl, FormGroup} from "@angular/forms";
import {Enseignant} from "../../Models/Entity/Enseignant/enseignant";
import {EnseignantService} from "../../Services/Enseignant/enseignant.service";

@Component({
  selector: 'app-table-enseignant',
  templateUrl: './table-enseignant.component.html',
  styleUrls: ['./table-enseignant.component.css']
})
export class TableEnseignantComponent implements OnInit {
  constructor(private enseignantService:EnseignantService) { }
  ngOnInit() {
    this.getAllEnseignants();
  }

  formEditEnseignant: FormGroup = new FormGroup({
    id: new FormControl(0),
    email: new FormControl(''),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    distance: new FormControl(''),
    age: new FormControl(0),
    ancien: new FormControl(false),
    maladie: new FormControl(false),
    chargeCours: new FormControl(false),
    priorite: new FormControl(false),
    validation: new FormControl(true),
    roleUser: new FormControl(RoleUser.Enseignant),
    password: new FormControl('')
  });

  formAddEnseignant: FormGroup = new FormGroup({
    email: new FormControl(''),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    distance: new FormControl(''),
    age: new FormControl(0),
    ancien: new FormControl(false),
    maladie: new FormControl(false),
    chargeCours: new FormControl(false),
    priorite: new FormControl(false),
    validation: new FormControl(true),
    roleUser: new FormControl(RoleUser.Enseignant),
    password: new FormControl('')
  });

  enseignants:Array<Enseignant> = []
  //@ts-ignore
  enseignant: Enseignant = {};
  getAllEnseignants(){
    this.enseignantService.getAllEnseignant().subscribe((data:any)=>{
      this.enseignants = data;
      console.log(data)
    })
  }

  editEnseignant(enseignant: Enseignant) {
    const editeEnseignant = document.getElementById('editeEnseignant');
    this.formEditEnseignant = new FormGroup({
      id: new FormControl(enseignant.id),
      email: new FormControl(enseignant.email),
      nom: new FormControl(enseignant.nom),
      prenom: new FormControl(enseignant.prenom),
      distance: new FormControl(enseignant.distance),
      age: new FormControl(enseignant.age),
      ancien: new FormControl(enseignant.ancien),
      maladie: new FormControl(enseignant.maladie),
      chargeCours: new FormControl(enseignant.chargeCours),
      priorite: new FormControl(enseignant.priorite),
      validation: new FormControl(true),
      roleUser: new FormControl(RoleUser.Enseignant),
      password: new FormControl(enseignant.password)
    });
    //@ts-ignore
    editeEnseignant.setAttribute('style', 'display: block !important');
  }
  updateEnseignant() {
    this.hideForm();
    this.enseignantService.updateEnseignant(this.formEditEnseignant.value).subscribe((data:any)=>{
      this.getAllEnseignants();
    })
  }

  hideForm() {
    this.formAddEnseignant = new FormGroup({
      email: new FormControl(''),
      nom: new FormControl(''),
      prenom: new FormControl(''),
      distance: new FormControl(''),
      age: new FormControl(0),
      ancien: new FormControl(false),
      maladie: new FormControl(false),
      chargeCours: new FormControl(false),
      priorite: new FormControl(false),
      validation: new FormControl(true),
      roleUser: new FormControl(RoleUser.Enseignant),
      password: new FormControl('')
    });
    const editeEnseignant = document.getElementById('editeEnseignant');
    //@ts-ignore
    editeEnseignant.setAttribute('style', 'display: none !important');
    const addEnseignant = document.getElementById('addEnseignant');
    //@ts-ignore
    addEnseignant.setAttribute('style', 'display: none !important');
  }

  deleteEnseignant(enseignant: Enseignant) {
    enseignant = {
      id: enseignant.id
    }
    this.enseignantService.deleteEnseignant(enseignant).subscribe((data:any)=>{
      this.getAllEnseignants();
    })
  }

  addEnseignant() {
    const addEnseignant = document.getElementById('addEnseignant');
    //@ts-ignore
    addEnseignant.setAttribute('style', 'display: block !important');
  }

  AddSaveEnseignant() {
    this.hideForm();
    this.enseignantService.createEnseignant(this.formAddEnseignant.value,this.formAddEnseignant.get("validation")?.value).subscribe((data:any)=>{
      this.getAllEnseignants();
    })
  }
}
