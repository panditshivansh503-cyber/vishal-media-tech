import { NextResponse } from "next/server"; import { connectDB } from "@/lib/mongodb"; import { Inquiry } from "@/models/Inquiry";
export async function GET(){await connectDB();return NextResponse.json(await Inquiry.find().sort({createdAt:-1}).lean())}
export async function PATCH(req:Request){const {id,...data}=await req.json();await connectDB();return NextResponse.json(await Inquiry.findByIdAndUpdate(id,data,{new:true}))}
export async function DELETE(req:Request){const {id}=await req.json();await connectDB();await Inquiry.findByIdAndDelete(id);return NextResponse.json({success:true})}
