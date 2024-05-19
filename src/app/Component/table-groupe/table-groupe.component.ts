import {Component, OnInit} from '@angular/core';
import {Groupe} from "../../Models/Entity/Groupe/groupe";
import {FiliereGroupe} from "../../Models/Entity/FiliereGroupe/filiere-groupe";
import {FormControl, FormGroup} from "@angular/forms";
import {GroupeService} from "../../Services/Groupe/groupe.service";

@Component({
  selector: 'app-table-groupe',
  templateUrl: './table-groupe.component.html',
  styleUrls: ['./table-groupe.component.css']
})
export class TableGroupeComponent implements OnInit{
  constructor(private groupeService: GroupeService) {
  }
  ngOnInit(): void {
    this.getAllGroupes();
  }
  groupes: Array<FiliereGroupe> = [];
  filiere: FiliereGroupe = new FiliereGroupe();
  formAddGroupe: FormGroup = new FormGroup({
    nbrEtudiant: new FormControl(''),
    filiereId: new FormControl(''),
  })

  addGroupe(filiere: FiliereGroupe) {
    this.formAddGroupe = new FormGroup({
      nbrEtudiant: new FormControl(''),
      filiereId: new FormControl(filiere.id),
    })
    this.filiere = filiere;
    const form = document.getElementById('addGroupe');
    //@ts-ignore
    form.style.display = 'block';
  }

  hideForm() {
    const form = document.getElementById('addGroupe');
    //@ts-ignore
    form.style.display = 'none';
    this.getAllGroupes()
  }

  AddSaveGroupe() {
    let nbrEtudiantEntre = this.formAddGroupe.get('nbrEtudiant')?.value;
    let nbrEtudiant = this.filiere.nombreEtudient
    let nbrEtudiantTotalDansFiliere = 0;
    //@ts-ignore
    for (let groupeFiliere of this.filiere.groupes){
       // @ts-ignore
       nbrEtudiantTotalDansFiliere += groupeFiliere.nbrEtudiant;
    }
    if (nbrEtudiantEntre <= parseInt(<string>nbrEtudiant)-nbrEtudiantTotalDansFiliere && nbrEtudiantEntre > 0) {
      const groupe= {
        nbrEtudiant: nbrEtudiantEntre,
        filiereId: this.filiere.id
      }
      this.groupeService.createGroupe(groupe).subscribe((data: any) => {
        this.hideForm();
      })
    } else {
      alert("Le nombre d'étudiant dans le groupe dépasse le nombre d'étudiant dans la filière")
    }
  }

    getAllGroupes() {
    this.groupeService.getAllGroupe().subscribe((data: any) => {
      this.groupes = data;
    })
  }
}
