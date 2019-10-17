import {Component, Optional, ViewEncapsulation} from '@angular/core';
import { TranslateService} from '@ngx-translate/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar} from '@angular/material';

@Component({
  	selector: 'gene-app',
   template:`<router-outlet><ngx-loading-bar></ngx-loading-bar></router-outlet>`,
   encapsulation: ViewEncapsulation.None
})
//<ngx-loading-bar></ngx-loading-bar>
export class GeneAppComponent {
   constructor(
      //translate: TranslateService
      ) {
      //translate.addLangs(['en',  'ar']);
      //translate.setDefaultLang('en');
      //translate.setDefaultLang('ar');
      //const browserLang: string = translate.getBrowserLang();
      //translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
   }
}
