import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule,
			MatIconModule,
			MatCardModule,
			MatInputModule,
			MatTableModule,
			MatButtonModule,
			MatCheckboxModule,
         MatGridListModule,
         MatDividerModule,
			MatSelectModule} from '@angular/material';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { NgAisModule } from 'angular-instantsearch';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { ShopComponent } from './shop/shop.component';
import { CardComponent } from './cards/cards.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WidgetComponentModule } from '../widget-component/widget-component.module';
import { InvoiceComponent } from './invoice/invoice.component';
import { EcommerceRoutes } from './ecommerce.routing';

@NgModule({
	declarations: [ShopComponent, CardComponent, CartComponent, CheckoutComponent, InvoiceComponent],
	imports: [
		CommonModule,
		NgAisModule.forRoot(),
		RouterModule.forChild(EcommerceRoutes),
		FlexLayoutModule,
		MatFormFieldModule,
		MatIconModule,
		MatCardModule,
		MatInputModule,
		MatTableModule,
		MatButtonModule,
		MatCheckboxModule,
		MatGridListModule,
		ReactiveFormsModule,
		FormsModule,
		MatSelectModule,
      TextMaskModule,
      MatDividerModule,
		WidgetComponentModule,
		TranslateModule
	]
})
export class EcommerceModule { }
