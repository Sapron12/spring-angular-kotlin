import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {RegistrationPageComponent} from './components/registration-page/registration-page.component';
import {FormPageComponent} from './components/form-page/form-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: '', component: MainPageComponent},
  {path: 'registration', component: RegistrationPageComponent},
  {path: 'form', component: FormPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
