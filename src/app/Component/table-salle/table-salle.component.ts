import {Component, OnInit} from '@angular/core';
import {Salle} from "../../Models/Entity/Salle/salle";
import {FormControl, FormGroup} from "@angular/forms";
import {Surveille} from "../../Models/Entity/Surveille/surveille";
import {PassExamen} from "../../Models/Entity/PassExamen/pass-examen";
import {SalleService} from "../../Services/Salle/salle.service";
import {PassExamenService} from "../../Services/PassExamen/pass-examen.service";
import {SurveilleService} from "../../Services/Surveille/surveille.service";
import {TypeSalle} from "../../Models/Enum/type-salle";

@Component({
  selector: 'app-table-salle',
  templateUrl: './table-salle.component.html',
  styleUrls: ['./table-salle.component.css']
})
export class TableSalleComponent implements OnInit{
  constructor(private surveilleService: SurveilleService,  private passExamenService: PassExamenService, private salleService: SalleService) {
  }
  ngOnInit(): void {
    this.getAll()
  }

  salles: Array<Salle> = []
  formAddSalle: FormGroup = new FormGroup({
    numero_salle: new FormControl(''),
    type_salle: new FormControl(''),
    capacite: new FormControl(''),
    passExamenId: new FormControl(''),
    surveilleId: new FormControl(''),
  });
  surveilles: Array<Surveille> = [];
  passExamens: Array<PassExamen> = []

  addSalle() {
    this.formAddSalle = new FormGroup({
      numero_salle: new FormControl(''),
      type_salle: new FormControl(''),
      capacite: new FormControl(''),
      passExamenId: new FormControl(''),
      surveilleId: new FormControl(''),
    });
    const addSalle = document.getElementById('addSalle');
    // @ts-ignore
    addSalle.style.display = 'block';
  }

  hideForm() {
    const addSalle = document.getElementById('addSalle');
    // @ts-ignore
    addSalle.style.display = 'none';
    this.getAll()
  }

  AddSaveSalle() {
    const salle = {
      numero_salle: this.formAddSalle.value.numero_salle,
      type_salle: this.formAddSalle.value.type_salle,
      capacite: this.formAddSalle.value.capacite,
      passExamenId: this.formAddSalle.value.passExamenId,
      surveilleId: this.formAddSalle.value.surveilleId
    }
    this.salleService.addSalle(salle).subscribe((data: any) => {
      this.hideForm()
    })
  }

  deleteSalle(salle: Salle) {
    this.salleService.deleteSalle(salle).subscribe((data: any) => {
      this.getAll()
    })
  }

  getAll() {
    this.getSurveille()
    this.getPassExamen()
    this.getSalle()
  }

  getSurveille() {
    this.surveilleService.getAllSurveille().subscribe((data: any) => {
      this.surveilles = data
    })
  }

  getPassExamen() {
    this.passExamenService.getAllPass().subscribe((data: any) => {
      this.passExamens = data
    })
  }

  getSalle() {
    this.salleService.getAllSalles().subscribe((data: any) => {
      this.salles = data
    })
  }

  protected readonly TypeSalle = TypeSalle;
}
