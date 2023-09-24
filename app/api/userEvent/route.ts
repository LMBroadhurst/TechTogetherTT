import { ATTENDING_STATUS } from "@/utils/enums";
import { PrismaClient, UserEvent } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {

    // if (!request.bodyUsed) throw new Error ("Request needs to include a body")

    const {userId, eventId} = await request.json()

    const userEvent = await prisma.userEvent.create({
        data: {
            userId: userId,
            eventId: eventId,
            attendanceStatus: ATTENDING_STATUS.ATTENDING
        }
    })

    return NextResponse.json({
        status: 200,
        userEvent: userEvent, 
    })
}

export async function GET() {
    const userEvents = await prisma.userEvent.findMany()
    return NextResponse.json({
        userEvents: userEvents
    })
}

export async function DELETE(request: NextRequest) {

    const {userId, eventId} = await request.json()

    const userEvents = await prisma.userEvent.deleteMany({
        where: {
            userId: userId,
            eventId: eventId
        }
    })

    console.log(userEvents)

    return NextResponse.json({
        status: 200,
        msg: 'Deleted userEvent'
    })
}