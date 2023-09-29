import { User, Event } from "@prisma/client"
import { useEffect, useState } from "react"

export function useGetAllEvents(user?: any) {

    // must be the data.session
    const typedUser = user as User
    const [events, setEvents] = useState<Event[]>([])

    const runGetMethod = () => {
        fetch("/api/event", {
            method: "GET"
        }).then(
            async (response) => {
                const resolvedResponse = await response.json()
                const typedResponse = resolvedResponse.events as Event[]
                
                setEvents(typedResponse)
                console.log(`set events to: ${typedResponse}`)
            }
        ).catch(
            error => {
                console.log(error)
            }
        )
    }

    useEffect(() => {
        runGetMethod()
    }, [])

  return { events }
}