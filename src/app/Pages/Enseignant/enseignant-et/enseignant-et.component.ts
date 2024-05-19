import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";
import {RoleUser} from "../../../Models/Enum/role-user";

@Component({
  selector: 'app-enseignant-et',
  templateUrl: './enseignant-et.component.html',
  styleUrls: ['./enseignant-et.component.css']
})
export class EnseignantETComponent implements OnInit {

  constructor(private appCompoent:AppComponent) {
    this.appCompoent.redirect(RoleUser.Enseignant)
  }

  ngOnInit(): void {
    this.appCompoent.changeLiActive("ET")
  }
}
