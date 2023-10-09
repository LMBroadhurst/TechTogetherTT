import { VContainer } from '@/components/global/Containers'
import HomeTitle from '@/components/home/HomeTitle'
import React from 'react'
import EventsSuspenseBoundary from '@/components/events/EventsSuspenseBoundarySSR'


export default function Home() {
  
  return <main className='flex flex-col gap-28 px-5 py-20 md:p-20 lg:px-40 xl:px-96'>
    <HomeTitle />

    <VContainer className='gap-10'>
      <h2 className='text-2xl'>Recently Created Events</h2>
      <EventsSuspenseBoundary />
      
    </VContainer>
  </main>
}