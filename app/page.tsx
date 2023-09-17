import { VContainer } from '@/components/global/Containers'
import EventCard from '@/components/global/EventCard'
import HomeTitle from '@/components/home/HomeTitle'
import LocationEventsContainer from '@/components/home/LocationEventsContainer'
import React from 'react'


const Home = () => {
  
  return <main className='flex flex-col gap-28 px-5 py-20 md:p-20 lg:px-40 xl:px-96'>
    <HomeTitle />

    <VContainer className='gap-52'>

      <LocationEventsContainer />
      <LocationEventsContainer />
      <LocationEventsContainer />
      
    </VContainer>
  </main>
}

export default Home