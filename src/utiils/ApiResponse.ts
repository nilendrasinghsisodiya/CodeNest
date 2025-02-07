type ApiResponseType = {
    statusCode:number;
    data:any;
    message:string;
}

export class ApiResponse{
    statusCode:number;
    data:any;
    message:string;
    
    constructor({statusCode,data,message}:ApiResponseType){
        this.statusCode = statusCode;
        this.data = data;
        this.message= message;
    }
};