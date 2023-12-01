import { Event, UserEvent } from "@prisma/client"
import EventCardCSR from "./EventCard"

export default async function HomeEventsContainer() {

    let eventResponse;
    let userEventResponse;

    try {

        eventResponse = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/event")
        userEventResponse = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/userEvent")

    } catch (error) {
        console.log(error)
    }

    const resolvedData = await eventResponse?.json()
    const events = resolvedData?.events as Event[]

    const resolvedUserEvents = await userEventResponse?.json()
    const userEvents = resolvedUserEvents?.userEvents as UserEvent[]

    return <section className="flex flex-col md:flex-row gap-10 flex-wrap">
        {
            events && events.length > 0 && events.map((event) => {
                return <EventCardCSR key={event.id} event={event} userEvents={userEvents} />
            })
        }
    </section>
}