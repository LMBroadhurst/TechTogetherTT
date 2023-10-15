import { zodCreateEventFormRequest } from "@/utils/zod";
import { Event, PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient()

export async function GET() {
    
    const allEvents = await prisma.event.findMany()
    return NextResponse.json({
        status: 200,
        events: allEvents
    })
}

export async function PUT(request: NextRequest) {
    
    // filtered by form
    const payload = await request.json()
    const { cityCountry, name } = payload.data

    const filteredEvents = await prisma.event.findMany({
        where: {
            name: {
                contains: name
            },
            cityCountry: {
                contains: cityCountry
            },
        } 
    })

    return NextResponse.json({
        events: filteredEvents
    })
     
}

export async function POST(request: NextRequest) {

    console.log(request)
    const event = request.body.json() as Event
    const { name, cityCountry, organiserEmail, venue, localDateTime, maxAttendance } = event

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
            cityCountry: cityCountry,
            venue: venue,
            maxAttendance: maxAttendanceParsed,
            organiserEmail: organiserEmail
        }
    })

    return NextResponse.json({
        status: 200,
        newEvent
    })
}