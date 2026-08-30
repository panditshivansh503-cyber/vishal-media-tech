import { Schema, models, model } from "mongoose";

const schema = new Schema({
  clientName:{type:String,required:true}, companyName:{type:String,required:true},
  phone:String,email:String,servicePackage:String,startDate:Date,renewalDate:Date,
  status:{type:String,enum:["Active","Paused","Completed"],default:"Active"},notes:String
},{timestamps:true});
export const Client = models.Client || model("Client",schema);
