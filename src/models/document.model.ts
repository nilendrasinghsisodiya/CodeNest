import {model,Schema,Types} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const documentSchema = new Schema({
    contentType:{type:String},  // language .ext, type,
    size:{type:Number},
    url:{type:String,required:true}, // fileUrl cloud paths
    partOf:{type:Types.ObjectId,ref:"projects",required:true},
},{timestamps:true});

documentSchema.plugin(mongooseAggregatePaginate);

export const document = model("documents",documentSchema);
