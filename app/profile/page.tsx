"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import EventsSuspenseBoundary from '@/components/events/EventGetters/EventsSSR'
import RelevantEventsContainer from '@/components/userProfile/ProfileEventsContainer'
import ProfileTechStack from '@/components/userProfile/ProfileTechStack'
import ProfileHeader from '@/components/userProfile/ProfileHeader'
import ProfileAboutMe from '@/components/userProfile/ProfileAboutMe'

const Profile = () => {

    // Authentication
    const router = useRouter()
    const { data: session } = useSession()

    if (!session) {
        router.push('/auth')
    }

    return <main className='flex flex-col gap-14 px-5 py-20 md:p-20 lg:px-40 xl:px-96'>

        <ProfileHeader />

        <ProfileAboutMe />

        <ProfileTechStack />

        <RelevantEventsContainer />

    </main>
}

export default Profile