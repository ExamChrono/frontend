import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";
import {RoleUser} from "../../../Models/Enum/role-user";

@Component({
  selector: 'app-admin-filiere',
  templateUrl: './admin-filiere.component.html',
  styleUrls: ['./admin-filiere.component.css']
})
export class AdminFiliereComponent implements OnInit {

  constructor(private appCompoent:AppComponent) {
    this.appCompoent.redirect(RoleUser.Admin)
  }

  ngOnInit(): void {
    this.appCompoent.changeLiActive("Filiere")
  }
}
