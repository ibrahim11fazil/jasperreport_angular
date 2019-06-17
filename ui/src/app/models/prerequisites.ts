export class Prerequisites {

    public prerequisitesId:Number;
    public description:String;

    constructor(description:String)
    {
        this.description=description;
    }
}

export interface ResponsePrerequisites{
    status: Boolean;
    code:number;
    message:String;
    data: Prerequisites[];
}

