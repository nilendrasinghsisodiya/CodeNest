import cors from "cors"
import dotenv from "dotenv"
import {app} from "./app"
dotenv.config({path:"./.env"});

app.use(cors({origin:process.env.CORS_ORIGIN}));
const port = Number(process.env.PORT);
console.log(port,process.env.PORT);
const host = process.env.HOST as string;




try {
    app.on("error",(error:any)=>{
        console.log("ERROR::APPLICATION:: ", error.message);
    });
    app.listen(port,host,()=>{
        console.log( `server listen on port: ${process.env.PORT}\n\tvist: http://${process.env.HOST}:${process.env.PORT}`);
    })
} catch (error:any) {
    console.error("ERROR::APPLICATION:: something unexpected happened",error.message);

}

