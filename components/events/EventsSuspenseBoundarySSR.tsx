import React, { Suspense, useCallback, useEffect, useState } from 'react'
import EventCard from '@/components/events/EventCard'
import { Event, UserEvent } from '@prisma/client'
import { useGetUserEvents } from '@/hooks/react-query/userEvent'
import { useRouter } from 'next/router'
import Spinner from '@/components/global/Spinner'
import NoEventsFallback from './NoEventsFallback'

export default async function EventsSuspenseBoundarySSR() {

    // SSR rendering
    // TODO: Surely can abstract this code into a simpler format...
    const events = await fetch("http:/localhost:3000/api/event")
    const resolvedData = await events.json()
    const eventsArray = resolvedData.events as Event[]
    console.log(eventsArray.length)

    const userEvents = await fetch("http:/localhost:3000/api/userEvent")
    const resolvedUserEvents = await userEvents.json()
    const userEventsArray = resolvedUserEvents.userEvents as UserEvent[]

    if (!events || !userEvents) return <Spinner />

    return <section className='flex flex-row flex-wrap gap-10'>
        {
            eventsArray?.length !== 0 ? eventsArray?.slice(0, 19).map((event: Event) => {
                return <EventCard key={event.id} event={event} userEvents={userEventsArray} />
            }) : <NoEventsFallback />
        }
    </section>
}
