'use client'
import React, { useMemo } from 'react'
import { HContainer } from '../../global/Containers'
import { bookmark, bookmarkFilled } from '@/utils/icons'
import { useSession } from 'next-auth/react'
import { usePostUserEvent } from '@/react-query/userEvent'
import { Event, UserEvent } from '@prisma/client'
import { ATTENDING_STATUS } from '@/utils/enums'
import { useToggleAttendanceStatus, useToggleBookmark } from '../hooks'


// THINK: How can I make the db retrieval far easier for the things I need?
// i.e. Can I get the attendance status, isBookmarked, etc without having to do complex code in the view
export default function EventCardFooter({ event, userEvent }: { event: Event, userEvent: UserEvent }) {

    // hooks
    const { data: user } = useSession()
    const { isLoading: postUserEventLoading, mutateAsync: postUserEvent } = usePostUserEvent()

    const { attendanceStatusUpdateLoading, postUserEventAttendanceLoading, handleAttendanceButtonClick } = useToggleAttendanceStatus()
    const { postUserEventBookmarkLoading, bookmarkStatusUpdateLoading, handleBookmarkButtonClick } = useToggleBookmark()

    const renderButtonWithAttendanceStatus = useMemo(() => {

        if (attendanceStatusUpdateLoading || postUserEventAttendanceLoading) return <>Loading...</>

        switch (userEvent.attendanceStatus) {
            case (ATTENDING_STATUS.ATTENDING):
                return "Attending"

            case (ATTENDING_STATUS.NOT_ATTENDING):
                return "Attend"

            default:
                return "Attend"
        }

    }, [userEvent, attendanceStatusUpdateLoading, postUserEventAttendanceLoading])

    const renderBookmarkedButton = () => {

        if (bookmarkStatusUpdateLoading || postUserEventBookmarkLoading) return <>loading...</>

        switch (userEvent.isBookmarked) {
            case (true):
                return bookmarkFilled

            default:
                return bookmark
        }
    }


    return <HContainer className='justify-between'>
        <HContainer className='gap-2'>
            <button
                disabled={postUserEventBookmarkLoading || bookmarkStatusUpdateLoading}
                className='btn btn-ghost btn-square btn-sm m-0 p-0'
                onClick={userEvent && user ? () => handleBookmarkButtonClick(userEvent, event) : undefined}
            >
                {renderBookmarkedButton()}
            </button>
        </HContainer>

        {/* <HContainer className='gap-2'>
            <Link className='btn btn-sm' href={`/event/${event.id}`}>More</Link>
            <button
                className='btn btn-sm'
                disabled={attendanceStatusUpdateLoading || postUserEventAttendanceLoading}
                onClick={userEvent && user ? () => handleAttendanceButtonClick(user, userEvent, event) : undefined}
            >
                {postUserEventLoading ? "..." : renderButtonWithAttendanceStatus}
            </button>
        </HContainer> */}
    </HContainer>
}