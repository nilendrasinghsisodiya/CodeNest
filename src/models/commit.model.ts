import { model, Schema, Types } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
// not yet decided

const commitSchema = new Schema(
  {
    owner: { type: Types.ObjectId, ref: "users", required: true },
    project: { type: Types.ObjectId, ref: "projects", required: true },
    documents: [{ type: Types.ObjectId, ref: "doucments", required: true }],
    status: {
      type: String,
      enum: ["pending", "failed", "approved"],
      default: "pending",
    },
  },
  { timestamps: true }
);

commitSchema.plugin(mongooseAggregatePaginate);
export const commit = model("commits", commitSchema);
