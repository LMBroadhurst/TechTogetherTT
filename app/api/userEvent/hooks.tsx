import { User, UserEvent, Session } from "@prisma/client"
import { useEffect, useState } from "react"

export function useGetAllUserEvents(user?: any) {

    const typedUser = user as User
    const [userEvents, setUserEvents] = useState<UserEvent[]>([])
    const [events, setEvents] = useState<Event[]>([])

    const runGetMethod = () => {
        fetch("/api/userEvent", {
            method: "GET"
        }).then(
            async (response) => {
                const resolvedResponse = await response.json()
                const typedResponse = resolvedResponse.userEvents as UserEvent[]

                if (user?.id) {
                    typedResponse.filter(userEvent => userEvent.userId === typedUser.id)
                }

                setUserEvents(typedResponse)
                console.log(`set user events to: ${typedResponse}`)
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

  return { userEvents }

    
}