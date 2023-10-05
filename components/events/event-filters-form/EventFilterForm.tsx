"use client"
import React from 'react'

const EventFilterForm = () => {

    return <form className='flex flex-col gap-2' onChange={(e) => console.log('Stop poking me...', e)}>
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
}

export default EventFilterForm