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

const EventCardFooter: FC<OwnProps> = ({ event, userEvents }) => {

    // hooks
    const { data } = useSession()
    const { isLoading: postUserEventLoading, mutateAsync: postUserEvent } = usePostUserEvent()
    const { data: user } = useGetUserByEmail()
    const router = useRouter();
    const refreshData = () => {
        router.refresh()
    }

    const {
        id: eventId
    } = event

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

    return <HContainer className='justify-between'>
        <HContainer className='gap-2'>
            <button className='btn btn-ghost btn-square btn-sm m-0 p-0'>{false ? bookmarkFilled : bookmark}</button>

            <section className='dropdown dropdown-top'>
                <button className='btn btn-square btn-ghost btn-sm m-0 p-0' tabIndex={0}>{share}</button>

                <ul tabIndex={0} className='dropdown-content menu bg-base-100 z-10 rounded-box border-[0.5px] shadow'>
                    <h3 className='menu-title'>Share</h3>
                    <li>LinkedIn</li>
                </ul>
            </section>
        </HContainer>

        <HContainer className='gap-2'>
            <Link className='btn btn-sm' href={`/event/${event.id}`}>More</Link>
            <button 
                className='btn btn-sm'
                disabled={!data?.user ? true : false} 
                onClick={handleOnActionButtonClick}
            >   
                {postUserEventLoading ? "..." : renderButtonWithAttendanceStatus}
            </button>
        </HContainer>
    </HContainer>
}

export default EventCardFooter