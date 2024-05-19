import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RoleUser} from "../../Models/Enum/role-user";
import {EtudiantService} from "../../Services/Etudiant/etudiant.service";
import {Etudiant} from "../../Models/Entity/Etudiant/etudiant";

@Component({
  selector: 'app-table-etudiant',
  templateUrl: './table-etudiant.component.html',
  styleUrls: ['./table-etudiant.component.css']
})
export class TableEtudiantComponent implements OnInit {
  constructor(private etudiantService:EtudiantService) { }
  ngOnInit() {
    this.getAllEtudiants();
  }

  formEditEtudiant: FormGroup = new FormGroup({
    idEtudiant: new FormControl(0),
    email: new FormControl(''),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    matricule: new FormControl(''),
    validation: new FormControl(true),
    roleUser: new FormControl(RoleUser.Etudiant),
    password: new FormControl('')
  });

  formAddEtudiant: FormGroup = new FormGroup({
    email: new FormControl(''),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    matricule: new FormControl(''),
    validation: new FormControl(true),
    roleUser: new FormControl(RoleUser.Etudiant),
    password: new FormControl('')
  });

  etudiants:Array<Etudiant> = []
  //@ts-ignore
  etudiant: Etudiants = {};
  getAllEtudiants(){
    this.etudiantService.getAllEtudiant().subscribe((data:any)=>{
      this.etudiants = data;
      console.log(data)
    })
  }

  editEtudiant(etudiant: Etudiant) {
    const editeEtudiant = document.getElementById('editeEtudiant');
    this.formEditEtudiant = new FormGroup({
      idEtudiant: new FormControl(etudiant.id),
      email: new FormControl(etudiant.email),
      nom: new FormControl(etudiant.nom),
      prenom: new FormControl(etudiant.prenom),
      matricule: new FormControl(etudiant.matricule),
      validation: new FormControl(true),
      roleUser: new FormControl(RoleUser.Etudiant),
      password: new FormControl(etudiant.password)
    });
    //@ts-ignore
    editeEtudiant.setAttribute('style', 'display: block !important');
  }
  updateEtudiant() {
    console.log(this.formEditEtudiant.value)
    this.hideForm();
    this.etudiantService.updateEtudiant(this.formEditEtudiant.value).subscribe((data:any)=>{
      this.getAllEtudiants();
    })
  }

  hideForm() {
    const editeEtudiant = document.getElementById('editeEtudiant');
    //@ts-ignore
    editeEtudiant.setAttribute('style', 'display: none !important');
    const addEtudiant = document.getElementById('addEtudiant');
    //@ts-ignore
    addEtudiant.setAttribute('style', 'display: none !important');
  }

  deleteEtudiant(etudiant: Etudiant) {
    etudiant = {
      id: etudiant.id
    }
    this.etudiantService.deleteEtudiant(etudiant).subscribe((data:any)=>{
      this.getAllEtudiants();
    })
  }

  addEtudiant() {
    this.formAddEtudiant = new FormGroup({
      email: new FormControl(''),
      nom: new FormControl(''),
      prenom: new FormControl(''),
      matricule: new FormControl(''),
      validation: new FormControl(true),
      roleUser: new FormControl(RoleUser.Etudiant),
      password: new FormControl('')
    });
    const addEtudiant = document.getElementById('addEtudiant');
    //@ts-ignore
    addEtudiant.setAttribute('style', 'display: block !important');
  }

  AddSaveEtudiant() {
    this.hideForm();
    this.etudiantService.createEtudiant(this.formAddEtudiant.value,this.formAddEtudiant.get("validation")?.value).subscribe((data:any)=>{
      this.getAllEtudiants();
    })
  }

    protected readonly RoleUser = RoleUser;
}
