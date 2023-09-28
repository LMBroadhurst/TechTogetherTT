import { UserEvent } from "@prisma/client"
import { useEffect, useState } from "react"

export function useGetAllUserEvents() {

    const [userEvents, setUserEvents] = useState<UserEvent[]>([])

    const runGetMethod = async () => {
        const response = await fetch("/api/userEvent", {
            method: "GET"
        })

        const userEventsPromise = await response.json()
        setUserEvents(userEventsPromise)
        console.log(`set user events to: ${userEvents}`)
    }

    useEffect(() => {
        runGetMethod()
    }, [])

    return {
        userEvents,
        runGetMethod
    }
}