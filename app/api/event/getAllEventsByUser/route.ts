import { NextRequest } from "next/server";
import { useGetAllUserEvents } from "../../userEvent/hooks";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {

    const { userId } = await request.json()

    const { userEvents } = useGetAllUserEvents()
    const filteredUserEventIdsByUserId: string[] = userEvents.filter(ue => ue.userId === userId).map(ue => ue.eventId);

    const events = prisma.event.findMany({
        where: {
            id: {in: filteredUserEventIdsByUserId}
        }
    })

    console.log(events)
}