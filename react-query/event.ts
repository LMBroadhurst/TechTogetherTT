import { useQuery } from 'react-query'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { Event, User, UserEvent } from '@prisma/client'

export function useGetEvents() {
    return useQuery({
        queryKey: ["event"],
        queryFn: async () => {
            const { data } = await axios.get("/api/event")
            console.log(data)
            return data
        }
    })
}

export function useGetEventById(id: string) {
    return useQuery({
        queryKey: ["event"],
        queryFn: async () => {
            const { data } = await axios.get(`/api/event/${id}`)
            return data
        }
    })
}

export function useGetEventsRelatedToUser() {

    const { data: session } = useSession()

    return useQuery({
        queryKey: ["event"],
        enabled: !!session?.user?.email,
        queryFn: async () => {

            // User
            if (!session) throw new Error("Must be logged in to view userEvents that are related to a user.")

            // User Events
            const { data: userEventData } = await axios.get(`/api/userEvent`)
            // console.log(userEventData)

            if (!userEventData) throw new Error("Failed to find a user with the email: ...")
            const typedUserEventData = userEventData.userEvents as UserEvent[]
            const filteredUserEvents = typedUserEventData.filter((ue) => ue.userId === session.id)
            const filteredEventIds = filteredUserEvents.map(ue => ue.eventId)
            // console.log(filteredEventIds)

            // Events
            const { data: eventData } = await axios.get(`/api/event`)
            // console.log(eventData)

            if (!eventData) throw new Error("Failed to find a user with the email: ...")
            const typedEventData = eventData.events as Event[]
            const filteredEvents = typedEventData.filter((e: Event) => filteredEventIds.includes(e.id))
            // console.log(filteredEvents)

            return filteredEvents
        },

    })
}


export function useGetRerenderableEventCards() {

    const { data: session } = useSession()

    return useQuery({
        queryKey: ["event", "userEvent"],
        enabled: !!session?.user?.email,
        queryFn: async () => {
            const { data: userEventData } = await axios.get(`/api/userEvent`)
            if (!userEventData) throw new Error("Failed to find user events")
            const typedUserEventData = userEventData.userEvents as UserEvent[]

            const { data: eventData } = await axios.get(`/api/event`)
            if (!eventData) throw new Error("Failed to find events")
            const typedEventData = eventData.events as Event[]


        }
    })
}