'use client'
import { HContainer, VContainer } from '@/components/global/Containers'
import { useGetEventById } from '@/hooks/react-query/event'
import { Event } from '@prisma/client'
import React, { useEffect, useState, useCallback } from 'react'
import { useQueryClient } from 'react-query'

const EventPage = ({params} : {params: {id: string}}) => {

    const queryClient = useQueryClient()
    const { status, data, error, isFetching } = useGetEventById(params.id)
    const event = data.event as Event

    if (!event) return 'Loading...'

    console.log(event.location)

    return <main className='flex flex-col gap-16 px-5 py-20 md:p-20 lg:flex-row lg:mx-auto xl:w-[1300px]'>
        <section className='flex flex-col gap-1 border shadow-md rounded-lg p-5 w-full'>
            <VContainer className='flex flex-col gap-0'>
                <h1 className='text-2xl font-semibold text-slate-500'>{event.name}</h1> 
                <h4 className='text-sm text-slate-500'>{event.location}</h4>
            </VContainer>

            <h4>You&apos;re going!</h4>

            <div className='divider'></div>

            <VContainer className='gap-10'>
                <VContainer>
                    <h2 className='text-lg text-slate-600'>About &quot;{event.name}&quot;</h2>

                    <p className='text-sm text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum voluptas, dolores enim animi eveniet fugiat itaque ab ratione molestias assumenda aliquam doloribus vitae tempore!</p>
                </VContainer>

                <VContainer>
                    <h2 className='text-lg text-slate-600'>Currently Attending</h2>
                    <p className='text-sm text-slate-500'>Need some small member cards to go in here...</p>
                    <HContainer>

                    </HContainer>
                </VContainer>
            </VContainer>

        </section>
    </main>
}

export default EventPage