import {Component, OnInit} from '@angular/core';
import {SurveilleService} from "../../Services/Surveille/surveille.service";
import {GroupeService} from "../../Services/Groupe/groupe.service";
import {EnseignantService} from "../../Services/Enseignant/enseignant.service";
import {Surveille} from "../../Models/Entity/Surveille/surveille";

@Component({
  selector: 'app-validation-surveille',
  templateUrl: './validation-surveille.component.html',
  styleUrls: ['./validation-surveille.component.css']
})
export class ValidationSurveilleComponent implements OnInit{
  constructor(private surveilleService: SurveilleService,  private groupeService: GroupeService, private enseignantService: EnseignantService) {
  }
  ngOnInit(): void {
    this.getAllSurveille()
  }
  surveilles: Array<Surveille> = []

  deleteSurveille(surveille: Surveille) {
    this.surveilleService.deleteSurveille(surveille).subscribe((data:any) => {
      this.getAllSurveille()
    })
  }
  getAllSurveille() {
    this.surveilleService.getAllSurveilleByIdEnseignant(localStorage.getItem("Id")).subscribe((data:any) => {
      this.surveilles = data
    })
  }
}
