'use client'
import { VContainer } from '@/components/global/Containers'
import { Event } from '@prisma/client'
import React, { useEffect, useState, useCallback } from 'react'

const Event = ({params} : {params: {id: number}}) => {

    const [event, setEvent] = useState<Event>()

    const eventApiCall = useCallback(async () => {
        const response = await fetch(`/api/event/${params.id}`).then(res => res.json())
        setEvent(response)
    }, [params])

    useEffect(() => {
        eventApiCall()
    }, [eventApiCall])


    if (!event) return 'Loading...'

    return <main className='flex flex-col gap-16 px-5 py-20 md:p-20 lg:flex-row lg:mx-auto xl:w-[1300px]'>
        <section className='flex flex-col gap-1 border shadow-md rounded-lg p-5 w-full'>
        <VContainer className='flex flex-col gap-0 w-full'>
            <h1 className='text-2xl font-semibold text-slate-500'>{event.name}</h1> 
            <h4>{event.location}</h4>
        </VContainer>

            <div className='divider'></div>
        </section>
    </main>
}

export default Event