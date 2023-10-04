import { NextRequest } from "next/server";
import { useGetAllUserEvents } from "../../../userEvent/hooks";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {

    const pathname = request.nextUrl.pathname
    const userId = pathname.split("/api/event/getAllEventsByUser")[1];

    // const { userEvents } = useGetAllUserEvents()
    // const filteredUserEventIdsByUserId: string[] = userEvents.filter(ue => ue.userId === userId).map(ue => ue.eventId);

    const events = await prisma.event.findMany({
        where: {
            // id: {in: filteredUserEventIdsByUserId}
        }
    })

    console.log(events)
}