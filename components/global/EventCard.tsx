'use client'
import React, { FC } from 'react'
import Image from 'next/image'
import TECHDEFAULT from '@/assets/TECHDEFAULT.jpg'
import { HContainer, VContainer } from './Containers'
import { bookmark, bookmarkFilled, share } from '@/utils/icons'
import Link from 'next/link'
import { Event } from '@prisma/client'

type OwnProps = {
    event: Event;
}

const EventCard: FC<OwnProps> = ({event}) => {
  
  return <Link href={`/event/${event.id}`} className="card w-[350px] bg-base-100 shadow-lg duration-500 hover:scale-[1.01] hover:cursor-pointer">
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
            <span>{event?.location ?? 'London, UK'}</span>
            <span>12 People Attending</span>
        </VContainer>

        <div className='divider my-0 py-0'></div>

        <HContainer className='justify-between'>
            <HContainer className=''>
                <button className='btn btn-ghost btn-square p-2'>{false ? bookmarkFilled : bookmark}</button>

                <section className='dropdown dropdown-top'>
                    <button className='btn btn-square btn-ghost p-2' tabIndex={0}>{share}</button>
        
                    <ul tabIndex={0} className='dropdown-content menu bg-base-100 z-10 rounded-box border-[0.5px] shadow'>
                        <h3 className='menu-title'>Share</h3>

                        <li>LinkedIn</li>

                        {/* <Link href='/'>LinkedIn</Link>

                        <Link href='/'>Twitter</Link>

                        <Link href='/'>Whatsapp</Link> */}
                    </ul>
                </section>
            </HContainer>

            <button className='btn'>Attend</button>
        </HContainer>
    </VContainer>

    </Link>
}

export default EventCard