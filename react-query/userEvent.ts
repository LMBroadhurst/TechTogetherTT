import { useQuery, useMutation, useQueryClient, UseQueryResult, QueryClient } from 'react-query'
import axios from 'axios'
import { User, UserEvent } from '@prisma/client'
import { ATTENDING_STATUS } from '@/utils/enums'
import { BOOKMARK_ROUTE } from '@/app/api/userEvent/bookmark/route'
import { ATTENDANCE_ROUTE } from '@/app/api/userEvent/attendance/route'

export function useGetUserEvents(): UseQueryResult<UserEvent[]> {

    return useQuery({
        queryKey: ["userEvent"],
        queryFn: async () => {
            const { data, status } = await axios.get(`/api/userEvent`)
            if (status !== 200) throw new Error("Failed to find userEvents")
            const typedUserEvents = data.userEvents as UserEvent[]

            return typedUserEvents
        },
    })
}

// Do we need the useQueryClient for each mutation?

export function usePostUserEvent() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async ({userId, eventId}: any) => {
            const { data, status } = await axios.post(`/api/userEvent`, {
                userId,
                eventId
            })

            if (status !== 200) throw new Error("Failed to create userEvent")

            return data
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
        onSuccess: () => queryClient.invalidateQueries(["event", "userEvent", "user"])
    })
}

export function usePostToggleBookmark() {

    const queryClient = new QueryClient()

    return useMutation({
        mutationFn: async ({userEventId, eventId, userId}: {userEventId: string, eventId: string, userId: string}) => {

            return await axios.post('/api/userEvent/bookmark', {
                type: BOOKMARK_ROUTE.TOGGLE_BOOKMARKED_STATUS,
                userEventId,
                eventId,    
                userId
            })

        },
        onSuccess: () => queryClient.invalidateQueries(["event", "userEvent", "user"])
    })
}