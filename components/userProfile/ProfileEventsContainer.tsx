"use client"
import React from 'react'
import { useGetEventsRelatedToUser } from '@/react-query/event'
import { useGetUserEventsRelatedToUser } from '@/react-query/userEvent'
import EventCardCSR from '../events/EventCard/EventCardCSR'

export default function RelevantEventsContainer() {

    const { data: events } = useGetEventsRelatedToUser()
    const { data: userEvents } = useGetUserEventsRelatedToUser()

    return <section className='flex flex-col gap-2'>

        <section className='flex flex-row'>
            <h2 className='text-lg font-bold'>Your Events</h2>
        </section>

        <section className='flex flex-row gap-10'>
            {
                events && events?.length > 0 && userEvents && userEvents?.length > 0
                    ? events?.map((event) => <EventCardCSR event={event} relatedUserEvents={userEvents} key={event.id} />)
                    : "You're currently not attending any events. Check out the events page for some inspiration!"
            }
        </section>

    </section>
}