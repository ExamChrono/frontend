import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";
import {RoleUser} from "../../../Models/Enum/role-user";

@Component({
  selector: 'app-admin-modules',
  templateUrl: './admin-modules.component.html',
  styleUrls: ['./admin-modules.component.css']
})
export class AdminModulesComponent implements OnInit {

  constructor(private appCompoent:AppComponent) {
    this.appCompoent.redirect(RoleUser.Admin)
  }

  ngOnInit(): void {
    this.appCompoent.changeLiActive("Modules")
  }
}
