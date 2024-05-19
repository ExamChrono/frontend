import {Component, OnInit} from '@angular/core';
import {FiliereService} from "../../Services/Filiere/filiere.service";
import {Filiere} from "../../Models/Entity/Filiere/filiere";
import {FormControl, FormGroup} from "@angular/forms";
import {Delegue} from "../../Models/Entity/Delegue/delegue";
import {DelegueService} from "../../Services/Delegue/delegue.service";
import {FiliereEtudiantService} from "../../Services/FiliereEtudiant/filiere-etudiant.service";
import {Etudiant} from "../../Models/Entity/Etudiant/etudiant";
import {FiliereEtudiant2} from "../../Models/Entity/FiliereEtudiant2/filiere-etudiant2";
import {RoleUser} from "../../Models/Enum/role-user";
import {EtudiantService} from "../../Services/Etudiant/etudiant.service";

@Component({
  selector: 'app-table-filiere',
  templateUrl: './table-filiere.component.html',
  styleUrls: ['./table-filiere.component.css']
})
export class TableFiliereComponent implements OnInit{

  filieres: Array<Filiere> = []
  delegues: Array<Delegue> = []
  etudiants: Array<Etudiant> = []
  etudiantsNotInFiliere: Array<Etudiant> = []
  filiere: Filiere = new Filiere();

  protected readonly RoleUser = RoleUser;

  formAddFiliere: FormGroup = new FormGroup({
    nom: new FormControl(''),
    specialite: new FormControl(''),
    niveau: new FormControl(''),
    delegueId: new FormControl('')
  });
  formEditFiliere: FormGroup = new FormGroup({
    id: new FormControl(''),
    nom: new FormControl(''),
    specialite: new FormControl(''),
    niveau: new FormControl('')
  });
  formAddEtudiantToFiliere: FormGroup = new FormGroup({
    etudiantId: new FormControl(''),
    filiereId: new FormControl('')
  })
  constructor(private filiereService:FiliereService, private delegueService:DelegueService, private filiereEtudiantService:FiliereEtudiantService, private etudiantService:EtudiantService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.getAllFiliere();
    this.getAllDelegues();
    this.getEtudiantNotInFiliere();
  }

  hideForm() {
    const addFiliere = document.getElementById('addFiliere');
    //@ts-ignore
    addFiliere.setAttribute('style', 'display: none !important');
    const editeFiliere = document.getElementById('editeFiliere');
    //@ts-ignore
    editeFiliere.setAttribute('style', 'display: none !important');
    const seeEtudiantsInFiliere = document.getElementById('seeEtudiantsInFiliere');
    //@ts-ignore
    seeEtudiantsInFiliere.setAttribute('style', 'display: none !important');
    const addEtudiantToFiliere = document.getElementById('addEtudiantToFiliere');
    //@ts-ignore
    addEtudiantToFiliere.setAttribute('style', 'display: none !important');
  }
  getAllFiliere(){
    this.filiereService.getAllFiliere().subscribe((data: any) => {
      this.filieres = data;
    })
  }

  getAllDelegues(){
    this.delegues = [];
     this.delegueService.getAllDelegue().subscribe((delegues: any) => {
     for (let delegue of delegues) {
       this.filiereService.getFiliereByIdDelegue(delegue.id).subscribe((filiere: any) => {
          if (filiere.nom == null) {
            this.delegues.push(delegue);
          }
       })
     }
    })
  }

  EditFiliere(filiere: Filiere) {
    const editeFiliere = document.getElementById('editeFiliere');

    this.formEditFiliere = new FormGroup({
      id: new FormControl(filiere.id),
      nom: new FormControl(filiere.nom),
      specialite: new FormControl(filiere.specialite),
      niveau: new FormControl(filiere.niveau)
    });

    //@ts-ignore
    editeFiliere.setAttribute('style', 'display: block !important');
  }

  deleteFiliere(filiere: Filiere) {
    this.filiereService.deleteFiliere(filiere).subscribe((data: any) => {
      this.getAll()
    })
  }

