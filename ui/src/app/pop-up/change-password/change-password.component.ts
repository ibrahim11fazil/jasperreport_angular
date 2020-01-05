import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { AddNewUserComponent } from 'app/widget-component/pop-up/add-new-user/add-new-user.component';
import { ErrorService } from 'app/service/error/error.service';
import { SystemUserService } from 'app/service/user/system-user.service';
import { PasswordRequest } from 'app/models/system-user';
import { ToastrService } from 'ngx-toastr';
import { LanguageUtil } from 'app/app.language';
import { MainComponent } from 'app/main/main.component';
import { AuthService } from 'app/service/auth-service/auth.service';

@Component({
  selector: 'ms-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  form    : FormGroup;
  language:LanguageUtil
	constructor( private formBuilder : FormBuilder,
               public dialogRef    : MatDialogRef<ChangePasswordComponent>,
               private errorService:ErrorService,
               private service:SystemUserService, 
               private toastr : ToastrService
              ) {
                 //TODO Need to change this in future 
                this.language = new LanguageUtil(true);
               }

 

	ngOnInit() {
		this.form = this.formBuilder.group({
			password	 : ['',[Validators.required,Validators.minLength(8)]],
			cpassword 	 : ['',[Validators.required,Validators.minLength(8),this.matchValues('password'),]]
		})
	}

	// onFormSubmit method is submit a add new user form.
	

  onFormSubmit(){
    var data= new PasswordRequest()
    data.password =this.form.value.password
    this.service.changePassword(data).subscribe(
      data=>this.passwordUpdated(data),
        error=>{
          console.log(error)
          this.toastr.error(error.message)
        }
    )
		
  }

  passwordUpdated(data){
         if(data.status){
           this.toastr.success(this.language.changepassword_success)
           this.dialogRef.close(true);
         }else{
          this.toastr.success(this.language.changepassword_failed)
         }
  }
  
  public  matchValues(
    matchTo: string // name of the control to match to
  ): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent &&
        !!control.parent.value &&
        control.value === control.parent.controls[matchTo].value
        ? null
        : { isMatching: false };
    };
}

}
