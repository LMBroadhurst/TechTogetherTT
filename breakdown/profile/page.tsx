import React from 'react'
import ProfileEventsContainer from '@/components/userProfile/ProfileEventsContainer'
import ProfileTechStack from '@/components/userProfile/ProfileTechStack'
import ProfileHeader from '@/components/userProfile/ProfileHeader'
import ProfileAboutMe from '@/components/userProfile/ProfileAboutMe'
import FavouritedEvents from '@/components/userProfile/FavouritedEvents'
import axios from 'axios'
import Spinner from '@/components/global/Spinner'

export default async function ProfilePage() {

    // Get events and userEvents
    const { data: eventData, status: eventStatus } = await axios.get('http://localhost:3000/api/event')
    const { data: userEventData, status: userEventStatus } = await axios.get(' http://localhost:3000/api/userEvent')

    console.log('hi', eventData, 'hi', userEventData)

    if (eventStatus !== 200 || userEventStatus !== 200) {
        return <Spinner />
    }

    if (!eventData && !userEventData) {
        return <span>Major Issues...</span>
    }

    return <main className='flex flex-col gap-14 px-5 py-20 md:p-20 lg:px-40 xl:px-96'>

        <ProfileHeader />

        <ProfileAboutMe />

        <ProfileTechStack />

        <ProfileEventsContainer
            eventData={eventData.events}
            userEventData={userEventData.userEvents}
        />

        {/* <FavouritedEvents
            eventData={eventData.events}
            userEventData={userEventData.userEvents}
        /> */}
    </main>
}