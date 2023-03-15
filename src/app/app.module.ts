import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { GetstartComponent } from './getstart/getstart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { GallaryComponent } from './gallary/gallary.component';
import { FooterComponent } from './footer/footer.component';
import { SongdialogComponent } from './songdialog/songdialog.component';
import { SleepComponent } from './sleep/sleep.component';
import { MeditationComponent } from './meditation/meditation.component';
import { RelaxComponent } from './relax/relax.component';
import { SettingsComponent } from './settings/settings.component';
import { SleepsongsComponent } from './sleepsongs/sleepsongs.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CreateaccountComponent,
    GetstartComponent,
    HomeComponent,
    NavbarComponent,
    GallaryComponent,
    FooterComponent,
    SongdialogComponent,
    SleepComponent,
    MeditationComponent,
    RelaxComponent,
    SettingsComponent,
    SleepsongsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
