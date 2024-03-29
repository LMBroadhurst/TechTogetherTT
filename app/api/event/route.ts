import prisma from "@/prisma/db";
import { zodCreateEventFormRequest } from "@/utils/zod";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {

    const allEvents = await prisma.event.findMany({})
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

    const payload = await request.json()
    console.log(payload)

    let event = payload.createEventFormValues
    const { maxAttendance } = event

    event = {
        ...event,
        maxAttendance: parseInt(maxAttendance),
        organiserEmail: 'lewis1broadhurst@gmail.com'
    }

    // Form Validation
    zodCreateEventFormRequest.parse(event)

    const newEvent = await prisma.event.create({
        data: event
    })

    return NextResponse.json({
        status: 200,
        newEvent
    })
}