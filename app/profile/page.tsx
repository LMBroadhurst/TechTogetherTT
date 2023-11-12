import React from 'react'
import RelevantEventsContainer from '@/components/userProfile/ProfileEventsContainer'
import ProfileTechStack from '@/components/userProfile/ProfileTechStack'
import ProfileHeader from '@/components/userProfile/ProfileHeader'
import ProfileAboutMe from '@/components/userProfile/ProfileAboutMe'
import FavouritedEvents from '@/components/userProfile/FavouritedEvents'

export default function Profile() {

    return <main className='flex flex-col gap-14 px-5 py-20 md:p-20 lg:px-40 xl:px-96'>

        <ProfileHeader />

        <ProfileAboutMe />

        <ProfileTechStack />

        <RelevantEventsContainer />

        <FavouritedEvents />
    </main>
}