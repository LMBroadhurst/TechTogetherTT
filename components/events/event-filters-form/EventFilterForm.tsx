"use client"
import React, { useState } from 'react'
import { useFilterEventForm } from '@/hooks/events/hooks'

const EventFilterForm = () => {

    // Complete form data...
    // 1. Build an object that holds all values
    // 2. Have a setState value that will update the state correctly
    // 3. Move into hook to share between components easily

    const { handleFormChange } = useFilterEventForm()

    return <form className='flex flex-col gap-4' onChange={handleFormChange}>
        <input type="text" placeholder='Location' name='location' className='input input-bordered'/>

        <section className='flex flex-col gap-2'>
            <input type="text" placeholder='Technology' name='technologies' className='input input-bordered'/>
            
            <section className='flex flex-row gap-1 flex-wrap'>
                <div className="badge badge-primary badge-outline">TypeScript</div>
                <div className="badge badge-primary badge-outline">Redux</div>
                <div className="badge badge-primary badge-outline">Next.JS</div>
            </section>
        </section>

        <section className='flex flex-row items-center gap-2 text-sm'>
            <input name='ticketsAvailable' type="checkbox" defaultChecked={false} className="checkbox"  />
            <label>Tickets Available</label>
        </section>

        <button className='btn'>Filter Events</button>
    </form>
}

export default EventFilterForm