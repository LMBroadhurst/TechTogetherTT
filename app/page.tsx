"use client"
import { VContainer } from '@/components/global/Containers'
import HomeTitle from '@/components/home/HomeTitle'
import React from 'react'
import HomeEventsContainer from '@/components/home/HomeEventsContainer'


export default function Home() {

    return <main className='flex flex-col px-5 py-10 md:w-[1000px] mx-auto overflow-hidden'>
        <HomeTitle />

        <VContainer className='gap-4 justify-center'>
            <h2 className='text-2xl font-bold'>Recently Created Events</h2>

            <HomeEventsContainer />
        </VContainer>
    </main>
}