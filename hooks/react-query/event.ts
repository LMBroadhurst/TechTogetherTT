import { useQuery } from 'react-query'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { Event, User, UserEvent } from '@prisma/client'

export function useGetEvents() {
    return useQuery("event", async () => {
        const { data } = await axios.get("/api/event")
        console.log(data)
        return data
    })
}

export function useGetEventById(id: string) {
    return useQuery("event", async () => {
        const { data } = await axios.get(`/api/event/${id}`)
        return data
    })
}

export function useGetEventsRelatedToUser() {

    const {data: session} = useSession()

    return useQuery({
        queryFn: async () => {

            // User
            const { data: userData } = await axios.get(`/api/user/${session?.user?.email}`)
            // console.log(userData, session)

            if (!userData) throw new Error("Failed to find a user with the email: ...")
            const typedUserData = userData as User
            const userId = typedUserData.id

            // User Events
            const {data: userEventData} = await axios.get(`/api/userEvent`)
            // console.log(userEventData)

            if (!userEventData) throw new Error("Failed to find a user with the email: ...")
            const typedUserEventData = userEventData.userEvents as UserEvent[]
            const filteredUserEvents = typedUserEventData.filter((ue) => ue.userId === userId)
            const filteredEventIds = filteredUserEvents.map(ue => ue.eventId)
            // console.log(filteredEventIds)

            // Events
            const {data: eventData} = await axios.get(`/api/event`)
            // console.log(eventData)

            if (!eventData) throw new Error("Failed to find a user with the email: ...")
            const typedEventData = eventData.events as Event[]
            const filteredEvents = typedEventData.filter((e: Event) => filteredEventIds.includes(e.id))
            // console.log(filteredEvents)

            return filteredEvents
        },
        enabled: !!session?.user?.email
    })
}