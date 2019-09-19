import { Injectable } from '@angular/core';

@Injectable()
export class LanguageUtil  {
    constructor(public isArabic: Boolean) {
    }

    //Activity Page
    label_ActivityName: String=this.isArabic ? "الافراد" : "Activity Name"


    //General
    btn_search: String=this.isArabic ? "الافر" : "Search"


    //Titles


}

