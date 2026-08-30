import { NextResponse } from "next/server"; import { connectDB } from "@/lib/mongodb"; import { Testimonial } from "@/models/Testimonial";
export async function GET(){await connectDB();return NextResponse.json(await Testimonial.find().sort({createdAt:-1}).lean())}
export async function POST(req:Request){await connectDB();return NextResponse.json(await Testimonial.create(await req.json()),{status:201})}
export async function PATCH(req:Request){const {id,...data}=await req.json();await connectDB();return NextResponse.json(await Testimonial.findByIdAndUpdate(id,data,{new:true}))}
export async function DELETE(req:Request){const {id}=await req.json();await connectDB();await Testimonial.findByIdAndDelete(id);return NextResponse.json({success:true})}
