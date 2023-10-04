import React, { Suspense, useCallback, useEffect, useState } from 'react'
import { useQueryClient, useQuery } from 'react-query'
import { useGetEvents } from '@/hooks/react-query/event'
import EventCard from '@/components/events/EventCard'
import { Event, UserEvent } from '@prisma/client'



const EventsSuspenseBoundary = () => {

    // events
    const {data } = useGetEvents()


    if (!data) return <>Loading...</>

    return <Suspense fallback={'Loading Events...'}>
        {
            Boolean(data.events?.length) ? data.events?.map((event: Event) => {
            
                return <EventCard key={event.id} event={event} />
                
            }) : 'Loading...'
        }
    </Suspense>   
    
}

export default EventsSuspenseBoundary