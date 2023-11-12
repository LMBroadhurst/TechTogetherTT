"use client"
import React from 'react'
import { isArrayEmpty } from '@/utils/arrayUtils'
import { useGetEventsRelatedToUser } from '@/react-query/event'
import { useGetUserEvents } from '@/react-query/userEvent'
import EventCardCSR from '../events/EventCard/EventCardCSR'

export default function RelevantEventsContainer() {

    // Get all userEvents
    // filter for the user
    // return array of event cards

    const { data: events } = useGetEventsRelatedToUser()
    const { data: userEvents } = useGetUserEvents()


    return <section className='flex flex-col gap-2'>

        <section className='flex flex-row'>
            <h2 className='text-lg font-bold'>Your Events</h2>
        </section>

        <section className='flex flex-row gap-10'>
            {!isArrayEmpty(events) ? events?.map((event) => <EventCardCSR event={event} userEvents={userEvents} key={event.id} />) : "You're currently not attending any events. Check out the events page for some inspiration!"}
        </section>

    </section>
}