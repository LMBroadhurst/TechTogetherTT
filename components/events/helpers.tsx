import { Event, UserEvent } from "@prisma/client"
import { UseMutateAsyncFunction } from "react-query"

export async function authAndUserEventCheck(user: any, event: Event, postUserEvent: any, userEvent?: UserEvent): Promise<UserEvent> {

    if (!user || !user.user) throw new Error('User not logged in')

    const userId = user.id
    const eventId = event.id

    // check if userEvent exists
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