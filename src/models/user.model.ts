import mongoose,{Schema}from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique: true,
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true,
    }
    
},{timestamps:true});

userSchema.plugin(mongooseAggregatePaginate);
export const User = mongoose.model("users",userSchema);
