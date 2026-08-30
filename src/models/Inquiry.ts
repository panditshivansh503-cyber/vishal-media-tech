import mongoose, { Schema, models, model } from "mongoose";

const schema = new Schema({
  fullName: { type:String, required:true, trim:true },
  mobile: { type:String, required:true, trim:true },
  email: { type:String, required:true, lowercase:true, trim:true },
  companyName: { type:String, default:"", trim:true },
  serviceRequired: { type:String, required:true },
  message: { type:String, required:true },
  status: { type:String, enum:["New","Contacted","Qualified","Proposal Sent","Converted","Lost"], default:"New" },
  source: { type:String, default:"Website" },
  assignedTo: { type:String, default:"" },
  notes: { type:String, default:"" }
}, { timestamps:true });

export const Inquiry = models.Inquiry || model("Inquiry", schema);
