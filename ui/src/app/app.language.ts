import { Injectable } from '@angular/core';

@Injectable()
export class LanguageUtil  {
    constructor(public isArabic: Boolean) {
    }
    label_ActivityName: String=this.isArabic ? "الافراد" : "Activity Name"
}

