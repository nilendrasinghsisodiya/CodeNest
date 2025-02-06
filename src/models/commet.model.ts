import { model,Schema,Types } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const commentSchema = new Schema({
    owner: {
        type: Types.ObjectId,
        ref: "users",  
    },
    target: {
        type: Types.ObjectId,
        required: true,  
        refPath: 'targetModel', 
    },
    targetModel: {
        type: String,
        required: true,
        enum: ['projects', 'comments', 'documents'], 
    },
    content: {
        type: String,
        required: true, 
    },
}, {
    timestamps: true, 
});

commentSchema.plugin(mongooseAggregatePaginate);

commentSchema.virtual('targetDocument', {
    ref: function() {
        return this.targetModel;  
    },
    localField: 'target', 
    foreignField: '_id', 
    justOne: true,  
});


export const Comment = model('Comment', commentSchema);


