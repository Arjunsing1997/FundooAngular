import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService} from '../../Services/user-service.service'

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetForm : FormGroup

  constructor(private formBuilder: FormBuilder, private userService:UserServiceService,private route:Router) { }

  ngOnInit(): void {

    
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.forgetForm.controls[controlName].hasError(errorName);
   
  }
  
  forget(forgetForm : any) {
    let reqData = {
      email : forgetForm.email,

    }
    console.log(reqData);

    this.userService.forgetPassword(reqData).subscribe((res)=>{
      console.log(" resgister success full ",res);
      this.route.navigate(['reset']);
    })


  }

}
