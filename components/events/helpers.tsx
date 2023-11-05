import { Event, UserEvent } from "@prisma/client"
import { UseMutateAsyncFunction } from "react-query"

export async function authAndUserEventCheck(user: any, userEvents: UserEvent[], event: Event, postUserEvent: any): Promise<UserEvent> {

    if (!user || !user.user || !userEvents) throw new Error('User not logged in')

    const userId = user.id
    const eventId = event.id

    // check if userEvent exists
    let userEvent = userEvents.find((ue) => ue.eventId === eventId && ue.userId === userId)

    if (!userEvent) {
        const { status, data } = await postUserEvent({ userId, eventId })
        userEvent = data
        console.log(status, data)
    }

    if (!userEvent) throw new Error('UserEvent not found')

    return userEvent
}

type FilterEventFormFields = {
    name: string
    location: string
    technologies: string[]
    ticketsAvailable: boolean
}

export type {
    FilterEventFormFields
}