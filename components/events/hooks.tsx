import { useEffect, useState } from "react"
import { UserEvent, Event } from "@prisma/client"
import axios from "axios"
import { usePostAttendanceStatus, usePostToggleBookmark, usePostUserEvent } from "@/react-query/userEvent"
import { FilterEventFormFields, authAndUserEventCheck } from "./helpers"
import { ATTENDING_STATUS } from "@/utils/enums"
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react"
import Spinner from "../global/Spinner"
import { bookmark, bookmarkFilled, share } from '@/utils/icons'


export function useToggleAttendanceStatus() {

    const { data: user } = useSession()
    const router = useRouter()
    const { data: newUserEvent, isLoading: postUserEventAttendanceLoading, mutateAsync: postUserEvent } = usePostUserEvent()
    const { data: updatedUserEvent, isLoading: attendanceStatusUpdateLoading, mutateAsync: toggleAttendanceStatus } = usePostAttendanceStatus()

    async function handleAttendanceButtonClick(userEvent: UserEvent, event: Event) {

        if (!userEvent || !event) throw new Error('UserEvent or Event not found')

        const userEventAuthed = await authAndUserEventCheck(user, event, postUserEvent, userEvent)
        const userEventId = userEventAuthed.id
        const { data, status } = await toggleAttendanceStatus({ userEventId })
        router.refresh()

    }

    return {
        // attendanceStatus,
        updatedUserEvent,
        postUserEventAttendanceLoading,
        attendanceStatusUpdateLoading,
        handleAttendanceButtonClick
    }
}

export function useToggleBookmark() {

    const { data: user } = useSession()
    const router = useRouter()
    const { data: newUserEvent, isLoading: postUserEventBookmarkLoading, mutateAsync: postUserEvent } = usePostUserEvent()
    const { data: updatedUserEvent, isLoading: bookmarkStatusUpdateLoading, mutateAsync: toggleEventCardBookmark } = usePostToggleBookmark()

    async function handleBookmarkButtonClick(userEvent: UserEvent, event: Event) {

        console.log("clicked")
        const userEventAuth = await authAndUserEventCheck(user, event, postUserEvent, userEvent)
        const userEventId = userEventAuth.id
        const { data, status } = await toggleEventCardBookmark({ userEventId })
        router.refresh()

    }

    function renderBookmarkedButton(userEvent?: UserEvent) {

        if (!user || !userEvent || !userEvent.isBookmarked) return bookmark
        if (bookmarkStatusUpdateLoading || postUserEventBookmarkLoading) return <Spinner />

        return bookmarkFilled
    }

    return {
        updatedUserEvent,
        postUserEventBookmarkLoading,
        bookmarkStatusUpdateLoading,
        renderBookmarkedButton,
        handleBookmarkButtonClick
    }
}


export function useGetEventFormFilteredEvents(form: FilterEventFormFields) {

    const [events, setEvents] = useState<Event[]>([]);

    const filterEventsClick = async () => {

        const { data } = await axios.put("/api/event", {
            data: form
        });

        setEvents(data.events);
    };

    useEffect(() => {
        filterEventsClick();
    }, [form]);

    return {
        events,
        filterEventsClick
    };

}

export type {
    FilterEventFormFields
}