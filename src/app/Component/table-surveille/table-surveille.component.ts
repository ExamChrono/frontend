import {Component, OnInit} from '@angular/core';
import {Surveille} from "../../Models/Entity/Surveille/surveille";
import {FormControl, FormGroup} from "@angular/forms";
import {Groupe} from "../../Models/Entity/Groupe/groupe";
import {Enseignant} from "../../Models/Entity/Enseignant/enseignant";
import {EnseignantService} from "../../Services/Enseignant/enseignant.service";
import {GroupeService} from "../../Services/Groupe/groupe.service";
import {SurveilleService} from "../../Services/Surveille/surveille.service";

@Component({
  selector: 'app-table-surveille',
  templateUrl: './table-surveille.component.html',
  styleUrls: ['./table-surveille.component.css']
})
export class TableSurveilleComponent implements OnInit{
  constructor(private surveilleService: SurveilleService,  private groupeService: GroupeService, private enseignantService: EnseignantService) {
  }
  ngOnInit(): void {
    this.getAll()
  }
  surveilles: Array<Surveille> = []
  groupes: Array<Groupe> = []
  enseignants: Array<Enseignant> = []
  formAddSurveille: FormGroup = new FormGroup({
    groupeId: new FormControl(''),
    enseignantId: new FormControl(''),
    nom: new FormControl(''),
    code: new FormControl('')
  });

  addSurveille() {
    this.formAddSurveille = new FormGroup({
      groupeId: new FormControl(''),
      enseignantId: new FormControl(''),
      nom: new FormControl(''),
      code: new FormControl('')
    });
    const addSurveille = document.getElementById('addSurveille');
    // @ts-ignore
    addSurveille.style.display = 'block';
  }

  deleteSurveille(surveille: Surveille) {
    this.surveilleService.deleteSurveille(surveille).subscribe((data:any) => {
      this.getAll()
    })
  }

  hideForm() {
    const addSurveille = document.getElementById('addSurveille');
    // @ts-ignore
    addSurveille.style.display = 'none';
    this.getAll()
  }

  AddSaveSurveille() {
    const surveille = {
      code: this.formAddSurveille.value.code,
      nom: this.formAddSurveille.value.nom,
      groupeId: this.formAddSurveille.value.groupeId,
      enseignantId: this.formAddSurveille.value.enseignantId
    }
    this.surveilleService.addSurveille(surveille).subscribe((data:any) => {
      this.hideForm()
    })
  }
  getAll(){
    this.getAllGroupes()
    this.getAllEnseignants()
    this.getAllSurveille()
  }

  getAllGroupes() {
    this.groupeService.getAllGroupe().subscribe((data:any) => {
      for (let filiere of data){
        for (let groupe of filiere.groupes){
          this.groupes.push(groupe)
        }
      }
    })
  }
  getAllEnseignants() {
    this.enseignantService.getAllEnseignant().subscribe((data:any) => {
      this.enseignants = data
    })
  }
  getAllSurveille() {
    this.surveilleService.getAllSurveille().subscribe((data:any) => {
      this.surveilles = data
    })
  }
}
