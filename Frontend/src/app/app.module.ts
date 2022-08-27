import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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

import { EmpService } from './emp.service';
import { PasswordPatternDirective } from './password-pattern.directive';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { EmpProfileComponent } from './emp-profile/emp-profile.component';
import { JobPostComponent } from './job-post/job-post.component';
import { JobService } from './job.service';


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
    PasswordPatternDirective,
    EmpDashboardComponent,
    EmpProfileComponent,
    JobPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmpService,JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
