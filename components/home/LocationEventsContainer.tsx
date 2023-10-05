import React from 'react'
import EventCard from '../events/EventCard'
import { useGetEvents } from '@/hooks/react-query/event'
import { Event } from '@prisma/client'
import { getEventsSSR } from '@/ssr-api/events'

export default function LocationEventsContainer() {

  // console.log(`SSR Props: ${events}`)
  // const { data: events} = useGetEvents()

  // const x = async () => {
  //   const { data } = await axios.get("/api/event")
  //   console.log(data)
  // }

  return <section className='flex flex-col gap-5'>
    <h3 className='text-2xl font-semibold text-slate-600'>Newly Posted Events</h3>
    
    <section className='flex flex-col md:flex-row md:gap-10 md:flex-wrap'>
      {/* {events?.events && events.events.map((event: Event) => <EventCard key={event.id} event={event} />)}      */}
    </section>
  </section>
}

