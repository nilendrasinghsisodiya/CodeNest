import { model, Schema, Types } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const structureSchema = new Schema(
  {
    project: { type: Types.ObjectId, ref: "projects", required: true },
    struct: { type: Object, requird: true },
  },
  { timestamps: true }
);

export const stucture = model("structures", structureSchema);
