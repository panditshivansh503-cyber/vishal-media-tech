import { Schema, models, model } from "mongoose";
const schema = new Schema({
  name:String,company:String,image:String,review:String,rating:{type:Number,min:1,max:5}
},{timestamps:true});
export const Testimonial = models.Testimonial || model("Testimonial",schema);
