import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";
import {RoleUser} from "../../../Models/Enum/role-user";

@Component({
  selector: 'app-delegue-et',
  templateUrl: './delegue-et.component.html',
  styleUrls: ['./delegue-et.component.css']
})
export class DelegueETComponent implements OnInit {

  constructor(private appCompoent:AppComponent) {
    this.appCompoent.redirect(RoleUser.Delegue)
  }

  ngOnInit(): void {
    this.appCompoent.changeLiActive("ET")
  }
}
