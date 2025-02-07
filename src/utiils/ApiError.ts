type ApiErrorType={
    statusCode: number;
    message: string;
}

class ApiError extends Error {
    statusCode:number;
    constructor(statusCode:number, message:string){
        super();
        this.statusCode = statusCode;
        this.message = message;
        Object.setPrototypeOf(this, ApiError.prototype);
    }
};

export {ApiError};