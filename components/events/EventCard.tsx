'use client'
import React, { FC } from 'react'
import Image from 'next/image'
import TECHDEFAULT from '@/assets/TECHDEFAULT.jpg'
import { VContainer } from '../global/Containers'
import { Event, UserEvent } from '@prisma/client'
import { useQueryClient } from 'react-query'
import EventCardFooter from './EventCardFooter'

type OwnProps = {
    event: Event
    userEvents?: UserEvent[]
}

// TODO: Fix Event Card responsiveness issues...
const EventCard: FC<OwnProps> = (props) => {

    const {
        event, userEvents
    } = props

    const queryClient = useQueryClient()

    const {
        id: eventId
    } = event
    
    const renderNumberOfAttendees = () => {
        const eventSpecificUserEvents = userEvents?.filter((userEvent) => userEvent.eventId === eventId)
        return eventSpecificUserEvents?.length
    }
    
    return <article className="card w-[350px] bg-base-100 shadow-lg duration-500 flex-grow-0 hover:-translate-y-2">
        
        <figure className='max-h-56'>
            <Image 
                src={TECHDEFAULT.src} 
                alt="Shoes"
                width='350'
                height='350'
            />
        </figure>
        
        <VContainer className='p-5 gap-2'>
            <VContainer className='gap-1'>
                <h2 className='text-lg font-bold'>{event?.name ?? 'Next.JS is super cool'}</h2>

                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum fugiat fuga nulla dolor minima necessitatibus...</p>
            </VContainer>

            <div className='divider my-0 py-0'></div>

            <VContainer className='text-sm'>
                <span>{event?.location}</span>
                <span>{renderNumberOfAttendees()} Attending</span>
            </VContainer>

            <div className='divider my-0 py-0'></div>

            
            <EventCardFooter {...props} />
        </VContainer>
    </article>
}

export default EventCard