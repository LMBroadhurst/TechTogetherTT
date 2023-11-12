import prisma from "@/prisma/db";
import { ATTENDING_STATUS } from "@/utils/enums";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    const { userId, eventId } = await request.json()

    const userEvent = await prisma.userEvent.create({
        data: {
            userId: userId,
            eventId: eventId,
            attendanceStatus: ATTENDING_STATUS.NOT_ATTENDING,
            isBookmarked: false,
        }
    })

    return NextResponse.json({
        status: 200,
        userEvent: userEvent,
    })
}

export async function GET() {
    const userEvents = await prisma.userEvent.findMany({})
    return NextResponse.json({
        status: 200,
        userEvents: userEvents
    })
}

export async function DELETE(request: NextRequest) {

    const { userId, eventId } = await request.json()

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