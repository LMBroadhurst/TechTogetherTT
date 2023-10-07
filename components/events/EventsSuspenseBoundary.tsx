import React, { Suspense, useCallback, useEffect, useState } from 'react'
import EventCard from '@/components/events/EventCard'
import { Event, UserEvent } from '@prisma/client'



export default async function EventsSuspenseBoundary() {

    // SSR rendering
    const data = await fetch("http:/localhost:3000/api/event")
    const resolvedData = await data.json()
    const events = resolvedData.events
    console.log(events)
    if (!events) return <>Loading...</>



    return <Suspense fallback={'Loading Events...'}>
        <section className='flex flex-row flex-wrap gap-10'>
            {
                events && events?.map((event: Event) => {
                    return <EventCard key={event.id} event={event} />
                })
            }
        </section>
    </Suspense>   
}