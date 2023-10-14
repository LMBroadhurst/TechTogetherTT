import { useGetEventsRelatedToUser } from '@/hooks/react-query/event'
import { useGetUserEvents } from '@/hooks/react-query/userEvent'
import React from 'react'
import EventCard from '../events/EventCard'
import { isArrayEmpty } from '@/utils/arrayUtils'

const RelevantEventsContainer = () => {

  const { data: events } = useGetEventsRelatedToUser()
  const { data: userEvents } = useGetUserEvents()
  
  return <section className='flex flex-col gap-2'>
            
    <section className='flex flex-row'>
        <h2 className='text-lg font-bold'>Your Events</h2>
    </section>

    <section className='flex flex-row gap-10'>
      {!isArrayEmpty(events) ? events?.map((event) => <EventCard event={event} userEvents={userEvents} key={event.id} />) : "You're currently not attending any events. Check out the events page for some inspiration!"}
    </section>

  </section>
}

export default RelevantEventsContainer