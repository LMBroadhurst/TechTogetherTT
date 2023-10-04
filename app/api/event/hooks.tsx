import { User, Event, UserEvent, PrismaClient } from "@prisma/client"
import { useEffect, useState } from "react"
import { useGetAllUserEvents } from "../userEvent/hooks"

export function useGetAllEvents(user?: any) {

    // must be the data.session
    const typedUser = user as User
    const [events, setEvents] = useState<Event[]>([])

    function runGetMethod() {
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

export function useGetAllEventsByUser(userEmail?: string) {

    const [events, setEvents] = useState<Event[]>([])

    async function getEvents() {

        const {user}: {user: User} = await fetch(`/api/user/${userEmail}`).then(res => res.json())

        fetch(`/api/event/getAllEventsByUser/${user.id}`, {
            method: "GET",
        }).then(
            async (response) => {
                const x = await response.json()
                console.log(x)
                setEvents(x)
            }
        ).catch(
            error => console.log(error)
        )
    }

    useEffect(() => {
        getEvents()
    }, [userEmail])

    return { events }
}