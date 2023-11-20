import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

enum BOOKMARK_ROUTE {
    GET_BOOKMARKED_STATUS = 'GET_BOOKMARKED_STATUS',
    TOGGLE_BOOKMARKED_STATUS = 'TOGGLE_BOOKMARKED_STATUS'
}

export async function POST(request: NextRequest) {

    const body = await request.json()
    const { type, userEventId } = body

    switch (type) {
        case BOOKMARK_ROUTE.TOGGLE_BOOKMARKED_STATUS:
            return toggleBookmarkedStatus(userEventId)

        default:
            return NextResponse.json({
                status: 500,
                message: 'Invalid route type'
            })
    }
}


async function toggleBookmarkedStatus(userEventId: string) {

    const userEvent = await prisma.userEvent.findUnique({
        where: {
            id: userEventId
        }
    })

    const updatedUserEvent = await prisma.userEvent.update({
        where: {
            id: userEventId
        },
        data: {
            isBookmarked: !userEvent?.isBookmarked
        }
    })

    return NextResponse.json({
        updatedUserEvent
    })
}