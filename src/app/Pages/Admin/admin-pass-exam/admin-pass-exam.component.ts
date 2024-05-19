import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";
import {RoleUser} from "../../../Models/Enum/role-user";

@Component({
  selector: 'app-admin-pass-exam',
  templateUrl: './admin-pass-exam.component.html',
  styleUrls: ['./admin-pass-exam.component.css']
})
export class AdminPassExamComponent implements OnInit {

  constructor(private appCompoent:AppComponent) {
    this.appCompoent.redirect(RoleUser.Admin)
  }

  ngOnInit(): void {
    this.appCompoent.changeLiActive("PassExam")
  }
}
