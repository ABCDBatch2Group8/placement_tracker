import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdmnCourseComponent } from './admn-course/admn-course.component';
import { AdmnDashboardComponent } from './admn-dashboard/admn-dashboard.component';
import { AdmnLoginComponent } from './admn-login/admn-login.component';
import { AdmnStudentsComponent } from './admn-students/admn-students.component';
import { AdmnSubadmnComponent } from './admn-subadmn/admn-subadmn.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpSignupComponent } from './emp-signup/emp-signup.component';
import { EmployerComponent } from './employer/employer.component';
import { LandingComponent } from './landing/landing.component';
import { StudLoginComponent } from './stud-login/stud-login.component';
import { StudSignupComponent } from './stud-signup/stud-signup.component';
import { StudentComponent } from './student/student.component';
import { TestComponent } from './test/test.component';

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
    {path : "signup", component : StudSignupComponent}
  ]
  },
  {path : "admin", component : AdminComponent,
  children : [
    {path : "", component : AdmnLoginComponent},
    {path : "dashboard", component : AdmnDashboardComponent},
    {path:"courses",component:AdmnCourseComponent},
    {path:"subadmin",component:AdmnSubadmnComponent},
    {path:"ictakstudents",component:AdmnStudentsComponent},
    {path:"test",component:TestComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
