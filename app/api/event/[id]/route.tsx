import prisma from "@/prisma/db";
import { Event } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const pathname = request.nextUrl.pathname
    const eventId = pathname.split("/api/event/")[1];

    const event = await prisma.event.findFirst({
        where: {
            id: eventId
        },
    })

    return NextResponse.json({
        status: 200,
        event: event
    })
}