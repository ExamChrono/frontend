import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Delegue} from "../../Models/Entity/Delegue/delegue";
import {DelegueService} from "../../Services/Delegue/delegue.service";
import {EtudiantService} from "../../Services/Etudiant/etudiant.service";
import {Etudiant} from "../../Models/Entity/Etudiant/etudiant";
import {RoleUser} from "../../Models/Enum/role-user";
import {FiliereService} from "../../Services/Filiere/filiere.service";

@Component({
  selector: 'app-table-delegue',
  templateUrl: './table-delegue.component.html',
  styleUrls: ['./table-delegue.component.css']
})
export class TableDelegueComponent implements OnInit {
  constructor(private delegueService:DelegueService, private etudiantService:EtudiantService, private filiereService:FiliereService) { }
  ngOnInit() {
    this.getAllDelegues();
    this.getAllEtudiants();
  }

  formAddDelegue: FormGroup = new FormGroup({
    idEtudiant: new FormControl('')
  });

  delegues:Array<Delegue> = []
  etudiants:Array<Etudiant> = []
  //@ts-ignore
  delegue: Delegues = {};
  getAllDelegues(){
    this.delegues = [];
    this.delegueService.getAllDelegue().subscribe((delegues:any)=>{
      for (let i = 0; i < delegues.length; i++) {
        this.filiereService.getFiliereByIdDelegue(delegues[i].id).subscribe((data:any)=>{
          if (!data.nom){
            delegues[i].etudiant.validation = false;
          } else{
            delegues[i].etudiant.validation = true;
            delegues[i].filiere = data.nom;
          }
        })
        this.delegues.push(delegues[i]);
      }
    })
  }

  getAllEtudiants(){
    this.etudiantService.getAllEtudiant().subscribe((data:any)=>{
      this.etudiants = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].roleUser == RoleUser.Etudiant)
          this.etudiants.push(data[i]);
      }
    })
  }

  hideForm() {
    const addDelegue = document.getElementById('addDelegue');
    //@ts-ignore
    addDelegue.setAttribute('style', 'display: none !important');
  }

  deleteDelegue(delegue: Delegue) {
    delegue = {
      id: delegue.id
    }
    this.delegueService.deleteDelegue(delegue).subscribe((data:any)=>{
      this.getAllDelegues();
      this.getAllEtudiants();
    })
  }

  addDelegue() {
    this.formAddDelegue = new FormGroup({
      idEtudiant: new FormControl('')
    });
    const addDelegue = document.getElementById('addDelegue');
    //@ts-ignore
    addDelegue.setAttribute('style', 'display: block !important');
  }

  AddSaveDelegue() {
    this.hideForm();
    let delegue = {
      etudiant: {
        idEtudiant: this.formAddDelegue.get("idEtudiant")?.value
      }
    }
    this.delegueService.createDelegue(delegue).subscribe((data:any)=>{
      this.getAllDelegues();
      this.getAllEtudiants();
    })
  }
}
