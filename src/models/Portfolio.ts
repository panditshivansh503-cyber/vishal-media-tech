import { Schema, models, model } from "mongoose";
const schema = new Schema({
  clientName:String,industry:String,thumbnail:String,services:[String],
  result:String,category:{type:String,enum:["Ads","SEO","Website","Social Media"]}
},{timestamps:true});
export const Portfolio = models.Portfolio || model("Portfolio",schema);
