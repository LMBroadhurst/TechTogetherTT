import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export enum BOOKMARK_ROUTE {
    GET_BOOKMARKED_STATUS = 'GET_BOOKMARKED_STATUS',
    TOGGLE_BOOKMARKED_STATUS = 'TOGGLE_BOOKMARKED_STATUS'
}

export async function POST(request: NextRequest) {

    // Basically get a 'type' of what function we should run
    const body = await request.json()
    const { type } = body
    console.log(body)

    switch (type) {
        case BOOKMARK_ROUTE.GET_BOOKMARKED_STATUS:
            return getBookmarkedStatus()

        case BOOKMARK_ROUTE.TOGGLE_BOOKMARKED_STATUS:
            return toggleBookmarkedStatus()

        default:
            return NextResponse.json({
                status: 500,
                message: 'Invalid route type'
            })
    }
}

async function getBookmarkedStatus() {

    const userEvent = await prisma.userEvent.findUnique({
        where: {
            id: '',
            userId: '',
            eventId: ''
        }
    })

    const isBookmarked = userEvent?.isBookmarked

    return NextResponse.json({
        status: 200,
        isBookmarked
    })
}

async function toggleBookmarkedStatus() {

    const userEvent = await prisma.userEvent.findUnique({
        where: {
            id: '',
            userId: '',
            eventId: ''
        }
    })

    // Parse the isBookmarked status into a boolean with zod...
    // Flip the boolean with !
    // Set the value of the isBookmarked status to !isBookmarked
    const isBookmarked = userEvent?.isBookmarked

    return NextResponse.json({
        status: 200,
        isBookmarked: 'Yes sirrrreeeee'
    })
}