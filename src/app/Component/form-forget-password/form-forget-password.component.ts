import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AppComponent} from "../../app.component";
import {AdminService} from "../../Services/Admin/admin.service";
import {EnseignantService} from "../../Services/Enseignant/enseignant.service";
import {EtudiantService} from "../../Services/Etudiant/etudiant.service";
import {Admin} from "../../Models/Entity/Admin/admin";
import {RoleUser} from "../../Models/Enum/role-user";
import {Enseignant} from "../../Models/Entity/Enseignant/enseignant";
import {Etudiant} from "../../Models/Entity/Etudiant/etudiant";
import {ValidationService} from "../../Services/Validation/validation.service";
// @ts-ignore
import {Validation} from "../../Models/Entity/Validation/validation";

@Component({
  selector: 'app-form-forget-password',
  templateUrl: './form-forget-password.component.html',
  styleUrls: ['./form-forget-password.component.css']
})
export class FormForgetPasswordComponent {

  constructor(private validationService: ValidationService, private appCompoent:AppComponent, private adminService:AdminService, private enseignantService:EnseignantService, private etudiantService:EtudiantService) { }

  ForgotPassword: FormGroup =new FormGroup({
    email: new FormControl(''),
    code: new FormControl(''),
    roleUser: new FormControl(''),
    password:new FormControl('')
  })

  forgotPassword() {
    const emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const email = this.ForgotPassword.get('email')?.value;

    if (email == '' || email == ' ' || !emailCheck.test(email)) {
      alert('Email is invalid')
    } else {
      let emailObject = {
        email: email
      }
      this.adminService.getAdminByEmail(emailObject).subscribe((data:Admin)=> {
        if (data.id != null) {
          this.appCompoent.localSetDataUser(data, RoleUser.Admin)
          let validation: Validation = new Validation();
          validation.email = email;
          validation.roleUser = RoleUser.Admin;
          this.validationService.sendCode(validation,"Forget+Password").subscribe(data=>{
            this.appCompoent.changeFormForgotPassword()
          })
        }
        else {
          this.enseignantService.getEnseignantByEmail(emailObject).subscribe((data: Enseignant) => {
            if (data.id != null) {
              this.appCompoent.localSetDataUser(data, RoleUser.Enseignant)
              let validation: Validation = new Validation();
              validation.email = email;
              validation.roleUser = RoleUser.Enseignant;
              this.validationService.sendCode(validation,"Forget+Password").subscribe(data=>{
                this.appCompoent.changeFormForgotPassword()
              })
            } else {
              this.etudiantService.getEtudiantByEmail(emailObject).subscribe((data: Etudiant) => {
                if (data.id != null) {
                  this.appCompoent.localSetDataUser(data, RoleUser.Etudiant)
                  if (data.roleUser == RoleUser.Delegue){
                    let validation: Validation = new Validation();
                    validation.email = email;
                    validation.roleUser = RoleUser.Etudiant;
                    this.validationService.sendCode(validation,"Forget+Password").subscribe(data=>{
                      this.appCompoent.changeFormForgotPassword()
                    })
                  } else if (data.roleUser == RoleUser.Etudiant){
                    let validation: Validation = new Validation();
                    validation.email = email;
                    validation.roleUser = RoleUser.Etudiant;
                    this.validationService.sendCode(validation,"Forget+Password").subscribe(data=>{
                      this.appCompoent.changeFormForgotPassword()
                    })
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
  }
  confirmCode(){
    this.ForgotPassword =new FormGroup({
      email: new FormControl(localStorage.getItem("Email") ),
      roleUser: new FormControl(localStorage.getItem("RoleUser")),
      code: new FormControl(this.ForgotPassword.get('code')?.value),
      password: new FormControl(this.ForgotPassword.get('password')?.value)
    })

    let checkCode : Validation = {
      email : this.ForgotPassword.get('email')?.value,
      code : this.ForgotPassword.get('code')?.value,
      roleUser : this.ForgotPassword.get('roleUser')?.value
    }

    this.validationService.validateCode(checkCode).subscribe(data=>{
      if (data){
        var localDataUser = {
          id: Number(localStorage.getItem("Id")),
          email: String(localStorage.getItem("Email")),
          nom: String(localStorage.getItem("Nom")),
          prenom: String(localStorage.getItem("Prenom")),
          roleUser: String(localStorage.getItem("RoleUser")),
          password: String(this.ForgotPassword.get('password')?.value)
        }
        if (localDataUser.roleUser == RoleUser.Admin) {
          this.adminService.updateAdmin(localDataUser as Admin).subscribe(data=>{
            this.appCompoent.redierctTo('/')
          })
        } else if (localDataUser.roleUser == RoleUser.Enseignant) {
          // @ts-ignore
          localDataUser.distance = String(localStorage.getItem("Distance"))
          // @ts-ignore
          localDataUser.age = Number(localStorage.getItem("Age"))
          // @ts-ignore
          localDataUser.ancien = Boolean(localStorage.getItem("Ancien"))
          // @ts-ignore
          localDataUser.maladie = Boolean(localStorage.getItem("Maladie"))
          // @ts-ignore
          localDataUser.chargeCours = Boolean(localStorage.getItem("ChargeCours"))
          // @ts-ignore
          localDataUser.priorite = Boolean(localStorage.getItem("Priorite"))
          // @ts-ignore
          localDataUser.validation = Boolean(localStorage.getItem("Validation"))
          this.enseignantService.updateEnseignant(localDataUser as Enseignant).subscribe(data=>{
            this.appCompoent.redierctTo('/')
          })
        } else if (localDataUser.roleUser == RoleUser.Etudiant || localDataUser.roleUser == RoleUser.Delegue) {
          // @ts-ignore
          localDataUser.matricule = String(localStorage.getItem("Matricule"))
          // @ts-ignore
          localDataUser.validation = Boolean(localStorage.getItem("Validation"))
          this.etudiantService.updateEtudiant(localDataUser as Etudiant).subscribe(data=>{
            this.appCompoent.redierctTo('/')
          })
        }
      }else {
        alert("Code in Valid")
      }
    })
  }
}
