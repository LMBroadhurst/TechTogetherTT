import { useGetEvents, useGetEventsRelatedToUser } from '@/hooks/react-query/event'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { QueryClient } from 'react-query'
import EventCard from '../events/EventCard'
import { randomUUID } from 'crypto'
import { Event } from '@prisma/client'


export function UserEventsContainer() {

    const {data: session} = useSession()
    const { data, isLoading, isError } = useGetEventsRelatedToUser()

    if (!isLoading) {
        console.log(data)
    }

    const fetchEvents = async () => {
        if (!session) return null;

        const res = await fetch(`/api/event/getAllEventsByUser/${session?.user?.email}`)
            .then(res => res.json)
        console.log(res)
    }

    useEffect(() => {
        fetchEvents()
    }, [])

    return <section className='flex flex-row gap-10'>
        {/*  TODO: Add Suspense Boundary */}
        {
            data && data.map((event: Event) => <EventCard key={event.id} event={event} />)
        }
    </section>
}