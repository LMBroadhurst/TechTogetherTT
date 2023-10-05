import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, UserEvent } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {

    const pathname = request.nextUrl.pathname
    const userEmail = pathname.split("/api/event/getAllEventsByUser")[1];

    const userEventsFilteredByUserId = await prisma.userEvent.findMany({
        where: {
            user: {
                email: userEmail
            }
        },

    })

    const resultingEventIds = userEventsFilteredByUserId.map(ue => ue.eventId)

    const events = await prisma.event.findMany({
        where: {
            id: {in: resultingEventIds}
        }
    })

    return NextResponse.json({events})
}