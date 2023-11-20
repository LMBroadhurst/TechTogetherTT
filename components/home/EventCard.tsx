import React, { FC } from 'react'
import Image from 'next/image'
import TECHDEFAULT from '@/assets/TECHDEFAULT.jpg'
import { Event, UserEvent } from '@prisma/client'
import { VContainer } from '../global/Containers'
import EventCardFooterCSR from './EventCardFooterCSR'

// TODO: Fix Event Card responsiveness issues...
// This is a CSR rendered EventCard.
// Here we need to send in the Event but there may not be a UserEvent, as it is on the homepage of the website.
// I think we can keep it as SSR until getting to the Footer or AttendeesRenderer.
export default function EventCard({ event, userEvents }: { event: Event, userEvents: UserEvent[] }) {

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
                {/* <AttendeesRenderer userEvent={userEvents} /> */}
            </VContainer>

            <div className='divider my-0 py-0'></div>

            <EventCardFooterCSR
                event={event}
                userEvents={userEvents}
            />
        </VContainer>
    </article>
}