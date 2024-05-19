import { Component } from '@angular/core';
import {RoleUser} from "./Models/Enum/role-user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamChrono';
  changeLiActive(li:string){
    const allLi = document.querySelectorAll("li a")
    const liActive = document.getElementById(li);
    for (let i = 0; i < allLi.length; i++) {
      allLi[i].setAttribute('class', 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent')
    }
    liActive?.setAttribute('class','block py-2 px-3 text-white bg-green-600 rounded md:bg-transparent md:text-green-600 md:p-0 dark:text-white md:dark:text-green-500')
  }
  redirect(noRedirect:string){
    let roleUser = localStorage.getItem("RoleUser")
    if (roleUser == RoleUser.Admin && noRedirect != roleUser) {
      window.location.href = "/admin"
    } else if (roleUser == RoleUser.Delegue && noRedirect != roleUser) {
      window.location.href = "/delegue"
    } else if (roleUser == RoleUser.Enseignant && noRedirect != roleUser) {
      window.location.href = "/enseignant"
    } else if (roleUser == RoleUser.Etudiant && noRedirect != roleUser) {
      window.location.href = "/etudiant"
    } else if (roleUser == null && noRedirect != "login") {
      window.location.href = "/"
    }
  }
  redierctTo(path:string){
    window.location.href = path
  }

  localSetDataUser(data:any,type:RoleUser){
    localStorage.setItem("Id", String(data?.id))
    localStorage.setItem("Email", <string>data.email)
    localStorage.setItem("Nom", <string>data?.nom)
    localStorage.setItem("Prenom", <string>data?.prenom)
    localStorage.setItem("RoleUser", <string>data?.roleUser)
    if (type == RoleUser.Enseignant) {
        localStorage.setItem("Distance", <string>data?.distance)
        localStorage.setItem("Age", String(data?.age))
        localStorage.setItem("Ancien", String(data?.ancien))
        localStorage.setItem("Maladie", String(data?.maladie))
        localStorage.setItem("ChargeCours", String(data?.chargeCours))
        localStorage.setItem("Priorite", String(data?.priorite))
        localStorage.setItem("Validation", String(data?.validation))
    } else if (type == RoleUser.Etudiant) {
        localStorage.setItem("Matricule", <string>data?.matricule)
        localStorage.setItem("Validation", String(data?.validation))
    }
  }

  localGetDataUser():any{
    let roleUser = localStorage.getItem("RoleUser")
    if (roleUser == RoleUser.Admin) {
      return {
        id: localStorage.getItem("Id"),
        email: localStorage.getItem("Email"),
        nom: localStorage.getItem("Nom"),
        prenom: localStorage.getItem("Prenom"),
        roleUser: localStorage.getItem("RoleUser")
      }
    } else if (roleUser == RoleUser.Enseignant) {
      return {
        id: localStorage.getItem("Id"),
        email: localStorage.getItem("Email"),
        nom: localStorage.getItem("Nom"),
        prenom: localStorage.getItem("Prenom"),
        roleUser: localStorage.getItem("RoleUser"),
        distance: localStorage.getItem("Distance"),
        age: localStorage.getItem("Age"),
        ancien: localStorage.getItem("Ancien"),
        maladie: localStorage.getItem("Maladie"),
        chargeCours: localStorage.getItem("ChargeCours"),
        priorite: localStorage.getItem("Priorite"),
        validation: localStorage.getItem("Validation")
      }
    } else if (roleUser == RoleUser.Etudiant) {
      return {
        id: localStorage.getItem("Id"),
        email: localStorage.getItem("Email"),
        nom: localStorage.getItem("Nom"),
        prenom: localStorage.getItem("Prenom"),
        roleUser: localStorage.getItem("RoleUser"),
        matricule: localStorage.getItem("Matricule"),
        validation: localStorage.getItem("Validation")
      }
    }
  }

  changeFormForgotPassword(){
    const formForgotPassword = document.getElementById('formForgotPassword')
    const confirmCode = document.getElementById('confirmCode')
    formForgotPassword?.setAttribute('style','display:none !important')
    confirmCode?.setAttribute('style','display:block !important')
  }
  getFormattedDatetime(selectedDate:any) {
    let dateArray = selectedDate.split("T");
    return `${dateArray[0]} ${dateArray[1]}:00.000000`;
  }
}
