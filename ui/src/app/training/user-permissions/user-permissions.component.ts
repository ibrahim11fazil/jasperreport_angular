import { Component, OnInit } from '@angular/core';
import { SystemUserService } from 'app/service/user/system-user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { SystemRoles, ISystemRoles } from 'app/models/system-roles';
import { UserPermissionResponse, UserPermission, SystemPermissionByRoleRequest, UpdateRoleRequest } from 'app/models/system-user';

@Component({
  selector: 'ms-user-permissions',
  templateUrl: './user-permissions.component.html',
  styleUrls: ['./user-permissions.component.scss']
})
export class UserPermissionsComponent implements OnInit {
  systemRoles:SystemRoles[]=[]
  systemPermissions:UserPermission[]=[]
  systemRolesSelected:SystemRoles
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


    this.userService.getPermissions().subscribe(
      data=>  {
        var response =  <UserPermissionResponse>data
        if(response.status){
        //TODO get data 
        //response.data.find(i=> i.id==1).status=true
        response.data.find(i=> i.id>0).status=false
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

  onChangeEventRole($event){
     this.systemRolesSelected = <SystemRoles>$event.value
     var request = new SystemPermissionByRoleRequest()
     request.roleId=this.systemRolesSelected.id
     this.getPermissionBasedOnRole(request)

  }

  clearAllToFalse(){
    this.systemPermissions.find(i=> i.id>0).status=false
  }

  getPermissionBasedOnRole(request){
    this.clearAllToFalse()
    this.userService.getPermissionsByRole(request).subscribe(
      data=>  {
        var response =  <UserPermissionResponse>data
        if(response.status && response.data.length>0){
        response.data.forEach( i=> 
          this.systemPermissions.find(j=> j.id == i.id ).status=true
         )
        }
        else if(response.data.length==0){
          this.systemPermissions.forEach(i=> i.status=false)
          this.toastr.info("No Data found")
        }
        else{
          this.systemPermissions.forEach(i=> i.status=false)
          this.toastr.error(response.message.toString())
        }
      },
      error=>  this.toastr.error(error.message) 
    )
  }

  selectAll(){
    this.systemPermissions.forEach(i=> i.status=true)
  }
  clearAll(){
    this.systemPermissions.find(i=> i.status=false)
  }

  updateRoleRequest(){
    if(this.systemRolesSelected !=null && this.systemPermissions!=null){
    var requestUpdate= new UpdateRoleRequest()
    requestUpdate.id =this.systemRolesSelected.id
    var permissionsSelected =  this.systemPermissions
    requestUpdate.newPermissions=permissionsSelected
    this.userService.updateRoleAndPermission(requestUpdate).subscribe(
      data=>  {
        var response =  <UserPermissionResponse>data
        if(response.status){
          this.toastr.success(response.message.toString())
        }
        else{
          this.toastr.info(response.message.toString())
        }
      },
      error=>  this.toastr.error(error.message) 
    )
    }
  }


}
