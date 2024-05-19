import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {RoleUser} from "../../Models/Enum/role-user";

@Component({
  selector: 'app-navbar-etudiant',
  templateUrl: './navbar-etudiant.component.html',
  styleUrls: ['./navbar-etudiant.component.css']
})
export class NavbarEtudiantComponent implements OnInit{
  constructor(private appComponent: AppComponent) {
  }

  ngOnInit() {
    this.appComponent.redirect(RoleUser.Etudiant)
  }
  showNav() {
    const navbarDefault = document.getElementById('navbar-default');
    //@ts-ignore
    const className = navbarDefault.getAttribute('class');
    if (className == 'hidden w-full md:block md:w-auto'){
      //@ts-ignore
      navbarDefault.setAttribute('class', 'w-full md:block md:w-auto')
    } else  {
      //@ts-ignore
      navbarDefault.setAttribute('class', 'hidden w-full md:block md:w-auto')
    }
  }
}
