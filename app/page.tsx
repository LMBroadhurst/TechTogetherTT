"use client"
import { VContainer } from '@/components/global/Containers'
import HomeTitle from '@/components/home/HomeTitle'
import React from 'react'
import HomeEventsContainer from '@/components/home/HomeEventsContainer'
import CreateEventForm from '@/components/events/CreateEvent/CreateEventForm/CreateEventForm'


export default function Home() {

    return <main className='flex flex-col px-5 py-10 md:w-[1300px] mx-auto overflow-hidden'>
        <HomeTitle />

        <VContainer className='gap-4 justify-center'>
            <h2 className='text-2xl font-bold'>Recently Created Events</h2>

            <HomeEventsContainer />

            <CreateEventForm />
        </VContainer>
    </main>
}