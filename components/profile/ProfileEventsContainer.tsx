import { useGetEventsRelatedToUser } from '@/hooks/react-query/event'
import { useGetUserEvents } from '@/hooks/react-query/userEvent'
import React from 'react'
import EventCard from '../events/EventCard'

const RelevantEventsContainer = () => {

  const { data: events } = useGetEventsRelatedToUser()
  const { data: userEvents } = useGetUserEvents()
  
  return <section className='flex flex-col gap-2'>
            
    <section className='flex flex-row'>
        <h2 className='text-lg font-bold'>Your Events</h2>
    </section>

    <section className='flex flex-row gap-10'>
      {events ? events.map((event) => <EventCard event={event} userEvents={userEvents} key={event.id} />) : null}
    </section>

  </section>
}

export default RelevantEventsContainer