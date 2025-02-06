import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const teamSchema = new Schema(
  {
    admins: [{ type: Schema.Types.ObjectId, ref: "users" ,required:true}],
    projects: [{ type: Schema.Types.ObjectId, ref: "projects" ,required:true}],
    memberCount: {
      type: Number,
    },
  },
  { timestamps: true }
);

teamSchema.plugin(mongooseAggregatePaginate);
export const Team = mongoose.model("teams", teamSchema);
