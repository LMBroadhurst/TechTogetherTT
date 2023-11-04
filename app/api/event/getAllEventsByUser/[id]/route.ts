import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const pathname = request.nextUrl.pathname
    const userEmail = pathname.split("/api/event/getAllEventsByUser")[1];

    const userEventsFilteredByUserEmail = await prisma.userEvent.findMany({
        where: {
            user: {
                email: userEmail
            }
        }
    })

    const resultingEventIds = userEventsFilteredByUserEmail.map(ue => ue.eventId)

    const events = await prisma.event.findMany({
        where: {
            id: {in: resultingEventIds}
        }
    })

    return NextResponse.json({events})
}