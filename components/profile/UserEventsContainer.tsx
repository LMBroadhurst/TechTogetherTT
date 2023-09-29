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
        {/* {
            userEvents && userEvents?.map(async (ue) => {
                // const event = await fetch(`/api/userEvent/${ue.eventId}`, {
                //     method: "GET"
                // }).then(
                //     async (response) => {
                //     const resolvedResponse = await response.json()
                //     return resolvedResponse as Event
                // })

                // return <EventCard event={event} userEvents={userEvents} />
            })
        } */}
    </section>
}