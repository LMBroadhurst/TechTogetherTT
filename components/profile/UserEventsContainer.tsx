import { useGetAllUserEvents } from '@/app/api/userEvent/hooks'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import EventCard from '../events/EventCard'
import { Event } from '@prisma/client'
import { useGetAllEvents, useGetAllEventsByUser } from '@/app/api/event/hooks'

export function UserEventsContainer() {

    const { data: session } = useSession()
    const { userEvents } = useGetAllUserEvents(session?.user)

    const { events } = useGetAllEventsByUser(session?.user?.email ?? '')
    console.log(events)
    
    return <section>
        {
        }
    </section>
}