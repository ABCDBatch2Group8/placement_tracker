import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdmnDashboardComponent } from './admn-dashboard/admn-dashboard.component';
import { AdmnLoginComponent } from './admn-login/admn-login.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpSignupComponent } from './emp-signup/emp-signup.component';
import { EmployerComponent } from './employer/employer.component';
import { LandingComponent } from './landing/landing.component';
import { StudLoginComponent } from './stud-login/stud-login.component';
import { StudSignupComponent } from './stud-signup/stud-signup.component';
import { StudentComponent } from './student/student.component';
import { StudJoblistComponent } from './stud-joblist/stud-joblist.component';
import { StudContactUspageComponent } from './stud-contact-uspage/stud-contact-uspage.component';
import { StudProfilepageComponent } from './stud-profilepage/stud-profilepage.component';
import { StudSettingspageComponent } from './stud-settingspage/stud-settingspage.component';
import { StudFormP2Component } from './stud-form-p2/stud-form-p2.component';

const routes: Routes = [
  {path : "", component : LandingComponent},
  {path : "employer", component : EmployerComponent,
  children : [
    {path : "", component : EmpLoginComponent},
    {path : "login", component : EmpLoginComponent},
    {path : "signup", component : EmpSignupComponent}
  ]
  },
  {path : "student", component : StudentComponent,
  children : [
    {path : "", component : StudLoginComponent},
    {path : "login", component : StudLoginComponent},
    {path : "signup", component : StudSignupComponent},
    {path : "job", component :StudJoblistComponent},
    {path : "contact", component :StudContactUspageComponent},
    {path : "profile", component :StudProfilepageComponent},
    {path : "settings", component :StudSettingspageComponent},
    {path : "updatepg2", component :StudFormP2Component}
  
  ]
  },
  {path : "admin", component : AdminComponent,
  children : [
    {path : "", component : AdmnLoginComponent},
    {path : "dashboard", component : AdmnDashboardComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
