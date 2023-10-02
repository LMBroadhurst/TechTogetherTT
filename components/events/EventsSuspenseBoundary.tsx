import React, { Suspense, useCallback, useEffect, useState } from 'react'
import { useQueryClient, useQuery } from 'react-query'
import { useGetEvents } from '@/hooks/react-query/event'
import EventCard from '@/components/events/EventCard'
import { Event, UserEvent } from '@prisma/client'
import { useGetAllEvents } from '@/app/api/event/hooks'
import { useGetAllUserEvents } from '@/app/api/userEvent/hooks'



const EventsSuspenseBoundary = () => {

    // events
    const {events} = useGetAllEvents()

    // userevents
    const { userEvents } = useGetAllUserEvents()

    if (!userEvents) return <>Loading...</>

    return <Suspense fallback={'Loading Events...'}>
        {
            Boolean(events?.length) ? events?.map((event: Event) => {
            
                const filteredUserEvents: UserEvent[] = userEvents?.filter((userEvent: UserEvent) => userEvent.eventId === event.id)
                return <EventCard key={event.id} event={event} userEvents={filteredUserEvents}/>
                
            }) : 'Loading...'
        }
    </Suspense>   
    
}

export default EventsSuspenseBoundary