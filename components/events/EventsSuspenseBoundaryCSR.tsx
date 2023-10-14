"use client"
import React, { Suspense } from 'react'
import EventCard from '@/components/events/EventCard'
import { Event, UserEvent } from '@prisma/client'
import { useGetUserEvents } from '@/hooks/react-query/userEvent'
import { useGetEventFormFilteredEvents } from '@/hooks/events/hooks'

export default function EventsSuspenseBoundaryCSR({ form } : { form: any}) {

    // Hooks
    const { events } = useGetEventFormFilteredEvents(form)
    const { data: userEvents } = useGetUserEvents()
    const userEventsArray = userEvents as UserEvent[]

    // Loading...
    if (!events || !userEventsArray) return <>Loading...</>

    return <section className='flex flex-row flex-wrap gap-10'>
        {
            Boolean(events?.length !== 0) ? events?.map((event: Event) => {
                return <EventCard key={event.id} event={event} userEvents={userEventsArray} />
            }) : "No events matched your search"
        }
    </section>
}