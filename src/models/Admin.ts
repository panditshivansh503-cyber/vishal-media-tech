import { Schema, models, model } from "mongoose";
const schema = new Schema({ email:{type:String,unique:true}, passwordHash:String },{timestamps:true});
export const Admin = models.Admin || model("Admin",schema);
