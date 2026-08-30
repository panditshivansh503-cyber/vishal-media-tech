import { NextResponse } from "next/server"; import { connectDB } from "@/lib/mongodb"; import { Portfolio } from "@/models/Portfolio";
export async function GET(){await connectDB();return NextResponse.json(await Portfolio.find().sort({createdAt:-1}).lean())}
export async function POST(req:Request){await connectDB();return NextResponse.json(await Portfolio.create(await req.json()),{status:201})}
export async function PATCH(req:Request){const {id,...data}=await req.json();await connectDB();return NextResponse.json(await Portfolio.findByIdAndUpdate(id,data,{new:true}))}
export async function DELETE(req:Request){const {id}=await req.json();await connectDB();await Portfolio.findByIdAndDelete(id);return NextResponse.json({success:true})}
