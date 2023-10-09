"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import EventsSuspenseBoundary from '@/components/events/EventsSuspenseBoundarySSR'
import RelevantEventsContainer from '@/components/profile/ProfileEventsContainer'
import ProfileTechStack from '@/components/profile/ProfileTechStack'
import ProfileHeader from '@/components/profile/ProfileHeader'
import ProfileAboutMe from '@/components/profile/ProfileAboutMe'

const Profile = () => {

    // Authentication
    const router = useRouter()
    const {data: session} = useSession()

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