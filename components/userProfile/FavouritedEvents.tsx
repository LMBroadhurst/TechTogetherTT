"use client"
import { Event, UserEvent } from '@prisma/client'
import React from 'react'
import EventCardSSR from '../events/EventCard/EventCardSSR'
import { useFilteredUserEventsAndEventsForUser } from './hooks'

export default function FavouritedEvents({ eventData, userEventData }: { eventData: Event[], userEventData: UserEvent[] }) {

    const { events, userEvents } = useFilteredUserEventsAndEventsForUser(eventData, userEventData)

    return <section>
        <h2 className='text-lg font-semibold text-slate-500'>Favourited Events</h2>
        <h3 className='text-xl font-medium text-slate-600'>This is your TechTogether profile. Cutomise it to your liking.</h3>

        <section className='flex flex-row gap-10'>
            {
                eventData && eventData?.length > 0
                    ? eventData?.map((event: Event) => {
                        return <EventCardSSR
                            key={event.id}
                            event={event}
                            relatedUserEvents={userEventData}
                        />
                    })
                    : null
            }
        </section>
    </section>
}