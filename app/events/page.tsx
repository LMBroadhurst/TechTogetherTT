"use client"
import { VContainer } from '@/components/global/Containers'
import EventCard from '@/components/global/EventCard'
import React from 'react'

const Events = () => {

  
  return <main className='flex flex-col gap-16 px-5 py-20 md:p-20 lg:flex-row lg:mx-auto xl:w-[1300px]'>
    <section className='flex flex-col gap-1 border shadow-md rounded-lg p-5 sticky self-start lg:w-1/4'>
        <VContainer className='flex flex-col gap-0'>
            <h2 className='text-lg font-semibold text-slate-500'>Lewis,</h2> 
            <h3 className='text-xl font-bold text-slate-600'>Where are you going next?!</h3>
        </VContainer>

        <div className='divider'></div>

        <form className='flex flex-col gap-2' onChange={(e) => console.log('Stop poking me...', e)}>
            <input type="text" placeholder='Location' className='input input-bordered'/>

            <input type="number" placeholder='Attendees' className='input input-bordered'/>

            <div className='divider'></div>
            
            <section className='flex flex-col gap-2'>
                <input type="text" placeholder='Technology' className='input input-bordered'/>
                
                <section className='flex flex-row gap-1 flex-wrap'>
                    <div className="badge badge-primary badge-outline">TypeScript</div>
                    <div className="badge badge-primary badge-outline">Redux</div>
                    <div className="badge badge-primary badge-outline">Next.JS</div>
                </section>
            </section>

            <div className='divider'></div>

            <section className='flex flex-row items-center gap-2 text-sm'>
                <input type="checkbox" defaultChecked={false} className="checkbox" />
                <label>Tickets Available</label>
            </section>

            <section className='flex flex-row gap-2 items-center text-sm'>
                <input type="checkbox" defaultChecked={false} className="checkbox" />
                <label>Order by date</label>
            </section>

        </form>
  </section>

  <section className='flex flex-row flex-wrap gap-6 lg:w-3/4'>
    <EventCard />
    <EventCard />      
    <EventCard />      
    <EventCard />      
    <EventCard />      
    <EventCard />    
  </section>
</main>
}

export default Events