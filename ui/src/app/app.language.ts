import { Injectable } from '@angular/core';

@Injectable()
export class LanguageUtil {
    constructor(private isArabic: Boolean) { }
    label_ActivityName = this.isArabic ? "الافراد" : "Activity Name"; 
    //label_ActivityName = this.isArabic ? "الافراد" : "Activity Name"; 
    //label_ActivityName = this.isArabic ? "الافراد" : "Activity Name"; 
    //label_ActivityName = this.isArabic ? "الافراد" : "Activity Name"; 
}