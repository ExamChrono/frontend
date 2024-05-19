import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";
import {RoleUser} from "../../../Models/Enum/role-user";

@Component({
  selector: 'app-enseignant-validation-surveille',
  templateUrl: './enseignant-validation-surveille.component.html',
  styleUrls: ['./enseignant-validation-surveille.component.css']
})
export class EnseignantValidationSurveilleComponent implements OnInit {

  constructor(private appCompoent:AppComponent) {
    this.appCompoent.redirect(RoleUser.Enseignant)
  }

  ngOnInit(): void {
    this.appCompoent.changeLiActive("Validation")
  }
}
