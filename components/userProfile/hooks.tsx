import { Event, UserEvent } from "@prisma/client";
import { useSession } from "next-auth/react";

export function useFilteredUserEventsAndEventsForUser(events: Event, userEvents: UserEvent[]): UserEvent | undefined {

    const { data: user } = useSession()

    if (!user || !userEvents) return undefined

    const filteredUserEventForUser = userEvents.find((userEvent: UserEvent) => userEvent.userId === user.id)

    return filteredUserEventForUser
}