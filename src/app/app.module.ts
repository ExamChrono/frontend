import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarAdminComponent } from './Component/navbar-admin/navbar-admin.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarDelegueComponent} from "./Component/navbar-delegue/navbar-delegue.component";
import {NavbarEnseignantComponent} from "./Component/navbar-enseignant/navbar-enseignant.component";
import {FormLoginComponent} from "./Component/form-login/form-login.component";
import {FormForgetPasswordComponent} from "./Component/form-forget-password/form-forget-password.component";
import {LoginComponent} from "./Pages/Auto/login/login.component";
import { NavbarEtudiantComponent } from './Component/navbar-etudiant/navbar-etudiant.component';
import { ForgotPasswordComponent } from './Pages/Auto/forgot-password/forgot-password.component';
import { LogoutComponent } from './Pages/Auto/logout/logout.component';
import { DelegueModuleComponent } from './Pages/Delegue/delegue-module/delegue-module.component';
import { EnseignantValidationSurveilleComponent } from './Pages/Enseignant/enseignant-validation-surveille/enseignant-validation-surveille.component';
import { EtudiantETComponent } from './Pages/Etudiant/etudiant-e-t/etudiant-e-t.component';
import { AdminEnseignantComponent } from './Pages/Admin/admin-enseignant/admin-enseignant.component';
import { AdminEtudiantComponent } from './Pages/Admin/admin-etudiant/admin-etudiant.component';
import { AdminDelegueComponent } from './Pages/Admin/admin-delegue/admin-delegue.component';
import { AdminFiliereComponent } from './Pages/Admin/admin-filiere/admin-filiere.component';
import { AdminGroupeComponent } from './Pages/Admin/admin-groupe/admin-groupe.component';
import { AdminModulesComponent } from './Pages/Admin/admin-modules/admin-modules.component';
import { AdminPassExamComponent } from './Pages/Admin/admin-pass-exam/admin-pass-exam.component';
import { AdminSurveilleComponent } from './Pages/Admin/admin-surveille/admin-surveille.component';
import { AdminSalleComponent } from './Pages/Admin/admin-salle/admin-salle.component';
import { TableEnseignantComponent } from './Component/table-enseignant/table-enseignant.component';
import { TableDelegueComponent } from './Component/table-delegue/table-delegue.component';
import { TableEtudiantComponent } from './Component/table-etudiant/table-etudiant.component';
import { TableFiliereComponent } from './Component/table-filiere/table-filiere.component';
import { TableGroupeComponent } from './Component/table-groupe/table-groupe.component';
import { TableModuleComponent } from './Component/table-module/table-module.component';
import { TablePassExamenComponent } from './Component/table-pass-examen/table-pass-examen.component';
import { TableSurveilleComponent } from './Component/table-surveille/table-surveille.component';
import { TableSalleComponent } from './Component/table-salle/table-salle.component';
import { AddEtudiantToPassExamenComponent } from './Pages/Admin/add-etudiant-to-pass-examen/add-etudiant-to-pass-examen.component';
import { DelegueETComponent } from './Pages/Delegue/delegue-et/delegue-et.component';
import { TableDelegueModulesComponent } from './Component/table-delegue-modules/table-delegue-modules.component';
import { ETComponent } from './Component/et/et.component';
import { EnseignantETComponent } from './Pages/Enseignant/enseignant-et/enseignant-et.component';
import { ValidationSurveilleComponent } from './Component/validation-surveille/validation-surveille.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarAdminComponent,
    NavbarDelegueComponent,
    NavbarEnseignantComponent,
    FormLoginComponent,
    FormForgetPasswordComponent,
    LoginComponent,
    NavbarEtudiantComponent,
    ForgotPasswordComponent,
    LogoutComponent,
    DelegueModuleComponent,
    EnseignantValidationSurveilleComponent,
    EtudiantETComponent,
    AdminEnseignantComponent,
    AdminEtudiantComponent,
    AdminDelegueComponent,
    AdminFiliereComponent,
    AdminGroupeComponent,
    AdminModulesComponent,
    AdminPassExamComponent,
    AdminSurveilleComponent,
    AdminSalleComponent,
    TableEnseignantComponent,
    TableDelegueComponent,
    TableEtudiantComponent,
    TableFiliereComponent,
    TableGroupeComponent,
    TableModuleComponent,
    TablePassExamenComponent,
    TableSurveilleComponent,
    TableSalleComponent,
    AddEtudiantToPassExamenComponent,
    DelegueETComponent,
    TableDelegueModulesComponent,
    ETComponent,
    EnseignantETComponent,
    ValidationSurveilleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
