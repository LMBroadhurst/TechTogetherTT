import { ATTENDING_STATUS } from "@/utils/enums";
import { UserEvent } from "@prisma/client";
import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest) {

    // Basically get a 'type' of what function we should run
    const requestType = request.body
    const dummyRT: string = ''

    switch (dummyRT) {
        case 'GET_BOOKMARKED_STATUS':
            return getBookmarkedStatus()

        case 'TOGGLE_BOOKMARKED_STATUS':
            return 
    }

    return NextResponse.json({
        status: 200,
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
        isBookmarked
    })
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