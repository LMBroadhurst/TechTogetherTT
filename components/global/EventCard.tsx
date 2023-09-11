import React from 'react'
import Image from 'next/image'
import TECHDEFAULT from '@/assets/TECHDEFAULT.jpg'
import { HContainer, VContainer } from './Containers'
import { bookmark, bookmarkFilled, share } from '@/utils/icons'

const EventCard = () => {
  return <article className="card w-[350px] bg-base-100 shadow-lg">
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
            <h2 className='text-lg font-bold'>Next.JS is super cool</h2>

            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum fugiat fuga nulla dolor minima necessitatibus...</p>
        </VContainer>

        <div className='divider my-0 py-0'></div>

        <VContainer className='text-sm'>
            <span>London, UK</span>
            <span>12 People Attending</span>
        </VContainer>

        <div className='divider my-0 py-0'></div>

        <HContainer className='justify-between'>
            <HContainer>
                <button className='btn btn-square glass'>{false ? bookmarkFilled : bookmark}</button>
                <button className='btn btn-square glass'>{share}</button>
            </HContainer>

            <button className='btn'>Attend</button>
        </HContainer>
    </VContainer>

    </article>
}

export default EventCard