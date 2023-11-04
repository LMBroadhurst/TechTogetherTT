import React, { FC, useMemo } from 'react'
import { HContainer } from '../global/Containers'
import { bookmark, bookmarkFilled, share } from '@/utils/icons'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { usePostUserEvent } from '@/hooks/react-query/userEvent'
import { useGetUserByEmail } from '@/hooks/react-query/user'
import { useRouter } from 'next/navigation'
import { Event, UserEvent } from '@prisma/client'
import { ATTENDING_STATUS } from '@/utils/enums'

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
    const router = useRouter();

    const {
        id: eventId
    } = event

    const handleOnActionButtonClick = async () => {
        const userEmail = user?.user?.email
        const eventId = event.id

        let attendanceStatus = undefined
        if (userEvents) {
            attendanceStatus = userEvents.find((ue) => ue.eventId === eventId && ue.userId === user?.id)?.attendanceStatus
        }

        await postUserEvent({attendanceStatus, userEmail, eventId})
        router.refresh()
    }

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
            <button className='btn btn-ghost btn-square btn-sm m-0 p-0'>
                {renderBookmarkedButton()}
            </button>
        </HContainer>

        <HContainer className='gap-2'>
            <Link className='btn btn-sm' href={`/event/${event.id}`}>More</Link>
            <button 
                className='btn btn-sm'
                disabled={!user ? true : false} 
                onClick={handleOnActionButtonClick}
            >   
                {postUserEventLoading ? "..." : renderButtonWithAttendanceStatus}
            </button>
        </HContainer>
    </HContainer>
}

export default EventCardFooter