import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ResponseError } from 'app/models/ci-system-user';
import { RESOURCE_NOT_FOUND, IS_RTL_DEFAULT, BAD_REQUEST, UNAUTHORIZED, UNSUPPORTED_TYPE, SERVER_ERROR } from 'app/app.constants';
import { MainComponent } from 'app/main/main.component';
import { LanguageUtil } from 'app/app.language';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  language:LanguageUtil
  constructor( private toastr : ToastrService) {   
    this.language = new LanguageUtil(IS_RTL_DEFAULT);
  }

  errorString(error){
 
    switch(error){
      case "Please fill required fields":  
      this.toastr.error(this.language.error_resource_not_found )
      break
      case "Please fill required fields":  
      this.toastr.error(this.language.error_resource_not_found )
      break

    }
  }
    
  errorResponseHandling(error){
    console.log(error)
    console.error("Error --> " + error)
    var errorMsg = <ResponseError> error
    this.errorSystemTranslation(errorMsg)
  }

 errorSystemTranslation(errorMsg:ResponseError){
  switch(errorMsg.status){
    case RESOURCE_NOT_FOUND:  
       this.toastr.error(errorMsg.status +  ":"+errorMsg.message + ":"   +  this.language.error_resource_not_found )
       break
    case BAD_REQUEST:  
       this.toastr.error(errorMsg.status +  ":"+errorMsg.message + ":"   +  this.language.error_bad_request )
       break    
       case UNAUTHORIZED:  
       this.toastr.error(errorMsg.status +  ":"+errorMsg.message + ":"  +  this.language.error_unauthorized )
       break   
       case UNSUPPORTED_TYPE:  
       this.toastr.error(errorMsg.status +  ":"+errorMsg.message + ":"  +  this.language.erro_unsupported_type )
       break  
       case SERVER_ERROR:  
       this.toastr.error(errorMsg.status + ":"+errorMsg.message + ":"  +  this.language.error_server_error )
       break 
       default:
       this.toastr.error(errorMsg.status + errorMsg.message + ":" + errorMsg.error.error_description ) 
       break
  }
 }

  

}
