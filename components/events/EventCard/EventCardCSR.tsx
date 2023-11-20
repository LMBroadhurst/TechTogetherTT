"use client"
import React, { FC } from 'react'
import Image from 'next/image'
import TECHDEFAULT from '@/assets/TECHDEFAULT.jpg'
import { VContainer } from '../../global/Containers'
import { Event, UserEvent } from '@prisma/client'
import AttendeesRenderer from './AttendeesRenderer'
import EventCardFooterCSR from './EventCardFooterCSR'

// TODO: Fix Event Card responsiveness issues...
export default function EventCardCSR({ event, relatedUserEvents }: { event: Event, relatedUserEvents: UserEvent[] }) {

    console.log(relatedUserEvents, event)

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
            </VContainer>

            <div className='divider my-0 py-0'></div>


            {
                event && relatedUserEvents && relatedUserEvents?.length > 0 &&
                <EventCardFooterCSR
                    event={event}
                    userEvents={relatedUserEvents}
                />

            }

        </VContainer>
    </article>
}