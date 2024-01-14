"use client"
import { Event, UserEvent } from "@prisma/client"
import EventCardCSR from "./EventCard"
import { useSession } from "next-auth/react"
import { useGetEvents, useGetEventsRelatedToUser } from "@/react-query/event"

export default function HomeEventsContainer() {

    const { data: session } = useSession()
    const { data: events } = useGetEvents()
    const { data: userEvents } = useGetEventsRelatedToUser()

    return <section className="flex flex-col md:flex-row gap-10 flex-wrap">
        {
            events && events.length > 0 && events.map((event) => {
                return <EventCardCSR key={event.id} event={event} userEvents={userEvents} />
            })
        }
    </section>
}