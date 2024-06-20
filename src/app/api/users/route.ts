import connectToMongoose from "@/lib/connectTo Db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";

export async function POST(request:NextRequest) {
    try {
        const {name, email} = await request.json()
        await connectToMongoose()
        await User.create({name, email})
        console.log({name, email})
        return NextResponse.json({message: 'user signed in successfully'})
    }
    catch(error) {
        console.log(error)
    }
    
}