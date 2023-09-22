import { Event, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {

    const pathname = request.nextUrl.pathname
    const eventId = pathname.split("/api/event/")[1];

    const event = await prisma.event.findFirst({
        where: {
            id: parseInt(eventId)
        },
    })

    console.log(event)
    return NextResponse.json(event)
}