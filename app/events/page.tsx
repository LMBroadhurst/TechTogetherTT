'use client'
import EventFilterForm from '@/components/forms/event-filters/EventFilterForm'
import { VContainer } from '@/components/global/Containers'
import EventCard from '@/components/global/EventCard'
import { useGetEvents } from '@/hooks/react-query/event'
import axios from 'axios'
import React, { Suspense, useEffect, useState } from 'react'
import { useQueryClient, useQuery } from 'react-query'
import { Event } from '@prisma/client'

const Events = () => {

    // hooks
    const queryClient = useQueryClient()

    // Set Event
    const response = async () => {
        const x = await axios.get("/api/event").then(res => res)
        return x
    }
    const x = response()
    console.log(x)
    const [events, setEvents] = useState<Event[]>()

    return <main className='flex flex-col gap-16 px-5 py-20 md:p-20 lg:flex-row lg:mx-auto xl:w-[1300px]'>
        
        <section className='flex flex-col gap-1 border shadow-md rounded-lg p-5 sticky self-start lg:w-1/4'>
            <VContainer className='flex flex-col gap-0'>
                <h2 className='text-lg font-semibold text-slate-500'>Lewis,</h2> 
                <h3 className='text-xl font-bold text-slate-600'>Where are you going next?!</h3>
            </VContainer>

            <div className='divider'></div>

            <EventFilterForm />
    </section>

        <section className='flex flex-row flex-wrap gap-6 lg:w-3/4'>
            <Suspense fallback={'Loading Events...'}>
                {/* {Boolean(events?.length) && events?.map((event: Event) => <EventCard key={event.id} event={event}/>)} */}
            </Suspense>   
        </section>
    </main>
}

export default Events