  addEtudiantToFiliere(filiere: Filiere) {
    this.formAddEtudiantToFiliere = new FormGroup({
      etudiantId: new FormControl(''),
      filiereId: new FormControl(filiere.id)
    });
    const addEtudiantToFiliere = document.getElementById('addEtudiantToFiliere');
    //@ts-ignore
    addEtudiantToFiliere.setAttribute('style', 'display: block !important');
  }

  removeEtudiantFromFiliere(etudiantId: any, filiere: Filiere) {
    let filiereEtudiant: FiliereEtudiant2 = new FiliereEtudiant2();
    filiereEtudiant.etudiantId = etudiantId;
    filiereEtudiant.filiereId = this.filiere.id;
    this.filiereEtudiantService.deleteEtudiantFromFiliere(filiereEtudiant).subscribe((data: any) => {
      this.seeEtudiantsInFiliere(filiere);
    })
  }

  AddSaveFiliere() {
    this.hideForm();
    const filiere = {
      nom: this.formAddFiliere.value.nom,
      specialite: this.formAddFiliere.value.specialite,
      niveau: this.formAddFiliere.value.niveau,
      delegue: {
        id: parseInt(this.formAddFiliere.value.delegueId),
      },
    };
    this.filiereService.createFiliere(filiere).subscribe((data: any) => {
      this.getAll()
    })
  }

  updateFiliere() {
    this.hideForm();
    this.filiereService.updateFiliere(this.formEditFiliere.value).subscribe((data: any) => {
      this.getAll()
    })
  }

  AddFiliere() {
    this.formAddFiliere = new FormGroup({
      nom: new FormControl(''),
      specialite: new FormControl(''),
      niveau: new FormControl(''),
      delegueId: new FormControl('')
    });
    const addFiliere = document.getElementById('addFiliere');
    //@ts-ignore
    addFiliere.setAttribute('style', 'display: block !important');
  }

  seeEtudiantsInFiliere(filiere: Filiere) {
    this.filiereEtudiantService.getAllFiliereEtudiant().subscribe((data: any) => {
      for (let filiereEtudiant of data) {
        if (filiereEtudiant.nom == filiere.nom) {
          this.etudiants = filiereEtudiant.etudiants;
          this.filiere.id = filiereEtudiant.id;
          this.filiere.nom = filiereEtudiant.nom;
          this.filiere.specialite = filiereEtudiant.specialite;
          this.filiere.niveau = filiereEtudiant.niveau;
          this.filiere.nombreEtudient = filiereEtudiant.nombreEtudient;
        }
      }
      const seeEtudiantsInFiliere = document.getElementById('seeEtudiantsInFiliere');
      //@ts-ignore
      seeEtudiantsInFiliere.setAttribute('style', 'display: flex !important');
    })
  }

  getEtudiantNotInFiliere() {
    this.etudiantService.getAllEtudiant().subscribe((allEtudiants: any) => {
      this.filiereEtudiantService.getAllFiliereEtudiant().subscribe((etudiantsInFiliere: any) => {
        let etudiantsIn = [];
        for (let etudiantInFiliere of etudiantsInFiliere) {
          let etudiantIn = etudiantInFiliere.etudiants;
          for (let etudiant of etudiantIn) {
            etudiantsIn.push(etudiant);
          }
        }
        this.etudiantsNotInFiliere = this.getUniqueElements(allEtudiants, etudiantsIn);
      })
    })
  }
  getUniqueElements(array1: Etudiant[], array2: Etudiant[]): Etudiant[] {
    const filteredArray: Etudiant[] = [];

    array1.forEach((element) => {
      if (!array2.some((element2) => element2.id === element.id)) {
        filteredArray.push(element);
      }
    });

    return filteredArray;
  }

  AddSaveEtudiantToFiliere() {
    this.hideForm();
    let EtudiantToFiliere: FiliereEtudiant2 = new FiliereEtudiant2();
    EtudiantToFiliere.etudiantId = this.formAddEtudiantToFiliere.value.etudiantId;
    EtudiantToFiliere.filiereId = this.formAddEtudiantToFiliere.value.filiereId;
    this.filiereEtudiantService.addEtudiantToFiliere(EtudiantToFiliere).subscribe((data: any) => {
      this.getAll()
    })
  }
}
