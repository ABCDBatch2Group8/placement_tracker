import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudAuthService } from './stud-auth.service';
import { StudDashboardComponent } from './stud-dashboard/stud-dashboard.component';



import { StudJoblistComponent } from './stud-joblist/stud-joblist.component';
import { StudProfilepageComponent } from './stud-profilepage/stud-profilepage.component';
import { StudSettingspageComponent } from './stud-settingspage/stud-settingspage.component';
import { StudContactUspageComponent } from './stud-contact-uspage/stud-contact-uspage.component';
import { StudFormP2Component } from './stud-form-p2/stud-form-p2.component';

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
    HttpClientModule,
    FormsModule,
    
    

    
  ],
  providers: [StudAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
