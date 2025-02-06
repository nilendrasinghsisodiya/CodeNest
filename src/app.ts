import Express,{ Request, Response} from "express"
export const app = Express();
app.get("/",(req:Request,res:Response)=>{
    res.send("hello from realtime code editor ts");
})



