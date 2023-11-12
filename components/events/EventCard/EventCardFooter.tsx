'use client'
import React, { FC, useMemo } from 'react'
import { HContainer } from '../../global/Containers'
import { bookmark, bookmarkFilled, share } from '@/utils/icons'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { usePostUserEvent, usePostToggleBookmark, usePostAttendanceStatus, useGetUserEventsRelatedToUser } from '@/react-query/userEvent'
import { useGetUserByEmail } from '@/react-query/user'
import { useRouter } from 'next/navigation'
import { Event, UserEvent } from '@prisma/client'
import { ATTENDING_STATUS } from '@/utils/enums'
import { BOOKMARK_ROUTE } from '@/app/api/userEvent/bookmark/route'
import { useToggleAttendanceStatus, useToggleBookmark } from '../hooks'
import { Spinner } from 'flowbite-react'


// THINK: How can I make the db retrieval far easier for the things I need?
// i.e. Can I get the attendance status, isBookmarked, etc without having to do complex code in the view

export default function EventCardFooter({ event, userEvents }: { event: Event, userEvents: UserEvent[] }) {

    // hooks
    const { data: user } = useSession()
    const { isLoading: postUserEventLoading, mutateAsync: postUserEvent } = usePostUserEvent()

    const { attendanceStatusUpdateLoading, postUserEventAttendanceLoading, handleAttendanceButtonClick } = useToggleAttendanceStatus(userEvents[0])
    const { postUserEventBookmarkLoading, bookmarkStatusUpdateLoading, handleBookmarkButtonClick } = useToggleBookmark()

    const renderButtonWithAttendanceStatus = useMemo(() => {

        if (attendanceStatusUpdateLoading || postUserEventAttendanceLoading) return <Spinner />

        switch (userEvents[0].attendanceStatus) {
            case (ATTENDING_STATUS.ATTENDING):
                return "Attending"

            case (ATTENDING_STATUS.NOT_ATTENDING):
                return "Attend"

            default:
                return "Attend"
        }

    }, [userEvents, attendanceStatusUpdateLoading, postUserEventAttendanceLoading])

    const renderBookmarkedButton = () => {

        if (bookmarkStatusUpdateLoading || postUserEventBookmarkLoading) return <Spinner />

        switch (userEvents[0].isBookmarked) {
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
                onClick={userEvents && user ? () => handleBookmarkButtonClick(user, userEvents, event) : undefined}
            >
                {renderBookmarkedButton()}
            </button>
        </HContainer>

        <HContainer className='gap-2'>
            <Link className='btn btn-sm' href={`/event/${event.id}`}>More</Link>
            <button
                className='btn btn-sm'
                disabled={attendanceStatusUpdateLoading || postUserEventAttendanceLoading}
                onClick={userEvents && user ? () => handleAttendanceButtonClick(user, userEvents, event) : undefined}
            >
                {postUserEventLoading ? "..." : renderButtonWithAttendanceStatus}
            </button>
        </HContainer>
    </HContainer>
}