
import { User } from "../models/user.model";
import * as Express from "express"

declare module  "express-serve-static-core" {
    interface Request {
        user?: UserDocument; // `user` is optional to prevent errors in routes where it's not set
    }
}