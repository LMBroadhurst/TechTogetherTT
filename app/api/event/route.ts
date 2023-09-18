import { Event, PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET() {
    const allPeople = await prisma.event.findMany()

    return NextResponse.json(allPeople)
}

export async function POST(req: any, res: any) {

    const x = await req.json()    
    console.log(x)

    // const newPerson = await prisma.event.create({
    //     data: {
    //         id: 0,
    //         name: name,
    //         localDateTime: new Date(),
    //         location: location,
    //         maxAttendance: maxAttendance
    //     }
    // })

    return NextResponse.json(x)
}