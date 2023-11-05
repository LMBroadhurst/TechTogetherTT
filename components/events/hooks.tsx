import { useEffect, useState } from "react"
import { UserEvent, Event } from "@prisma/client"
import axios from "axios"
import { usePostAttendanceStatus, usePostToggleBookmark, usePostUserEvent } from "@/react-query/userEvent"
import { FilterEventFormFields, authAndUserEventCheck } from "./helpers"


export function useToggleAttendanceStatus() {

    const { isLoading: postUserEventLoading, mutateAsync: postUserEvent } = usePostUserEvent()
    const { data: updatedUserEvent, mutateAsync: toggleAttendanceStatus } = usePostAttendanceStatus()

    async function handleAttendanceButtonClick(user: any, userEvents: UserEvent[], event: Event) {

        const userEvent = await authAndUserEventCheck(user, userEvents, event, postUserEvent)
        const userEventId = userEvent.id
        const { data, status } = await toggleAttendanceStatus({ userEventId })

    }

    useEffect(() => {
        console.log(updatedUserEvent)
    }, [updatedUserEvent])

    return {
        updatedUserEvent,
        handleAttendanceButtonClick
    }

}

export function useToggleBookmark() {

    const { isLoading: postUserEventLoading, mutateAsync: postUserEvent } = usePostUserEvent()
    const { data: isBookmarked, mutateAsync: toggleEventCardBookmark } = usePostToggleBookmark()

    async function handleBookmarkButtonClick(user: any, userEvents: UserEvent[], event: Event) {

        const userEvent = await authAndUserEventCheck(user, userEvents, event, postUserEvent)
        const userEventId = userEvent.id

        const { data, status } = await toggleEventCardBookmark({ userEventId })
    }

    useEffect(() => {
        console.log(isBookmarked)
    }, [isBookmarked])

    return {
        isBookmarked,
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