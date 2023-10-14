import { VContainer } from '@/components/global/Containers'
import HomeTitle from '@/components/home/HomeTitle'
import React from 'react'
import EventsSuspenseBoundarySSR from '@/components/events/EventsSuspenseBoundarySSR'


export default function Home() {
  
  return <main className='flex flex-col px-5 py-10 gap-16'>
    <HomeTitle />

    <VContainer className='gap-4'>
      <h2 className='text-2xl font-bold'>Recently Created Events</h2>
      <EventsSuspenseBoundarySSR />
    </VContainer>
  </main>
}