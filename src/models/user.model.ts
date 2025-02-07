import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";



interface decodedToken {
  _id: string;
  email: string;
  username: string;
}


const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
const accessTokenExpiry = Number(process.env.ACCESS_TOKEN_EXPIRY);
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET as string;
const refreshTokenExpiry = Number(process.env.REFRESF_TOKEN_EXPIRY);



const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: [8, "password too short"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    let salt = bcrypt.genSaltSync(128);
    this.password = bcrypt.hashSync(this?.password, salt);
  }
  next();
});

userSchema.methods.generateAccessToken = function () {
  return sign(
    {
      _id: this.id,
      email: this.email,
      username: this.username,
    },
    accessTokenSecret,
    { expiresIn: accessTokenExpiry }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return sign(
    {
      _id: this._id,
    },
    refreshTokenSecret,
    { expiresIn: refreshTokenExpiry }
  );
};

userSchema.plugin(mongooseAggregatePaginate);
const User = mongoose.model("users", userSchema);

export { User, decodedToken };
