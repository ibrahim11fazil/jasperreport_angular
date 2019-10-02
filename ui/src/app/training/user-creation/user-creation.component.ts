import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { SystemUserService } from 'app/service/user/system-user.service';
import { ISystemRoles, SystemRoles } from 'app/models/system-roles';
import { ToastrService } from 'ngx-toastr';
import { SystemUser, ISystemUserResponse, MawaredUserResponse } from 'app/models/system-user';
import { ActivatedRoute } from '@angular/router';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';
import { LanguageUtil } from 'app/app.language';
import { MainComponent } from 'app/main/main.component';

@Component({
  selector: 'ms-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss']
})
export class UserCreationComponent implements OnInit {

  form:FormGroup
  param:any;
  language:LanguageUtil
  systemRoles:SystemRoles[]=[]
  systemUser:SystemUser
  blankPassword:String="Password"
  cNameAr:String=""
 // @ViewChild('fileUploaderComponent') public fileuploader:FileUploaderComponent
  constructor(
    private userService:SystemUserService,
    private fb:FormBuilder,
    private pageTitleService: PageTitleService,
    private toastr : ToastrService,
    private mainComponent:MainComponent,
    private activatedRoute: ActivatedRoute,){
    this.pageTitleService.setTitle("User Creation") 
    this.blankUser()
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }

  blankUser(){
    this.systemUser = {id:0,password:"",roleId:0,enabled:0}
  }

  ngDoCheck(): void {
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }

  ngOnInit() {
    this.formSetup()
    this.formInit()
    this.loadDataFromParam()
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
        if(response.status){
        this.systemRoles =  response.data 
        }
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
    debugger
      this.userService.saveUser( this.systemUser).subscribe(
        data=>  {
          debugger
          var response =  <ISystemUserResponse>data
          if(response.status){
            this.cNameAr = ""
          this.toastr.success(response.message.toString())
          this.form.reset()
          this.blankUser()
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

  loadDataFromParam(){
    //console.log(this.param);
    this.activatedRoute.params.subscribe(params => {
      if(params['id']){
          this.param = params['id'];
      }
     });  
      if(this.param!='' && this.param!=undefined){
        this.pageTitleService.setTitle("User Updataion") 
        let user={id:Number(this.param),password:"",roleId:0,enabled:0}
        this.userService.getUser(user).subscribe(
          data => {
             var response = <ISystemUserResponse>data
             if(response.status){
              this.systemUser = response.data
              this.patch()
             }
          },
          error => {
            console.log(error)
            this.toastr.error(error.message)
          }
        )
      }
  }

  patch(){
    var roleSelected = this.systemRoles.find(i => i.id==this.systemUser.roleId)
    this.form = this.fb.group({
      jobId:[this.systemUser.id, Validators.compose([Validators.required])],
      userRole:[roleSelected, Validators.compose([Validators.required])],
      password: null,
      enabledUser:[this.systemUser.enabled.toString(), Validators.compose([Validators.required])]
    });
    
    // this.form.controls['jobId'].patchValue(this.systemUser.id)
     //this.form.controls['userRole'].patchValue(roleSelected)
     //this.form.controls['enabledUser'].patchValue(this.systemUser.enabled.toString())
    // this.form.controls['password'].validator=null
     this.blankPassword="Please provide blank area for no change in password"
   
  }

  onJobIdChange(event){
    if( this.form.value.jobId!=null && this.form.value.jobId!="" ){
      this.getUserById(this.form.value.jobId)
    }
  }

  getUserById(jobId){
    this.userService.getUserById(jobId).subscribe(
      data=>{
        //this.toastr.info("Valid User")
        debugger
        var response = <MawaredUserResponse>data
        if(response.data!=null){
        this.cNameAr= response.data.cnameAr
        }else{
          this.cNameAr= "Invalid User"
        }

      },
      error=>{
        console.log(error.message)
        this.cNameAr= "Invalid User"
      }
    )
  }

}
