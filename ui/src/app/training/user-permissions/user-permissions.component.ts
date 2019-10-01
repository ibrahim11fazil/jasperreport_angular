import { Component, OnInit } from '@angular/core';
import { SystemUserService } from 'app/service/user/system-user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { SystemRoles, ISystemRoles } from 'app/models/system-roles';
import { UserPermissionResponse, UserPermission } from 'app/models/system-user';

@Component({
  selector: 'ms-user-permissions',
  templateUrl: './user-permissions.component.html',
  styleUrls: ['./user-permissions.component.scss']
})
export class UserPermissionsComponent implements OnInit {
  systemRoles:SystemRoles[]=[]
  systemPermissions:UserPermission[]=[]
  form:FormGroup
  constructor(
    private userService:SystemUserService,
    private fb:FormBuilder,
    private pageTitleService: PageTitleService,
    private toastr : ToastrService,
    private activatedRoute: ActivatedRoute,){
    this.pageTitleService.setTitle("User Permissions") 
  }

  ngOnInit() {
    this.formSetup()
    this.formInit()
  }

  formInit(){
    this.form = this.fb.group({
      userRole:[null, Validators.compose([Validators.required])],
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

    debugger
    this.userService.getPermissions().subscribe(
      data=>  {
        var response =  <UserPermissionResponse>data
        if(response.status){
        
        this.systemPermissions =  response.data 
        }
        else{
          console.log(response.message)
          this.toastr.error(response.message.toString())
        }
      },
      error=>  this.toastr.error(error.message) 
    )
  }

}
