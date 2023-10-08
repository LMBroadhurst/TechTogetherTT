'use client'
import React, { FC, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import TECHDEFAULT from '@/assets/TECHDEFAULT.jpg'
import { HContainer, VContainer } from '../global/Containers'
import { bookmark, bookmarkFilled, share } from '@/utils/icons'
import Link from 'next/link'
import { Event, User, UserEvent } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { ATTENDING_STATUS } from '@/utils/enums'
import { usePostUserEvent } from '@/hooks/react-query/userEvent'
import { useGetUserByEmail } from '@/hooks/react-query/user'
import { useQueryClient } from 'react-query'
import { useRouter } from 'next/navigation'

type OwnProps = {
    event: Event
    userEvents?: UserEvent[]
}

const EventCard: FC<OwnProps> = ({event, userEvents}) => {

    const queryClient = useQueryClient()
    
    const {
        id: eventId
    } = event

    // hooks
    const { data } = useSession()
    const { isLoading: postUserEventLoading, mutateAsync: postUserEvent } = usePostUserEvent()
    const { data: user } = useGetUserByEmail()
    const router = useRouter();
    const refreshData = () => {
        router.refresh()
    }

    const handleOnActionButtonClick = async () => {
        const userEmail = data?.user?.email
        const eventId = event.id

        let attendanceStatus = undefined
        if (userEvents) {
            attendanceStatus = userEvents.find((ue) => ue.eventId === eventId && ue.userId === user?.id)?.attendanceStatus
        }

        await postUserEvent({attendanceStatus, userEmail, eventId})
        refreshData()
    }

    const renderButtonWithAttendanceStatus = useMemo(() => {
        
        const userId: string = user?.id 
        if (!userId || !userEvents) return "Attend"

        const userSpecificUserEvent = userEvents.find((userEvent) => (userEvent.userId === userId) && (userEvent.eventId === eventId))
        const attendanceStatus = userSpecificUserEvent?.attendanceStatus

        switch(attendanceStatus) {
            case (ATTENDING_STATUS.ATTENDING):
                return "Attending"

            case (ATTENDING_STATUS.WAITING_LIST):
                return "Waiting List"
            
            default:
                return "Attend"
        }
    }, [eventId, user?.id, userEvents]);

    const renderNumberOfAttendees = () => {
        const eventSpecificUserEvents = userEvents?.filter((userEvent) => userEvent.eventId === eventId)
        return eventSpecificUserEvents?.length
    }
    
    return <article 
        className="card w-[350px] bg-base-100 shadow-lg duration-500 flex-grow-0 hover:scale-[1.01] hover:cursor-pointer"
        onClick={() => router.push(`/event/${eventId}`)}
    >
        
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
                    onClick={handleOnActionButtonClick}
                >   
                    {postUserEventLoading ? "..." : renderButtonWithAttendanceStatus}
                </button>
            </HContainer>
        </VContainer>
    </article>
}

export default EventCard