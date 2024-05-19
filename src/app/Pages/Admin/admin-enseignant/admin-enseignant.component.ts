import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";
import {RoleUser} from "../../../Models/Enum/role-user";

@Component({
  selector: 'app-admin-enseignant',
  templateUrl: './admin-enseignant.component.html',
  styleUrls: ['./admin-enseignant.component.css']
})
export class AdminEnseignantComponent implements OnInit {

  constructor(private appCompoent:AppComponent) {
    this.appCompoent.redirect(RoleUser.Admin)
  }

  ngOnInit(): void {
    this.appCompoent.changeLiActive("Enseignant")
  }
}
