import { Couple as ICouple } from "@/interface/Couple";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const coupleSchema = new Schema<ICouple>({
  brideName: String,
  brideEmail: String,
  groomName: String,
  groomEmail: String,
  special: String,
  bridalShowDate: Date,
  contacted: { type: Boolean, default: false }
});

const Couple = mongoose.models.couple || mongoose.model("couple", coupleSchema);

export default Couple;
