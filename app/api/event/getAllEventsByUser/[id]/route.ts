import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, UserEvent } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {

    const pathname = request.nextUrl.pathname
    const userId = pathname.split("/api/event/getAllEventsByUser")[1];

    const {data: userEvents, status} = await axios.get(`api/userEvent`)

    if (status !== 200) throw new Error("Failed to retrieve User Events")
    const filteredUserEventIdsByUserId: UserEvent[] = userEvents.filter((ue: UserEvent) => ue.userId === userId)
    const resultingEventIds = filteredUserEventIdsByUserId.map((ue: UserEvent) => ue.eventId)

    // console.log(resultingEventIds)

    const events = await prisma.event.findMany({
        where: {
            // id: {in: resultingEventIds}
        }
    })

    return NextResponse.json({events})
}