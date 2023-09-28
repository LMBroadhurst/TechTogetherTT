import { UserEvent } from "@prisma/client"
import { useEffect, useState } from "react"

export function useGetAllUserEvents() {

    const [userEvents, setUserEvents] = useState<UserEvent[]>([])

    const runGetMethod = () => {
        fetch("/api/userEvent", {
            method: "GET"
        }).then(
            async (response) => {
                const resolvedResponse = await response.json()
                setUserEvents(resolvedResponse.userEvents)
                console.log(`set user events to: ${userEvents}`)
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