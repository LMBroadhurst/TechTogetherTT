import { Event, PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient()

// TODO: Zod form data type checking

export async function GET(request: NextRequest) {

    switch (request.bodyUsed) {
        case false:
            const allEvents = await prisma.event.findMany()
            return NextResponse.json({
                status: 200,
                events: allEvents
            })

        case true:
            console.log(true)
    }
    
}

export async function POST(request: NextRequest) {

    const event = await request.json()
    const { name, location, localDateTime, maxAttendance } = event

    // Need to validate this code with zod...
    const newEvent = await prisma.event.create({
        data: {
            name: name,
            localDateTime: new Date(localDateTime),
            location: location,
            // @ts-ignore
            maxAttendance: parseInt(maxAttendance)
        }
    })

    console.log(newEvent)
    return NextResponse.json({
        status: 200,
        newEvent
    })
}