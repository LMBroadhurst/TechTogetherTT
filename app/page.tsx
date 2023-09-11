import { VContainer } from '@/components/global/Containers'
import EventCard from '@/components/global/EventCard'
import React from 'react'


const Home = () => {
  
  return <main className='flex flex-col gap-28 px-5 py-20 md:p-20 lg:px-40 xl:px-96'>
    <section className='flex flex-col gap-10 xl:py-40'>
      <section>
        <h2 className='text-2xl font-semibold text-slate-500'>Lewis</h2> 
        <h3 className='text-4xl font-medium text-slate-600'>Let&apos;s connect you with the TechTogether community...</h3>
      </section>

      <p>Our aim is to get people like you together, online or in person. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis, accusantium tempora cupiditate provident sed quisquam impedit neque quae obcaecati, saepe atque vel expedita unde quod et voluptates enim alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, enim!</p>
    </section>

    <VContainer className='gap-52'>

    <section className='flex flex-col gap-5'>
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

      <section className='flex flex-col gap-5'>
        <h3 className='text-2xl font-semibold text-slate-600'>Based On Your Preferences</h3>
        
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

      <section className='flex flex-col gap-5'>
        <h3 className='text-2xl font-semibold text-slate-600'>Our Most Popular Events This Month</h3>
        
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
    </VContainer>
  </main>
}

export default Home