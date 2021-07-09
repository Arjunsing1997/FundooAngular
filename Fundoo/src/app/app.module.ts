import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { ResetComponent } from './Components/reset/reset.component';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { DisplayNoteComponent } from './Components/display-note/display-note.component';
import { UpdateNoteComponent } from './Components/update-note/update-note.component';
import { IconComponent } from './Components/icon/icon.component';
import { NoteComponent } from './Components/note/note.component';






@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashBoardComponent,
    ForgetPasswordComponent,
    ResetComponent,
    CreateNoteComponent,
    DisplayNoteComponent,
    UpdateNoteComponent,
    IconComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule, FormsModule, ReactiveFormsModule, MatCardModule, HttpClientModule,
    MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatMenuModule, MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
