import { PrismaClient, PersonEvent } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {

    const event = await request.json()
    const { name, location, maxAttendance } = event

    // Need to validate this code...
    const newEvent = await prisma.event.create({
        data: {
            name: name,
            localDateTime: new Date(),
            location: location,
            // @ts-ignore
            maxAttendance: parseInt(maxAttendance)
        }
    })

    // console.log(newEvent)
    return NextResponse.json(newEvent)

    // or redirect to newly created event... ?
    // redirect('/')
}