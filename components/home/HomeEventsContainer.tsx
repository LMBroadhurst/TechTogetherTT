import { Event, UserEvent } from "@prisma/client"
import EventCardCSR from "./EventCard"

export default async function HomeEventsContainer() {

    const eventResponse = await fetch(process.env.URL + "/api/event")
    const resolvedData = await eventResponse.json()
    const events = resolvedData.events as Event[]

    const userEventResponse = await fetch(process.env.URL + "/api/userEvent")
    const resolvedUserEvents = await userEventResponse.json()
    const userEvents = resolvedUserEvents.userEvents as UserEvent[]

    return <section className="flex flex-row gap-10">
        {
            events && events.length > 0 && events.map((event) => {
                return <EventCardCSR key={event.id} event={event} userEvents={userEvents} />
            })
        }
    </section>
}