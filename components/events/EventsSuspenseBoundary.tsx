import React, { Suspense, useCallback, useEffect, useState } from 'react'
import { useQueryClient, useQuery } from 'react-query'
import { useGetEvents } from '@/hooks/react-query/event'
import EventCard from '@/components/global/EventCard'
import { Event, UserEvent } from '@prisma/client'



const EventsSuspenseBoundary = () => {

    // events
    const queryClient = useQueryClient()
    const {data: events, isLoading } = useGetEvents()

    // userevents
    const [userEvents, setUserEvents] = useState<UserEvent[]>([])

    const getAllUserEvents = useCallback(async () => {
        const response = await (await fetch('/api/userEvent')).json()
        setUserEvents(response.userEvents)
    }, [])

    useEffect(() => {
        getAllUserEvents()
    }, [getAllUserEvents])

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