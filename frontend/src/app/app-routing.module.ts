import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './stud-signup/signup.component';
import { LoginComponent } from './stud-login/login.component';

const routes: Routes = [
  {path:'',redirectTo: "student/signup",pathMatch:'full'},
  {path:"student/signup",component:SignupComponent},
  {path:"student/login",component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
