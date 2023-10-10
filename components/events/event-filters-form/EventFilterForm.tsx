"use client"
import React, { FC, useState } from 'react'

type OwnProps = {
    handleFormChange: any
}

const EventFilterForm: FC<OwnProps> = ({ handleFormChange }) => {

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
            <input name='ticketsAvailable' type="checkbox" className="checkbox" defaultChecked />
            <label>Tickets Available</label>
        </section>
    </form>
}

export default EventFilterForm