import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AdminService} from "../../Services/Admin/admin.service";
import {EnseignantService} from "../../Services/Enseignant/enseignant.service";
import {EtudiantService} from "../../Services/Etudiant/etudiant.service";
import {RoleUser} from "../../Models/Enum/role-user";
import {Admin} from "../../Models/Entity/Admin/admin";
import {Enseignant} from "../../Models/Entity/Enseignant/enseignant";
import {Etudiant} from "../../Models/Entity/Etudiant/etudiant";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  Login: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private appCompoent:AppComponent, private adminService:AdminService, private enseignantService:EnseignantService, private etudiantService:EtudiantService) { }

  loginSubmit(user:any){
    this.adminService.loginAdmin(user).subscribe((data:Admin)=> {
      if (data.id != null) {
        this.appCompoent.localSetDataUser(data, RoleUser.Admin)
        this.appCompoent.redierctTo('/admin')
      }
      else {
        this.enseignantService.loginEnseignant(user).subscribe((data: Enseignant) => {
          if (data.id != null) {
            this.appCompoent.localSetDataUser(data, RoleUser.Enseignant)
            this.appCompoent.redierctTo('/enseignant')
          } else {
            this.etudiantService.loginEtudiant(user).subscribe((data: Etudiant) => {
              if (data.id != null) {
                this.appCompoent.localSetDataUser(data, RoleUser.Etudiant)
                if (data.roleUser == RoleUser.Delegue){
                  this.appCompoent.redierctTo('/delegue')
                } else if (data.roleUser == RoleUser.Etudiant){
                  this.appCompoent.redierctTo('/etudiant')
                }
              } else {
                alert("User not found");
              }
            })
          }
        })
      }
    });
  }
  login() {
    const emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const email = this.Login.get('email')?.value;
    const password = this.Login.get('password')?.value;

    let emailErrorCheck = 0;
    let passwordErrorCheck = 0;

    if (email == '' || email == ' ' || !emailCheck.test(email)) {
      emailErrorCheck = 1
    }
    if (password == '' || password == ' ') {
      passwordErrorCheck = 1
    }
    if (emailErrorCheck == 1 && passwordErrorCheck == 0) {
      alert('Email is invalid')
    }
    if (passwordErrorCheck == 1 && emailErrorCheck == 0) {
      alert('Password is invalid')
    }
    if (emailErrorCheck == 1 && passwordErrorCheck == 1) {
      alert('Email and Password is invalid')
    }
    if (emailErrorCheck == 0 && passwordErrorCheck == 0) {
      this.loginSubmit(this.Login.value)
    }
  }
}
