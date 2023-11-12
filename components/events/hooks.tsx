import { useEffect, useState } from "react"
import { UserEvent, Event } from "@prisma/client"
import axios from "axios"
import { usePostAttendanceStatus, usePostToggleBookmark, usePostUserEvent } from "@/react-query/userEvent"
import { FilterEventFormFields, authAndUserEventCheck } from "./helpers"
import { ATTENDING_STATUS } from "@/utils/enums"
import { useRouter } from 'next/navigation'

export function useToggleAttendanceStatus(userEvent: UserEvent) {


    const router = useRouter()
    const { data: newUserEvent, isLoading: postUserEventAttendanceLoading, mutateAsync: postUserEvent } = usePostUserEvent()
    const { data: updatedUserEvent, isLoading: attendanceStatusUpdateLoading, mutateAsync: toggleAttendanceStatus } = usePostAttendanceStatus()

    async function handleAttendanceButtonClick(user: any, userEvent: UserEvent, event: Event) {

        const userEvent = await authAndUserEventCheck(user, userEvent, event, postUserEvent)
        const userEventId = userEvent.id
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

    const router = useRouter()
    const { data: newUserEvent, isLoading: postUserEventBookmarkLoading, mutateAsync: postUserEvent } = usePostUserEvent()
    const { data: updatedUserEvent, isLoading: bookmarkStatusUpdateLoading, mutateAsync: toggleEventCardBookmark } = usePostToggleBookmark()

    async function handleBookmarkButtonClick(user: any, userEvent: UserEvent, event: Event) {

        const userEvent = await authAndUserEventCheck(user, userEvent, event, postUserEvent)
        const userEventId = userEvent.id
        const { data, status } = await toggleEventCardBookmark({ userEventId })
        router.refresh()

    }

    return {
        updatedUserEvent,
        postUserEventBookmarkLoading,
        bookmarkStatusUpdateLoading,
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