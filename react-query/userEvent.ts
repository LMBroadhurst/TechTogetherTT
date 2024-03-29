import { useQuery, useMutation, useQueryClient, UseQueryResult, QueryClient } from 'react-query'
import axios from 'axios'
import { Event, User, UserEvent } from '@prisma/client'
import { ATTENDING_STATUS } from '@/utils/enums'
import { BOOKMARK_ROUTE } from '@/utils/model'
import { ATTENDANCE_ROUTE } from '@/utils/model'
import { useSession } from 'next-auth/react'

export function useGetUserEvents(): UseQueryResult<UserEvent[]> {

    return useQuery({
        queryKey: "userEvent",
        queryFn: async () => {
            const { data, status } = await axios.get(`/api/userEvent`)
            if (status !== 200) throw new Error("Failed to find userEvents")
            const typedUserEvents = data.userEvents as UserEvent[]

            return typedUserEvents
        },
    })
}

export function useGetUserEventsRelatedToUser(event: Event): UseQueryResult<UserEvent[]> {

    const { data: session } = useSession()

    return useQuery({
        queryKey: "userEvent",
        queryFn: async () => {
            if (!session) throw new Error("Must be logged in to view userEvents that are related to a user.")

            const { data, status } = await axios.get(`/api/userEvent`)
            if (status !== 200) throw new Error("Failed to find userEvents")
            const typedUserEvents = data.userEvents as UserEvent[]

            const userFilteredUserEvents = typedUserEvents.filter((ue) => ue.userId === session.id)

            return userFilteredUserEvents
        },
    })
}

// Do we need the useQueryClient for each mutation?

export function usePostUserEvent() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async ({ userId, eventId }: any) => {
            const { data, status } = await axios.post(`/api/userEvent`, {
                userId,
                eventId
            })

            if (status !== 200) throw new Error("Failed to create userEvent")

            console.log('here', data.userEvent)
            return data.userEvent as UserEvent
        },
        onSuccess: () => queryClient.invalidateQueries(["event", "userEvent", "user"])
    })
}

export function usePostAttendanceStatus() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async ({ userEventId }: { userEventId: string }) => {

            // This is where we need the type, can add in what we want to do and overload the API
            return await axios.post("/api/userEvent/attendance", {
                type: ATTENDANCE_ROUTE.TOGGLE_ATTENDING_STATUS,
                userEventId
            })

        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["userEvent"] })
    })
}

export function usePostToggleBookmark() {

    const queryClient = new QueryClient()

    return useMutation({
        mutationFn: async ({ userEventId }: { userEventId: string }) => {

            return await axios.post('/api/userEvent/bookmark', {
                type: BOOKMARK_ROUTE.TOGGLE_BOOKMARKED_STATUS,
                userEventId,
            })

        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["userEvent"] })
    })
}