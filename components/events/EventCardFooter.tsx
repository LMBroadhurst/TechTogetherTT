'use client'
import React, { FC, useMemo } from 'react'
import { HContainer } from '../global/Containers'
import { bookmark, bookmarkFilled, share } from '@/utils/icons'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { usePostUserEvent, usePostToggleBookmark, usePostAttendanceStatus } from '@/react-query/userEvent'
import { useGetUserByEmail } from '@/react-query/user'
import { useRouter } from 'next/navigation'
import { Event, UserEvent } from '@prisma/client'
import { ATTENDING_STATUS } from '@/utils/enums'
import { BOOKMARK_ROUTE } from '@/app/api/userEvent/bookmark/route'

type OwnProps = {
    event: Event
    userEvents?: UserEvent[]
}

// THINK: How can I make the db retrieval far easier for the things I need?
// i.e. Can I get the attendance status, isBookmarked, etc without having to do complex code in the view

const EventCardFooter: FC<OwnProps> = ({ event, userEvents }) => {

    // hooks
    const { data: user } = useSession()
    const { isLoading: postUserEventLoading, mutateAsync: postUserEvent } = usePostUserEvent()
    const { data: attendanceStatus, mutateAsync: toggleAttendanceStatus} = usePostAttendanceStatus()
    const { data: isBookmarked, mutateAsync: toggleEventCardBookmark } = usePostToggleBookmark()
    const router = useRouter();

    const {
        id: eventId
    } = event

    // Need a generic function to post a new userEvent which can then add optional properties via { ...userEvent, ...optionalProperties }
    async function handleAttendanceButtonClick() {

        if (!user || !user.user || !userEvents) throw new Error('User not logged in')

        const userId = user.id
        const eventId = event.id
        
        // check if userEvent exists
        let userEvent = userEvents.find((ue) => ue.eventId === eventId && ue.userId === userId)

        if (!userEvent) {
            const { status, userEventResponse } = await postUserEvent({userId, eventId})
            userEvent = userEventResponse
        }

        if (!userEvent) throw new Error('UserEvent not found')

        const userEventId = userEvent.id
        const response2 = await toggleAttendanceStatus({userEventId})
        console.log(response2)

        // Definitely need a better way to do this... react query cache should be invalidated
        router.refresh()
    }

    // async function handleBookmarkButtonClick() {
    //     // Double check this routing - if it works would need to reroute afterwards somehow...

    //     if (!user || !user.user || !userEvents) return router.push('/auth')

    //     const userEventForUserAndEvent = userEvents.find((ue) => ue.eventId === eventId && ue.userId === user.id)
        
    //     if (!userEventForUserAndEvent) {
    //         await postUserEvent({userEmail: user.user.email, eventId})
    //     }

    //     // Need to send through userEventId & userId
    //     const userEventId = userEventForUserAndEvent.id
    //     const userId = user.id

    //     const response = await toggleEventCardBookmark({userEventId, eventId, userId})
    //     console.log(response)
    // }

    const renderButtonWithAttendanceStatus = useMemo(() => {
        
        if (!user || !userEvents) return "Attend"

        // Probably shouldn't have this logic inside the EventCard, do it on the BE
        const userId: string = user.id
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

    const renderBookmarkedButton = () => {
        if (!user || !userEvents) return bookmark

        const userId: string = user.id
        const userSpecificUserEvent = userEvents.find((userEvent) => (userEvent.userId === userId) && (userEvent.eventId === eventId))
        const attendanceStatus = userSpecificUserEvent?.isBookmarked

        if (attendanceStatus) return bookmarkFilled

        return bookmark
    }

    return <HContainer className='justify-between'>
        <HContainer className='gap-2'>
            <button 
                className='btn btn-ghost btn-square btn-sm m-0 p-0'
                // onClick={handleBookmarkButtonClick}
            >
                {renderBookmarkedButton()}
            </button>
        </HContainer>

        <HContainer className='gap-2'>
            <Link className='btn btn-sm' href={`/event/${event.id}`}>More</Link>
            <button 
                className='btn btn-sm'
                disabled={!user ? true : false} 
                onClick={handleAttendanceButtonClick}
            >   
                {postUserEventLoading ? "..." : renderButtonWithAttendanceStatus}
            </button>
        </HContainer>
    </HContainer>
}

export default EventCardFooter