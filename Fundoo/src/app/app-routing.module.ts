import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashBoardComponent } from './dash-board/dash-board.component';



const routes: Routes = [
  {path : 'login', component: LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'dashBoard', component: DashBoardComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
