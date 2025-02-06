import { model, Schema, Types } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const projectSchema = new Schema(
  {
    admins: [{ type: Types.ObjectId, ref: "users" }],
    title: { type: String, required: true },
    version: { type: String },
    description: { type: String, required: true },
    buildInfo: { type: String, required: true },
    dependencies: [{ type: String }],
    structure: { type: Types.ObjectId, ref: "structures" },
    stack:[{type:String}]
  },
  { timestamps: true }
);
projectSchema.plugin(mongooseAggregatePaginate);
export const project = model("projects", projectSchema);
