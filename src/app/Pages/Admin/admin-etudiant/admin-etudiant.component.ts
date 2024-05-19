import {Component, OnInit} from '@angular/core';
import {RoleUser} from "../../../Models/Enum/role-user";
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-admin-etudiant',
  templateUrl: './admin-etudiant.component.html',
  styleUrls: ['./admin-etudiant.component.css']
})
export class AdminEtudiantComponent implements OnInit {

  constructor(private appCompoent:AppComponent) {
    this.appCompoent.redirect(RoleUser.Admin)
  }

  ngOnInit(): void {
    this.appCompoent.changeLiActive("Etudiant")
  }
}
