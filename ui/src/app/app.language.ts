import { Injectable } from '@angular/core';

@Injectable()
export class LanguageUtil  {
    constructor(public isArabic: Boolean) {
    }

    //Activity Page
    activity_title:String=this.isArabic ? "Activity1 " : "Activity"
    label_ActivityName: String=this.isArabic ? "الافراد" : "Activity Name"
    activity_message:String=this.isArabic ? "You must enter the activity Name1" : "You must enter the activity Name"
    label_Id: String=this.isArabic ? " Id1 ": "Id"
    label_delete: String=this.isArabic ? "Delete1 " : "Delete"


    //General
    btn_search: String=this.isArabic ? "Search1" : "Search"
    btn_save: String=this.isArabic ? "Save1" : "Save"
    btn_delete: String=this.isArabic ? "Delete1" : "Delete"

    //Titles

}

