'use client'
import React, { ButtonHTMLAttributes, FC, MouseEventHandler } from 'react'
import Image from 'next/image'
import TECHDEFAULT from '@/assets/TECHDEFAULT.jpg'
import { HContainer, VContainer } from './Containers'
import { bookmark, bookmarkFilled, share } from '@/utils/icons'
import Link from 'next/link'
import { Event, PrismaClient, User, UserEvent } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { useQueryClient } from 'react-query'
import { usePostUserEvent } from '@/hooks/react-query/userEvent'
import { findUserByEmail } from '@/app/repository/user'
import axios from 'axios'
import { ATTENDING_STATUS } from '@/utils/enums'

type OwnProps = {
    event: Event
    userEvents?: UserEvent[]
}

const EventCard: FC<OwnProps> = ({event, userEvents}) => {

    // hooks
    const { data } = useSession()
    
    // userevents
    async function getAttendanceStatus() {

        if(data?.user) {
            const {user}: {user: User} = await fetch(`/api/user/${data.user.email}`).then(res => res.json())

            const userEvent: UserEvent | undefined = userEvents?.find(userEvent => userEvent.userId === user.id)

            return userEvent?.attendanceStatus
        }

        return null
    }

    async function handleAttendEvent(e: any) {
        e.preventDefault()
        e.stopPropagation()
        
        if (!data?.user) throw new Error("No user found")
        const {user}: {user: User} = await fetch(`/api/user/${data.user.email}`).then(res => res.json())
        if (!user) throw new Error(`Could not find a user with the email ${data.user.email}`)

        // check attendance then follow down appropiate path

        const attendanceStatus = await getAttendanceStatus()

        // Already Attending
        if (attendanceStatus === ATTENDING_STATUS.ATTENDING) {
            const response = await fetch('/api/userEvent', {
                method: 'DELETE',
                body: JSON.stringify({
                    eventId: event.id, 
                    userId: user.id
                })
            })

            return response
        }

        // Not Currently Attending
        if (attendanceStatus === ATTENDING_STATUS.NOT_ATTENDING) {
            
            // create new userEvent
            const response = await axios.post("/api/userEvent", {
                userId: user.id,
                eventId: event.id,
            })

            return response
        }
    } 

    async function renderButtonContent() {
        const attendanceStatus = await getAttendanceStatus()

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
                <span>{event?.maxAttendance} People Attending</span>
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

                <Link href={`/event/${event.id}`}>More</Link>
                <button 
                    className='btn'
                    disabled={!data?.user ? true : false} 
                    onClick={(event) => handleAttendEvent(event)}
                >   
                    {renderButtonContent()}
                </button>
            </HContainer>
        </VContainer>

    </figure>
}

export default EventCard