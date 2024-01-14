'use client'
import React, { FC, useMemo } from 'react'
import { bookmark, bookmarkFilled, share } from '@/utils/icons'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { usePostUserEvent, usePostToggleBookmark, usePostAttendanceStatus, useGetUserEventsRelatedToUser } from '@/react-query/userEvent'
import { useGetUserByEmail } from '@/react-query/user'
import { useRouter } from 'next/navigation'
import { Event, UserEvent } from '@prisma/client'
import { ATTENDING_STATUS } from '@/utils/enums'
import { BOOKMARK_ROUTE } from '@/utils/model'
import { useToggleAttendanceStatus, useToggleBookmark } from '../events/hooks'
import { HContainer } from '../global/Containers'
import { useFilterToRelevantUserEvent } from './hooks'


// THINK: How can I make the db retrieval far easier for the things I need?
// i.e. Can I get the attendance status, isBookmarked, etc without having to do complex code in the view
export default function EventCardFooterCSR({ event, userEvents }: { event: Event, userEvents?: UserEvent[] }) {

    // hooks
    const { data: user } = useSession()
    const userEvent = useFilterToRelevantUserEvent(event, userEvents)

    const { attendanceStatusUpdateLoading, postUserEventAttendanceLoading, handleAttendanceButtonClick } = useToggleAttendanceStatus()
    const { postUserEventBookmarkLoading, bookmarkStatusUpdateLoading, renderBookmarkedButton, handleBookmarkButtonClick } = useToggleBookmark()

    const renderButtonWithAttendanceStatus = useMemo(() => {

        if (attendanceStatusUpdateLoading || postUserEventAttendanceLoading) return <>loading...</>

        switch (userEvent?.attendanceStatus) {
            case (ATTENDING_STATUS.ATTENDING):
                return "Attending"

            case (ATTENDING_STATUS.NOT_ATTENDING):
                return "Attend"

            default:
                return "Attend"
        }

    }, [userEvent, attendanceStatusUpdateLoading, postUserEventAttendanceLoading])

    if (!user || !userEvent) {
        <HContainer className='justify-between'>
            <HContainer className='gap-2'>
                <Link
                    className='btn btn-ghost btn-square btn-sm m-0 p-0'
                    href={`/auth`}
                >
                    {bookmark}
                </Link>
            </HContainer>

            <HContainer className='gap-2'>
                <Link className='btn btn-sm' href={`/event/${event.id}`}>More</Link>
                <Link
                    className='btn btn-sm'
                    href={`/auth`}
                >
                    Attend
                </Link>
            </HContainer>
        </HContainer>
    }


    return <HContainer className='justify-between'>
        <HContainer className='gap-2'>
            <button
                disabled={postUserEventBookmarkLoading || bookmarkStatusUpdateLoading}
                className='btn btn-ghost btn-square btn-sm m-0 p-0'
                onClick={userEvent ? () => handleBookmarkButtonClick(userEvent, event) : undefined}
            >
                {renderBookmarkedButton(userEvent)}
            </button>
        </HContainer>

        <HContainer className='gap-2'>
            <Link className='btn btn-sm' href={`/event/${event.id}`}>More</Link>
            <button
                className='btn btn-sm'
                disabled={attendanceStatusUpdateLoading || postUserEventAttendanceLoading}
                onClick={userEvent && user ? () => handleAttendanceButtonClick(userEvent, event) : undefined}
            >
                {attendanceStatusUpdateLoading ? "..." : renderButtonWithAttendanceStatus}
            </button>
        </HContainer>
    </HContainer>
}