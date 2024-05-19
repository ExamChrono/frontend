import {Component, OnInit} from '@angular/core';
import {RoleUser} from "../../../Models/Enum/role-user";
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private appCompoent:AppComponent) {
    this.appCompoent.redirect("login")
  }

}
