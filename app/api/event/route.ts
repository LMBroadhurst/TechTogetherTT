import { zodCreateEventFormRequest } from "@/utils/zod";
import { Event, PrismaClient } from "@prisma/client";
import moment from "moment";
import { redirect } from "next/navigation";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient()

// TODO: Zod form data type checking

// get requests inherently cannot accept a payload
export async function GET() {
    
    // no filtration
    const allEvents = await prisma.event.findMany()
    return NextResponse.json({
        status: 200,
        events: allEvents
    })
}

export async function PUT(request: NextRequest) {
    
    // filtered by form
    const payload = await request.json()
    const { location, name } = payload.data

    const filteredEvents = await prisma.event.findMany({
        where: {
            name: {
                contains: name
            },
            location: {
                contains: location
            },
        } 
    })

    return NextResponse.json({
        events: filteredEvents
    })
     
}

export async function POST(request: NextRequest) {

    const event = await request.json()
    const { name, location, localDateTime, maxAttendance } = event

    // Form Validation
    const maxAttendanceParsed = parseInt(maxAttendance)
    zodCreateEventFormRequest.parse({
        ...event,
        maxAttendance: maxAttendanceParsed
    })

    const newEvent = await prisma.event.create({
        data: {
            name: name,
            localDateTime: localDateTime,
            location: location,
            maxAttendance: maxAttendanceParsed
        }
    })

    return NextResponse.json({
        status: 200,
        newEvent
    })
}