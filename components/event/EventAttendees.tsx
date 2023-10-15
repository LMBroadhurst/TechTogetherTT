import React from 'react'
import { HContainer, VContainer } from '../global/Containers'
import UserCard from '../global/UserCard'

export default function EventAttendees() {

    return <VContainer>
        <h2 className='text-lg text-slate-600'>Currently Attending</h2>
        <p className='text-sm text-slate-500'>Need some small member cards to go in here...</p>
        <HContainer>
            <UserCard />
        </HContainer>
    </VContainer>
}