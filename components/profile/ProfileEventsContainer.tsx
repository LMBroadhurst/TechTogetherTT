import React from 'react'
import { Event, UserEvent } from '@prisma/client'
import EventCard from '../home/EventCard'
import { useSession } from 'next-auth/react'

export default function ProfileEventsContainer({ events, userEvents }: { events?: Event[], userEvents?: UserEvent[] }) {

    // filter down the userEvents to find which events the user is attending or has favourited
    const { data: user } = useSession()
    const filteredUserEventsForUser = userEvents?.filter((userEvent: UserEvent) =>
        userEvent.userId === user?.id && userEvent.attendanceStatus === 'ATTENDING' || userEvent.isBookmarked)
    const filteredUserEventsForUserIds = filteredUserEventsForUser?.map((userEvent: UserEvent) => userEvent.eventId) ?? []

    const filteredEvents = events?.filter((event: Event) => filteredUserEventsForUserIds.includes(event.id))

    return <section className='flex flex-col gap-2'>

        <section className='flex flex-row'>
            <h2 className='text-lg font-bold'>Your Favourited and Attending Events</h2>
        </section>

        <section className='flex flex-row gap-10'>
            {
                filteredEvents && filteredEvents?.length > 0 && userEvents && userEvents?.length > 0
                    ? filteredEvents.map((event: Event) => {
                        return <EventCard
                            key={event.id}
                            event={event}
                            userEvents={userEvents}
                        />
                    })
                    : "You're currently not attending any events. Check out the events page for some inspiration!"
            }
        </section>

    </section>
}