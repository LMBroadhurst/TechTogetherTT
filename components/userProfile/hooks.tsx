import { Event, UserEvent } from "@prisma/client";
import { useSession } from "next-auth/react";

export function useFilteredUserEventsAndEventsForUser(events: Event, userEvents: UserEvent[]) {

    const { data: user } = useSession()

    if (!user) return {
        events,
        userEvents
    }

    const filteredUserEventForUser = userEvents.find((userEvent: UserEvent) => userEvent.userId === user.id)

    return filteredUserEventForUser
}