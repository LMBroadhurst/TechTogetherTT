"use client"
import React from 'react'
import ProfileEventsContainer from '@/components/profile/ProfileEventsContainer'
import ProfileTechStack from '@/components/profile/ProfileTechStack'
import ProfileHeader from '@/components/profile/ProfileHeader'
import ProfileAboutMe from '@/components/profile/ProfileAboutMe'
import { Event, UserEvent } from '@prisma/client'
import { useGetEvents } from '@/react-query/event'
import { useGetUserEvents } from '@/react-query/userEvent'

export default function ProfilePage() {

    const { data: events } = useGetEvents()
    const { data: userEvents } = useGetUserEvents()

    return <main className='flex flex-col gap-14 px-5 py-20 md:p-20 lg:px-40 xl:px-96'>

        <ProfileHeader />

        <ProfileAboutMe />

        <ProfileTechStack />

        <ProfileEventsContainer
            events={events}
            userEvents={userEvents}
        />

        {/* <FavouritedEvents
            eventData={eventData.events}
            userEventData={userEventData.userEvents}
        /> */}
    </main>
}