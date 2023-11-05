import React, { FC } from 'react'
import Image from 'next/image'
import TECHDEFAULT from '@/assets/TECHDEFAULT.jpg'
import { VContainer } from '../global/Containers'
import { Event, UserEvent } from '@prisma/client'
import EventCardFooter from './EventCardFooter'

type OwnProps = {
    event: Event
    relatedUserEvents?: UserEvent[]
}

// TODO: Fix Event Card responsiveness issues...
export default async function EventCard({ event, relatedUserEvents }: any) {

    const renderNumberOfAttendees = () => {
        return relatedUserEvents?.length
    }

    return <article className="card w-[350px] bg-base-100 shadow-lg duration-500 flex-grow-0 hover:-translate-y-1">

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
                <span>{event?.cityCountry}</span>
                <span>{renderNumberOfAttendees()} Attending</span>
            </VContainer>

            <div className='divider my-0 py-0'></div>


            <EventCardFooter
                event={event}
                userEvents={relatedUserEvents}
            />

        </VContainer>
    </article>
}