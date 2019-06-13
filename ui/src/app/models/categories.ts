export class Categories {
    categoryId:Number
    description:String
constructor(description:String) {
 //this.guidelineId=guidelineId;
    this.description=description;
}
}

export interface ResponseCategories{
    status: Boolean;
    code:number;
    message:String;
    data: Categories[];
}
