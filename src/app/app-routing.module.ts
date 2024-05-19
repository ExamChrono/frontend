import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Pages/Auto/login/login.component";
import {ForgotPasswordComponent} from "./Pages/Auto/forgot-password/forgot-password.component";
import {LogoutComponent} from "./Pages/Auto/logout/logout.component";
import {DelegueModuleComponent} from "./Pages/Delegue/delegue-module/delegue-module.component";
import {EnseignantValidationSurveilleComponent} from "./Pages/Enseignant/enseignant-validation-surveille/enseignant-validation-surveille.component";
import {EtudiantETComponent} from "./Pages/Etudiant/etudiant-e-t/etudiant-e-t.component";
import {AdminEnseignantComponent} from "./Pages/Admin/admin-enseignant/admin-enseignant.component";
import {AdminEtudiantComponent} from "./Pages/Admin/admin-etudiant/admin-etudiant.component";
import {AdminDelegueComponent} from "./Pages/Admin/admin-delegue/admin-delegue.component";
import {AdminFiliereComponent} from "./Pages/Admin/admin-filiere/admin-filiere.component";
import {AdminGroupeComponent} from "./Pages/Admin/admin-groupe/admin-groupe.component";
import {AdminModulesComponent} from "./Pages/Admin/admin-modules/admin-modules.component";
import {AdminPassExamComponent} from "./Pages/Admin/admin-pass-exam/admin-pass-exam.component";
import {AdminSurveilleComponent} from "./Pages/Admin/admin-surveille/admin-surveille.component";
import {AdminSalleComponent} from "./Pages/Admin/admin-salle/admin-salle.component";
import {
  AddEtudiantToPassExamenComponent
} from "./Pages/Admin/add-etudiant-to-pass-examen/add-etudiant-to-pass-examen.component";
import {DelegueETComponent} from "./Pages/Delegue/delegue-et/delegue-et.component";
import {EnseignantETComponent} from "./Pages/Enseignant/enseignant-et/enseignant-et.component";

const routes: Routes = [
  // Auto
  // ¤ login
  { path: '', component: LoginComponent},
  // ¤ forgotPassword
  { path: 'auto/forgotPassword', component: ForgotPasswordComponent},
  // ¤ logout
  { path: 'auto/logout', component: LogoutComponent},

  // Admin
  // ¤ home
  { path: 'admin', component: AdminEnseignantComponent},
  { path: 'admin/enseignant', component: AdminEnseignantComponent},
  { path: 'admin/etudiant', component: AdminEtudiantComponent},
  { path: 'admin/delegue', component: AdminDelegueComponent},
  { path: 'admin/filiere', component: AdminFiliereComponent},
  { path: 'admin/groupe', component: AdminGroupeComponent},
  { path: 'admin/modules', component: AdminModulesComponent},
  { path: 'admin/passExam', component: AdminPassExamComponent},
  { path: 'admin/surveille', component: AdminSurveilleComponent},
  { path: 'admin/salle', component: AdminSalleComponent},
  { path: 'admin/addEtudiantToPassExamen', component: AddEtudiantToPassExamenComponent},

  // Delegue
  // ¤ home
  { path: 'delegue', component: DelegueModuleComponent},
  { path: 'delegue/modules', component: DelegueModuleComponent},
  { path: 'delegue/ET', component: DelegueETComponent},

  // Enseignant
  // ¤ home
  { path: 'enseignant', component: EnseignantValidationSurveilleComponent},
  { path: 'enseignant/ET', component: EnseignantETComponent},

  // Etudiant
  // ¤ home
  { path: 'etudiant', component: EtudiantETComponent},
  { path: 'etudiant/ET', component: EtudiantETComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
