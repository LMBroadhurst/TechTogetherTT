"use client"
import EventAbout from '@/components/event/EventAbout'
import EventAttendees from '@/components/event/EventAttendees'
import EventHeader from '@/components/event/EventHeader'
import { HContainer, VContainer } from '@/components/global/Containers'
import DateParser from '@/components/global/DateParser'
import Spinner from '@/components/global/Spinner'
import UserCard from '@/components/global/UserCard'
import { useGetEventById } from '@/react-query/event'
import { useGetUserByEmail } from '@/react-query/user'
import { Event, User } from '@prisma/client'
import moment from 'moment'
import React, { useEffect, useState, useCallback } from 'react'
import { useQueryClient } from 'react-query'

export default function EventPage({ params }: { params: { id: string } }) {

    const queryClient = useQueryClient()
    const { status, data, error, isFetching } = useGetEventById(params.id)
    const event = data?.event as Event

    if (!event) return <Spinner />

    return <main className='flex flex-col gap-16 px-5 py-20 md:p-20 lg:flex-row lg:mx-auto xl:w-[1300px]'>
        <section className='flex flex-col gap-1 w-full'>
            <EventHeader event={event} />

            <div className='divider'></div>

            <VContainer className='gap-8'>
                <EventAbout event={event} />

                <EventAttendees />
            </VContainer>
        </section>
    </main>
}
