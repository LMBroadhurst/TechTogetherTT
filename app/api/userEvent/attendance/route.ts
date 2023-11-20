import prisma from "@/prisma/db"
import { ATTENDING_STATUS } from "@/utils/enums"
import { NextRequest, NextResponse } from "next/server"
import { ATTENDANCE_ROUTE } from "./model"

export async function POST(request: NextRequest) {

    // Basically get a 'type' of what function we should run
    const body = await request.json()
    const { type, userEventId } = body
    console.log(body)

    switch (type) {
        case ATTENDANCE_ROUTE.TOGGLE_ATTENDING_STATUS:
            return toggleAttendingStatus(userEventId)

        default:
            return NextResponse.json({
                status: 500,
                message: 'Invalid route type'
            })
    }
}

async function toggleAttendingStatus(userEventId: string) {

    const userEvent = await prisma.userEvent.findUnique({
        where: {
            id: userEventId
        }
    })

    if (!userEvent) {
        return NextResponse.json({
            status: 500,
            message: 'UserEvent does not exist'
        })
    }

    const attendanceStatus = userEvent.attendanceStatus

    let updatedAttendanceStatus: string = ATTENDING_STATUS.ATTENDING

    if (attendanceStatus === ATTENDING_STATUS.ATTENDING) {
        updatedAttendanceStatus = ATTENDING_STATUS.NOT_ATTENDING
    }


    const updatedUserEvent = await prisma.userEvent.update({
        where: {
            id: userEventId
        },
        data: {
            attendanceStatus: updatedAttendanceStatus
        }
    })

    return NextResponse.json({
        status: 200,
        updatedUserEvent
    })
}