import React from 'react'
import { HContainer, VContainer } from '../global/Containers'
import UserCard from '../global/UserCard'

export default function EventAttendees() {

    return <VContainer className='gap-1'>
        <h2 className='text-lg text-slate-600'>Currently Attending</h2>
        <HContainer>
            <UserCard />
        </HContainer>
    </VContainer>
}