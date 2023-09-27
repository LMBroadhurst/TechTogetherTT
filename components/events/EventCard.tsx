'use client'
import React, { FC, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import TECHDEFAULT from '@/assets/TECHDEFAULT.jpg'
import { HContainer, VContainer } from '../global/Containers'
import { bookmark, bookmarkFilled, share } from '@/utils/icons'
import Link from 'next/link'
import { Event, User, UserEvent } from '@prisma/client'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import { ATTENDING_STATUS } from '@/utils/enums'
import { useGetAttendanceStatus, useHandleEventCardActionClick } from './hooks'

type OwnProps = {
    event: Event
    userEvents?: UserEvent[]
}

const EventCard: FC<OwnProps> = ({event, userEvents}) => {

    // hooks
    const { data } = useSession()
    const { status, handleEventCardActionClick } = useHandleEventCardActionClick()
    const { attendanceStatus, getAttendanceStatus } = useGetAttendanceStatus()

    // Works but the rendering is broken, needs debugging
    useEffect(() => {
        if (data && userEvents) {
            console.log('Data & userEvents')
            getAttendanceStatus(data?.user, userEvents)
        }
    }, [attendanceStatus, data, getAttendanceStatus, userEvents])
    
    const buttonContent = useMemo(() => {
        switch(attendanceStatus) {
            case (ATTENDING_STATUS.ATTENDING):
                return 'Attending'
    
            case (ATTENDING_STATUS.NOT_ATTENDING):
                return 'Attend'
                    
            case (ATTENDING_STATUS.WAITING_LIST):
                return 'On Waitlist'
    
            default:
                return 'Attend'
        }
    }, [attendanceStatus])
    

    const handleOnActionButtonClick = async (clickEvent: any) => {
        if (!data || !data?.user) throw new Error("No user found")

        await handleEventCardActionClick(data.user, attendanceStatus, event)
        if (userEvents) await getAttendanceStatus(data.user, userEvents)
    }

    
  
    return <figure  className="card w-[350px] bg-base-100 shadow-lg duration-500 flex-grow-0 hover:scale-[1.01] hover:cursor-pointer">
        
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
                <span>{userEvents?.length} People Attending</span>
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
                        </ul>
                    </section>
                </HContainer>

                <Link className='btn' href={`/event/${event.id}`}>More</Link>
                <button 
                    className='btn'
                    disabled={!data?.user ? true : false} 
                    onClick={(event) => handleOnActionButtonClick(event)}
                >   
                    {buttonContent}
                </button>
            </HContainer>
        </VContainer>

    </figure>
}

export default EventCard