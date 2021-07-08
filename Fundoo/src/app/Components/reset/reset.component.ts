import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  resetForm : FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private userService:UserServiceService,private route:Router) { }

  ngOnInit(): void {

    this.resetForm = this.formBuilder.group({

      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
  }, 
  {
    validator: this.checkPasswords 
  });

}
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.cpassword.value;

  return pass === confirmPass ? null : { notSame: true }
}

  public hasError = (controlName: string, errorName: string) => {
    return this.resetForm.controls[controlName].hasError(errorName);
  }

  resetPassword(resetForm : any) {
    let reqData = {
      password : resetForm.password,
      confirmPassword : resetForm.confirmPassword
    }
    console.log(reqData);

    this.userService.resetPassword(reqData).subscribe((res)=>{
      console.log(" resgister success full ",res);
      this.route.navigate(['reset']);
    })


  }

  login(){
    return this.route.navigate(['login']);
  }


}

