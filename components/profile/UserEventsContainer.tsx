import { useGetEvents, useGetEventsRelatedToUser } from '@/hooks/react-query/event'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { QueryClient } from 'react-query'
import EventCard from '../events/EventCard'
import { randomUUID } from 'crypto'
import { Event } from '@prisma/client'


export function UserEventsContainer() {

    const { data, isLoading, isError } = useGetEventsRelatedToUser()
    console.log(data)

    return <section className='flex flex-row gap-10'>
        {/*  TODO: Add Suspense Boundary */}
        {/* {
            isLoading && !isError ? "Loading" : (
                // @ts-ignore
                !isLoading && isError && !data ? "An error has occured" : data?.events.map((e: Event) => <EventCard key={e.id} event={e} />)
            )
        } */}
    </section>
}