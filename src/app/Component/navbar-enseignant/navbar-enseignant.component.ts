import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {RoleUser} from "../../Models/Enum/role-user";

@Component({
  selector: 'app-navbar-enseignant',
  templateUrl: './navbar-enseignant.component.html',
  styleUrls: ['./navbar-enseignant.component.css']
})
export class NavbarEnseignantComponent implements OnInit{
  constructor(private appComponent: AppComponent) {
  }

  ngOnInit() {
    this.appComponent.redirect(RoleUser.Enseignant)
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
