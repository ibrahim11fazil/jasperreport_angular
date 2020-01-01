import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { TradeDialogComponent } from '../../widget-component/pop-up/trade-dialog/trade-dialog.component';
import { AddNewUserComponent } from '../../widget-component/pop-up/add-new-user/add-new-user.component';
import { EditNewUserComponent } from '../../widget-component/pop-up/edit-new-user/edit-new-user.component'; 
import { DeleteDialogComponent } from '../../widget-component/pop-up/delete-dialog/delete-dialog.component';
import { VideoPlayerComponent } from '../../widget-component/pop-up/video-player/video-player.component';
import { PaymentMessageComponent } from '../../widget-component/pop-up/payment-message/payment-message.component';
import { AddNewClientComponent } from '../../widget-component/pop-up/add-new-client/add-new-client.component';
import { EditNewClientComponent } from '../../widget-component/pop-up/edit-new-client/edit-new-client.component';
import { ChangePasswordComponent } from 'app/pop-up/change-password/change-password.component';

@Injectable({
	providedIn: 'root'
})

export class CoreService {
	
	sidenavOpen : boolean = true;
	sidenavMode : string = "side";
	horizontalStatus : boolean = false;
	horizontalSizeStatue : boolean =  false;
	projectDetailsContent : any;
	collapseSidebar : boolean = false;

	constructor(private matDialog : MatDialog,
					private http : HttpClient){
	}

	//addNewUserDailog function is used to open Add New user Dialog Component. 
	addNewUserDailog(){
		let dialogRef : MatDialogRef<AddNewUserComponent>;
		dialogRef = this.matDialog.open(AddNewUserComponent);
		
		return dialogRef.afterClosed();
	}

	//addNewClientDialog function is used to open Add new client Dialog Component. 
	addNewClientDialog(){
		let dialogRef : MatDialogRef<AddNewClientComponent>;
		dialogRef = this.matDialog.open(AddNewClientComponent);
		
		return dialogRef.afterClosed();
	}

	//editList function is used to open Edit Dialog Component. 
	editList(data){
		let dialogRef : MatDialogRef<EditNewUserComponent>;
		dialogRef =this.matDialog.open(EditNewUserComponent);
		dialogRef.componentInstance.data = data;
		
		return dialogRef.afterClosed();
	}

	//editClientList function is used to open Edit Client Dialog Component. 
	editClientList(data){
		let dialogRef : MatDialogRef<EditNewClientComponent>;
		dialogRef =this.matDialog.open(EditNewClientComponent);
		dialogRef.componentInstance.data = data;
		
		return dialogRef.afterClosed();
	}

	//deleteDiaglog function is used to open the Delete Dialog Component. 
	deleteDialog( data : string ) {
		let dialogRef : MatDialogRef<DeleteDialogComponent>;
		dialogRef = this.matDialog.open(DeleteDialogComponent);
		dialogRef.componentInstance.data = data;
		
		return dialogRef.afterClosed();
	}

	//get Json file for courses module.
	getCourses () {
		return this.http.get('assets/data/courses.json').map(response => response);
	}

	//videoPlayerDialog method is used to open a video player dialog component.
	videoPlayerDialog(video : string){
		let dialogRef : MatDialogRef<VideoPlayerComponent>;
		dialogRef = this.matDialog.open(VideoPlayerComponent);

		dialogRef.componentInstance.video = video;
		return dialogRef.afterClosed();
	}

	//paymentDialog method is used to open a payment dialog component.
	paymentDialog(message : string) {
		let dialogRef : MatDialogRef<PaymentMessageComponent>;
		dialogRef = this.matDialog.open(PaymentMessageComponent);
		
		dialogRef.componentInstance.paymentMessage = message;
		return dialogRef.afterClosed();
	}

	//showTradeHistory method is used to open a history dialog component.
	showTradeHistory(data) {
		let dialogRef : MatDialogRef<TradeDialogComponent>;
		dialogRef = this.matDialog.open(TradeDialogComponent);

		dialogRef.componentInstance.data = data;
		return dialogRef.afterClosed();
	}

	//getProjectContent method is used to get the  Json file for crm project component.
	getProjectContent () {
		return this.http.get('assets/data/crm_projects.json').map(response => response);
	}

	//getCoinList method is used to get the coin list section data from json file
	getCoinList (){
		return this.http.get('assets/data/coin_list.json').map(response => response);
	}

	//getMarketCap method is used to get the market cap  data from json file
	getMarketCap(){
		return this.http.get('assets/data/market_cap.json').map(response => response);
	}

	//getTickerData method is used to get the ticker data from json file
	getTickerData(){
		return this.http.get('assets/data/ticker.json').map(response => response);
	}

	//getTableTabContent method is used to get the table tab data from json file
	getTableTabContent(){
		return this.http.get('assets/data/table_tab_list.json').map(response => response);
	}

	//getCrmStatsCardContent method is used to get the Crm stats card data from json file
	getCrmStatsCardContent(){
		return this.http.get('assets/data/crm_stats_card.json').map(response => response);
	}

	//getCryptoStatsCardContent method is used to get the CRYPTO stats card data from json file
	getCryptoStatsCardContent(){
		return this.http.get('assets/data/crypto_stats_card.json').map(response => response);
	}

	//getSafeTradeContent method is used to get the safe trade data from json file
	getSafeTradeContent(){
		return this.http.get('assets/data/safe_trade.json').map(response => response);
	}

	//getExchangeStatisticsContent method is used to get the Exchange Statistics data from json file
	getExchangeStatisticsContent(){
		return this.http.get('assets/data/exchange_statistics.json').map(response => response);
	}


	changePasswordDlg(){
		let dialogRef : MatDialogRef<ChangePasswordComponent>;
		  dialogRef = this.matDialog.open(ChangePasswordComponent);
		  
		  return dialogRef.afterClosed();
	 }
}