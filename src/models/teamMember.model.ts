import { model, Schema, Types } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const teamMemberSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: "users", required: true },
    team: { type: Types.ObjectId, ref: "teams", required: true },
    role: {
      type: String,
      required: true,
      enum: ["admin", "developer", "manager", "member", "tester"],
    },
    contributions:{type:Number}
  },
  { timestamps: true }
);

teamMemberSchema.plugin(mongooseAggregatePaginate);

export const teamMember = model("teamMembers", teamMemberSchema);
