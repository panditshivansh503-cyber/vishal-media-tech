import { NextResponse } from "next/server"; import { connectDB } from "@/lib/mongodb"; import { Client } from "@/models/Client";
export async function GET(){await connectDB();return NextResponse.json(await Client.find().sort({createdAt:-1}).lean())}
export async function POST(req:Request){await connectDB();return NextResponse.json(await Client.create(await req.json()),{status:201})}
export async function PATCH(req:Request){const {id,...data}=await req.json();await connectDB();return NextResponse.json(await Client.findByIdAndUpdate(id,data,{new:true}))}
export async function DELETE(req:Request){const {id}=await req.json();await connectDB();await Client.findByIdAndDelete(id);return NextResponse.json({success:true})}
