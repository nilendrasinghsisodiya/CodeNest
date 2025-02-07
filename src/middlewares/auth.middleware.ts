import jwt, { JwtPayload, verify } from "jsonwebtoken";

import { NextFunction, Request, Response } from "express";
import { decodedToken as decodedTokenType, User } from "../models/user.model";
import { ApiError } from "../utiils/ApiError";

const accessTokenSecret = process.env.ACESS_TOKEN_SECRET as string;

export const verifyJwt = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

   if (!token) {
      throw new ApiError(404, "Unauthorized Request");
   }
   const decodedToken: string | JwtPayload = jwt.verify(
      token,
      accessTokenSecret
   );
   if (typeof decodedToken === "object" && decodedToken !== null) {
      const user = await User.findById(decodedToken?._id);
      if (!user) {
         throw new ApiError(400, "user does not exist");
      }
      req.user = user;
   }
   next();
};
