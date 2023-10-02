import { useGetAllUserEvents } from '@/app/api/userEvent/hooks'
import { useSession } from 'next-auth/react'
import React from 'react'
import EventCard from '../events/EventCard'
import { Event } from '@prisma/client'
import { useGetAllEvents } from '@/app/api/event/hooks'

export function UserEventsContainer() {

    const { data: session } = useSession()
    const { userEvents } = useGetAllUserEvents(session?.user)
    const { events } = useGetAllEvents()
    console.log(events)
    
    return <section>
        {
        }
    </section>
}