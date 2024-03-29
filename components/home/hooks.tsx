import { Event, UserEvent } from "@prisma/client"
import { useSession } from "next-auth/react"

export function useFilterToRelevantUserEvent(event: Event, userEvents?: UserEvent[]) {
    const { data: session } = useSession()

    if (!session || !userEvents) return undefined

    const relevantUserEvent = userEvents.find((ue) => ue.eventId === event.id && ue.userId === session?.id)

    return relevantUserEvent
}