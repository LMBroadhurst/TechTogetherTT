import { Event, PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req: any, res: any) {
    console.log(req.json())
    const allEvents = await prisma.event.findMany()

    return NextResponse.json(allEvents)
}

export async function POST(req: any, res: any) {

    const event = await req.json()
    const { name, location, maxAttendance } = event
    console.log(event)

    const newEvent = await prisma.event.create({
        data: {
            id: 0,
            name: name,
            localDateTime: new Date(),
            location: location,
            // @ts-ignore
            maxAttendance: parseInt(maxAttendance)
        }
    })

    console.log(newEvent)
    return NextResponse.json(newEvent)
}