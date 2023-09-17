import React from 'react'
import EventCard from '../global/EventCard'

const LocationEventsContainer = () => {

    return <section className='flex flex-col gap-5'>
    <h3 className='text-2xl font-semibold text-slate-600'>Based On Your Location</h3>
    
    <section className='flex flex-col md:flex-row md:gap-10 md:flex-wrap'>
      <EventCard />
      <EventCard />      
      <EventCard />      
      <EventCard />      
      <EventCard />      
      <EventCard />      
    </section>

    <button className='btn btn-md btn-ghost btn-link text-primary-focus self-center'>See More</button>
  </section>
}

export default LocationEventsContainer