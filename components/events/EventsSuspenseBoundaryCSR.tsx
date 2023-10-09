"use client"
import React, { Suspense } from 'react'
import EventCard from '@/components/events/EventCard'
import { Event, UserEvent } from '@prisma/client'
import { useGetUserEvents } from '@/hooks/react-query/userEvent'
import { useGetEvents } from '@/hooks/react-query/event'
import { useFilterEventForm } from '@/hooks/events/hooks'

export default function EventsSuspenseBoundaryCSR() {

    // Hooks
    const { data: events } = useGetEvents()
    const { data: userEvents } = useGetUserEvents()
    const { form } = useFilterEventForm()

    const eventsArray = events?.events as Event[]
    const userEventsArray = userEvents as UserEvent[]

    // Loading...
    if (!eventsArray || !userEventsArray) return <>Loading...</>

    return <Suspense fallback={'Loading Events...'}>
        <section className='flex flex-row flex-wrap gap-10'>
            {
                Boolean(eventsArray.length !== 0) ? eventsArray?.map((event: Event) => {
                    return <EventCard key={event.id} event={event} userEvents={userEventsArray} />
                }) : "No events matched your search"
            }
        </section>
    </Suspense>   
}
