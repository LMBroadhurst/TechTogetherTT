import React from 'react'
import EventCard from '@/components/events/EventCard/EventCard'
import { Event, UserEvent } from '@prisma/client'
import Spinner from '@/components/global/Spinner'
import NoEventsFallback from './NoEventsFallback'
import axios from 'axios'

export default async function EventsSSR() {

    // SSR rendering
    // TODO: Surely can abstract this code into a simpler format...

    const { data: events, status } = await axios.get("http:/localhost:3000/api/event", {})
    const resolvedData = events?.events
    // const eventsArray = resolvedData as Event[]

    // const userEvents = await fetch("http:/localhost:3000/api/userEvent")
    // const resolvedUserEvents = await userEvents.json()
    // const userEventsArray = resolvedUserEvents.userEvents as UserEvent[]
    // console.log(eventsArray, userEventsArray)

    // if (!events || !userEvents) return <Spinner />

    console.log(resolvedData)

    return <></>

    // return <section className='flex flex-row flex-wrap gap-4'>
    //     {
    //         eventsArray?.length !== 0 ? eventsArray?.slice(0, 19).map((event: Event) => {

    //             const relatedUserEvents: UserEvent[] = userEventsArray.filter((userEvent: UserEvent) => userEvent.eventId === event.id)

    //             return <EventCard key={event.id} event={event} userEvents={relatedUserEvents} />

    //         }) : <NoEventsFallback />
    //     }
    // </section>
}
