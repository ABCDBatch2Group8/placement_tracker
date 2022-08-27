import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { EmployerComponent } from './employer/employer.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpSignupComponent } from './emp-signup/emp-signup.component';
import { StudentComponent } from './student/student.component';
import { StudLoginComponent } from './stud-login/stud-login.component';
import { StudSignupComponent } from './stud-signup/stud-signup.component';
import { AdminComponent } from './admin/admin.component';
import { AdmnDashboardComponent } from './admn-dashboard/admn-dashboard.component';
import { AdmnLoginComponent } from './admn-login/admn-login.component';
import { AdmnCourseComponent } from './admn-course/admn-course.component';
import { AdmnStudentsComponent } from './admn-students/admn-students.component';
import { AdmnSubadmnComponent } from './admn-subadmn/admn-subadmn.component';
import { AdmnMenuComponent } from './admn-menu/admn-menu.component';
import { AdmnEmployerComponent } from './admn-employer/admn-employer.component';
import { DataTablesModule } from 'angular-datatables';
import { AdmnEmpprofileComponent } from './admn-empprofile/admn-empprofile.component';
import { AdmnCandidatesComponent } from './admn-candidates/admn-candidates.component';
import { AdmnAuthService } from './admn-auth.service';
import { AdmnEmployerService } from './admn-employer.service';
import { AdmnCandidatesService } from './admn-candidates.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    EmployerComponent,
    EmpLoginComponent,
    EmpSignupComponent,
    StudentComponent,
    StudLoginComponent,
    StudSignupComponent,
    AdminComponent,
    AdmnDashboardComponent,
    AdmnLoginComponent,
    AdmnCourseComponent,
    AdmnStudentsComponent,
    AdmnSubadmnComponent,
    AdmnMenuComponent,
    AdmnEmployerComponent,
    AdmnEmpprofileComponent,
    AdmnCandidatesComponent
    StudDashboardComponent,
    StudJoblistComponent,
    StudProfilepageComponent,
    StudSettingspageComponent,
    StudContactUspageComponent,
    StudFormP2Component,
  ],
  imports: [
    BrowserModule,   
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AdmnAuthService,AdmnEmployerService,AdmnCandidatesService,StudAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
