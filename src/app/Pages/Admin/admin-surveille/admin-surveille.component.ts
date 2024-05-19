import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";
import {RoleUser} from "../../../Models/Enum/role-user";

@Component({
  selector: 'app-admin-surveille',
  templateUrl: './admin-surveille.component.html',
  styleUrls: ['./admin-surveille.component.css']
})
export class AdminSurveilleComponent implements OnInit {

  constructor(private appCompoent:AppComponent) {
    this.appCompoent.redirect(RoleUser.Admin)
  }

  ngOnInit(): void {
    this.appCompoent.changeLiActive("Surveille")
  }
}
