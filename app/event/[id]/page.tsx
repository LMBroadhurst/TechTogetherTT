"use client"
import { HContainer, VContainer } from '@/components/global/Containers'
import DateParser from '@/components/global/DateParser'
import { useGetEventById } from '@/hooks/react-query/event'
import { Event } from '@prisma/client'
import moment from 'moment'
import React, { useEffect, useState, useCallback } from 'react'
import { useQueryClient } from 'react-query'

export default function EventPage({params} : {params: {id: string}}) {

    const queryClient = useQueryClient()
    const { status, data, error, isFetching } = useGetEventById(params.id)
    const event = data?.event as Event

    // Still needs formatting
    // const dateTime = moment(event.localDateTime, "dd-mm-yy hh:mm").toString()

    if (!event) return 'Loading...'

    return <main className='flex flex-col gap-16 px-5 py-20 md:p-20 lg:flex-row lg:mx-auto xl:w-[1300px]'>
        <section className='flex flex-col gap-1 border shadow-md rounded-lg p-5 w-full'>
            <VContainer className='flex flex-col gap-0'>
                <h1 className='text-2xl font-semibold text-slate-500'>{event.name}</h1> 
                <h4 className='text-sm text-slate-500'>{event.location}</h4>
                <h4 className='text-sm text-slate-500'>{event.localDateTime.split("T")[0]} {event.localDateTime.split("T")[1]}</h4>
            </VContainer>

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
