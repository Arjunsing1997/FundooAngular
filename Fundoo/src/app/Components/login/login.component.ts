import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import { UserServiceService} from '../../Services/user-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  hide=true
  token : any
  constructor(private formBuilder: FormBuilder, private userService:UserServiceService,private route:Router) { }
  auth:boolean = true;

  ngOnInit() {

    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required ]]
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  loginUser(loginform : any) {
    let reqData = {
      email: loginform.email,
      password: loginform.password

    }
    console.log(reqData);

    this.userService.loginUser(reqData).subscribe((res : any)=>{
      console.log(" resgister success full ",res);
      // localStorage.setItem('currentUser', JSON.stringify({ token: this.token}));
      localStorage.setItem('user', JSON.stringify(res))
      this.route.navigate(['dashBoard'])
      
    })


  }

  forget()
  {
    this.route.navigate(['forget-password']);
  }

}