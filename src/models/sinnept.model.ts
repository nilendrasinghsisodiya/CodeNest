import {model,Mongoose,Schema,Types} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const snippetSchema = new Schema({
    content:{type:String,required:true},
    title:{type:String,required:true},
    lang:{type:String,required:true}
});

export const snippet = model("snippets",snippetSchema);