import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    console.log("creating a task")
}

export async function GET(req:NextRequest) {
    console.log("getting all tasks")
}