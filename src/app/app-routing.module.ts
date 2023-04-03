import { TimerComponent } from './timer/timer.component';
import { ManageComponent } from './manage/manage.component';
import { ProfileComponent } from './profile/profile.component';
import { SleepsongsComponent } from './sleepsongs/sleepsongs.component';
import { SettingsComponent } from './settings/settings.component';
import { RelaxComponent } from './relax/relax.component';
import { MeditationComponent } from './meditation/meditation.component';
import { SleepComponent } from './sleep/sleep.component';
import { SongdialogComponent } from './songdialog/songdialog.component';
import { FooterComponent } from './footer/footer.component';
import { GallaryComponent } from './gallary/gallary.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GetstartComponent } from './getstart/getstart.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'createaccount', component: CreateaccountComponent },
  { path: 'getstart', component: GetstartComponent },
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'gallary', component: GallaryComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'songdialog', component: SongdialogComponent },
  { path: 'sleep', component: SleepComponent },
  { path: 'meditation', component: MeditationComponent },
  { path: 'relax', component: RelaxComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'sleepsongs', component: SleepsongsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'timer', component: TimerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
