import { Event, UserEvent } from "@prisma/client";
import { useSession } from "next-auth/react";

export function useFilteredUserEventsAndEventsForUser(events: Event[], userEvents: UserEvent[]) {

    const { data: user } = useSession()

    if (!user) return {
        events,
        userEvents
    }

    const filteredUserEventsForUser = userEvents.filter((userEvent: UserEvent) => userEvent.userId === user.id)
    const filteredUserEventsForUserIds = filteredUserEventsForUser.map((userEvent: UserEvent) => userEvent.eventId)

    const filteredEventsForUser = events.filter((event: Event) => filteredUserEventsForUserIds.includes(event.id))

    return {
        events: filteredEventsForUser,
        userEvents: filteredUserEventsForUser
    }
}