import React, { Suspense, useCallback, useEffect, useState } from 'react'
import { useQueryClient, useQuery } from 'react-query'
import { useGetEvents } from '@/hooks/react-query/event'
import EventCard from '@/components/events/EventCard'
import { Event, UserEvent } from '@prisma/client'



export default async function EventsSuspenseBoundaryEventsPage() {

    const data = await fetch("http:/localhost:3000/api/event")
    const resolvedData = await data.json()
    const events = resolvedData.events
    console.log(events)

    if (!events) return <>Loading...</>

    return <Suspense fallback={'Loading Events...'}>
        {
            events && events?.map((event: Event) => {
            
                return <EventCard key={event.id} event={event} />
                
            })
        }
    </Suspense>   
}