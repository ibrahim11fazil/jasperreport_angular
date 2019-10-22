import { Injectable } from '@angular/core';
import { LanguageUtil } from 'app/app.language';
import { ToastrService } from 'ngx-toastr';
import { IS_RTL_DEFAULT } from 'app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class SuccessService {

  language:LanguageUtil
  constructor( private toastr : ToastrService) {   
    this.language = new LanguageUtil(IS_RTL_DEFAULT);
  }
    
  successResponseHandling(jsonOrString){
    this.successSystemTranslation(jsonOrString)
  }

  successSystemTranslation(jsonOrString){
  switch(jsonOrString){
    case "success": 
    this.toastr.info(  this.language.erro_unsupported_type )
    break  
   
  }
}
}
