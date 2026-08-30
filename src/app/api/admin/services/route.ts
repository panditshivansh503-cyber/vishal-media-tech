import { NextResponse } from "next/server"; import { connectDB } from "@/lib/mongodb"; import { Service } from "@/models/Service";
export async function GET(){await connectDB();return NextResponse.json(await Service.find().sort({createdAt:-1}).lean())}
export async function POST(req:Request){await connectDB();return NextResponse.json(await Service.create(await req.json()),{status:201})}
export async function PATCH(req:Request){const {id,...data}=await req.json();await connectDB();return NextResponse.json(await Service.findByIdAndUpdate(id,data,{new:true}))}
export async function DELETE(req:Request){const {id}=await req.json();await connectDB();await Service.findByIdAndDelete(id);return NextResponse.json({success:true})}
