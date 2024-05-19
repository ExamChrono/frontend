import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";
import {RoleUser} from "../../../Models/Enum/role-user";

@Component({
  selector: 'app-etudiant-home',
  templateUrl: './etudiant-e-t.component.html',
  styleUrls: ['./etudiant-e-t.component.css']
})
export class EtudiantETComponent implements OnInit {

  constructor(private appCompoent:AppComponent) {
    this.appCompoent.redirect(RoleUser.Etudiant)
  }

  ngOnInit(): void {
    this.appCompoent.changeLiActive("ET")
  }
}
