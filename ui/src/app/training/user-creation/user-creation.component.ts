import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { SystemUserService } from 'app/service/user/system-user.service';
import { ISystemRoles, SystemRoles } from 'app/models/system-roles';
import { ToastrService } from 'ngx-toastr';
import { SystemUser, ISystemUserResponse } from 'app/models/system-user';

@Component({
  selector: 'ms-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss']
})
export class UserCreationComponent implements OnInit {

  form:FormGroup

  systemRoles:SystemRoles[]=[]
  systemUser:SystemUser
  constructor(
    private userService:SystemUserService,
    private fb:FormBuilder,
    private pageTitleService: PageTitleService,
    private toastr : ToastrService){
    this.pageTitleService.setTitle("User Creration") 
    this.systemUser = {id:0,password:"",roleId:0,enabled:0}
   // this.formInit()
    //this.patch()
   // this.formSetup()
   // this.loadDataFromParam()
  }

  ngOnInit() {
    this.formInit()
    this.formSetup()
  }

  formInit()
  {
    this.form = this.fb.group({
      // enabledUser:[null, Validators.compose([Validators.required])],
      jobId:[null, Validators.compose([Validators.required])],
      userRole:[null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
      enabledUser:[null, Validators.compose([Validators.required])]
    });
  }

  formSetup(){
    this.userService.listRoles().subscribe(
      data=>  {
        var response =  <ISystemRoles>data
        if(response.status)
        this.systemRoles =  response.data 
        else{
          console.log(response.message)
          this.toastr.error(response.message.toString())
        }
      },
      error=>  this.toastr.error(error.message) 
    )
  }

  onSubmit(){
    if(this.form.valid){
    this.systemUser = {
      id:this.form.value.jobId,
      password:this.form.value.password,
      roleId:this.form.value.userRole.id,
      enabled:Number(this.form.value.enabledUser)
    }
      
      this.userService.saveUser( this.systemUser).subscribe(
        data=>  {
          debugger
          var response =  <ISystemUserResponse>data
          if(response.status){
          this.toastr.success(response.message.toString())
          this.form.reset()
          }
          else{
            this.toastr.error(response.message.toString())
          }
        },
        error=>  {
          debugger
          this.toastr.error(error.message) 
        }
      )
    }else{
      this.toastr.error("Please fill required fields") 
    }
  }

}
