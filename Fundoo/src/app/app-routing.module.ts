import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { ForgetComponent } from './Components/forget/forget.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';



const routes: Routes = [
  {path : 'login', component: LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'forget' , component : ForgetComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
