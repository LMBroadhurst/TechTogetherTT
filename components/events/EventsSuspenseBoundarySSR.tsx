import React, { Suspense, useCallback, useEffect, useState } from 'react'
import EventCard from '@/components/events/EventCard'
import { Event, UserEvent } from '@prisma/client'
import { useGetUserEvents } from '@/hooks/react-query/userEvent'
import { useRouter } from 'next/router'
// import { useEventFilterForm } from '@/components/events/hooks'

export default async function EventsSuspenseBoundarySSR() {

    // SSR rendering & Hooks
    const events = await fetch("http:/localhost:3000/api/event")
    const resolvedData = await events.json()
    const eventsArray = resolvedData.events as Event[]

    const userEvents = await fetch("http:/localhost:3000/api/userEvent")
    const resolvedUserEvents = await userEvents.json()
    const userEventsArray = resolvedUserEvents.userEvents as UserEvent[]

    // No state allowed in SSR
    // const {form} = useEventFilterForm()

    // Loading...
    if (!events || !userEvents) return <>Loading...</>

    return <Suspense fallback={'Loading Events...'}>
        <section className='flex flex-row flex-wrap gap-10'>
            {
                events && eventsArray?.map((event: Event) => {
                    return <EventCard key={event.id} event={event} userEvents={userEventsArray} />
                })
            }
        </section>
    </Suspense>   
}
