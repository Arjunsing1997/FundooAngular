import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { DisplayNoteComponent } from './Components/display-note/display-note.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ResetComponent } from './Components/reset/reset.component';
import { DashBoardComponent } from './dash-board/dash-board.component';



const routes: Routes = [
  {path : 'login', component: LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'forget-password', component: ForgetPasswordComponent},
  {path : 'reset' , component : ResetComponent},
  {path : 'dashBoard', component: DashBoardComponent,
      children: [
        {
          path: '', redirectTo: 'note', pathMatch: 'full'
        },

        { path: 'note', component: NoteComponent }
      ]
    },
  {path:'dsplaynote',component:DisplayNoteComponent}


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
