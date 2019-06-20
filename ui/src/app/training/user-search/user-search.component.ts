import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { SystemUserService } from 'app/service/user/system-user.service';
import { ToastrService } from 'ngx-toastr';
import { SystemUser, SystemUserResponse } from 'app/models/system-user';
import { Page } from "../../models/paged-data";
@Component({
  selector: 'ms-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  systemUser:SystemUserResponse
  form:FormGroup
  page = new Page();
  rows = new Array<SystemUserResponse>();
  constructor(
    private userService:SystemUserService,
    private fb:FormBuilder,
    private pageTitleService: PageTitleService,
    private toastr : ToastrService){
    this.pageTitleService.setTitle("User Creration") 
    //this.systemUser = {id:0,password:"",roleId:0,enabled:0}
   // this.formInit()
  //this.patch()
  // this.formSetup()
  // this.loadDataFromParam()
  }

  ngOnInit() {
    this.formInit()
  }

  formInit(){
    this.form = this.fb.group({
      searchControl:[null, Validators.compose([Validators.required])]
    });
  }

  onSubmit(){

  }

}
