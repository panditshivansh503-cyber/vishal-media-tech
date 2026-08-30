import { Schema, models, model } from "mongoose";
const schema = new Schema({
  title:{type:String,required:true}, slug:{type:String,required:true,unique:true},
  description:String,icon:String,category:String,featured:{type:Boolean,default:true}
},{timestamps:true});
export const Service = models.Service || model("Service",schema);
