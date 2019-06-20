import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { SystemUserService } from 'app/service/user/system-user.service';
import { ToastrService } from 'ngx-toastr';
import { SystemUser, SystemUserResponse, SearchUser, ISystemUserResponseList } from 'app/models/system-user';
import { Page } from "../../models/paged-data";
@Component({
  selector: 'ms-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  systemUser:SystemUser
  form:FormGroup
  page = 0
  rows = new Array<SystemUserResponse>();
  displayedColumns: string[] = ['id', 'fullName', 'username']; 
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
      searchControl:[""]
    });
  }

  onSubmit(){
    var searchString = new SearchUser () 
    searchString.jobId=this.form.value.searchControl
    searchString.limit=10
    if(this.page==0)
    searchString.start=0
    else
    searchString.start = (Number(searchString.limit) * this.page) + 1
    this.userService.listUsers(searchString).subscribe(
      data=>  {
        var response =  <ISystemUserResponseList>data
        if(response.status){
        this.rows =  response.data 
        }
        else{
          console.log(response.message)
          this.toastr.error(response.message.toString())
        }
      },
      error=>  this.toastr.error(error.message) 
    )
  }

  onScroll() {  
    this.page = this.page + 1;  
    this.onSubmit();  
  }  

}
