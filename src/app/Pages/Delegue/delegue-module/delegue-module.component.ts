import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";
import {RoleUser} from "../../../Models/Enum/role-user";

@Component({
  selector: 'app-delegue-home',
  templateUrl: './delegue-module.component.html',
  styleUrls: ['./delegue-module.component.css']
})
export class DelegueModuleComponent implements OnInit {

  constructor(private appCompoent:AppComponent) {
    this.appCompoent.redirect(RoleUser.Delegue)
  }

  ngOnInit(): void {
    this.appCompoent.changeLiActive("Module")
  }
}
