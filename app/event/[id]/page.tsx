'use client'
import { VContainer } from '@/components/global/Containers'
import { useGetEventById } from '@/hooks/react-query/event'
import { Event } from '@prisma/client'
import React, { useEffect, useState, useCallback } from 'react'
import { useQueryClient } from 'react-query'

const EventPage = ({params} : {params: {id: string}}) => {

    const queryClient = useQueryClient()
    const { status, data: event, error, isFetching } = useGetEventById(params.id)
    console.log(status, event)

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

export default EventPage