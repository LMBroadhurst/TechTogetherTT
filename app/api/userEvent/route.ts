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
        }
    })

    return NextResponse.json({
        status: 200,
        userEvent: userEvent, 
    })
}