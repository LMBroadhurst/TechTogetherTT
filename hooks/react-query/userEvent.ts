import { useQuery, useMutation, useQueryClient, UseQueryResult, QueryClient } from 'react-query'
import axios from 'axios'
import { User, UserEvent } from '@prisma/client'
import { ATTENDING_STATUS } from '@/utils/enums'
import { BOOKMARK_ROUTE } from '@/app/api/userEvent/bookmark/route'

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


export function usePostUserEvent() {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async ({attendanceStatus, userEmail, eventId}: any) => {
            const { data, status } = await axios.get(`/api/user/${userEmail}`)
            
            if (status !== 200) throw new Error("Failed to find a user with the email: ...")

            const typedData = data as User
            const userId = typedData.id

            if (!attendanceStatus || attendanceStatus === ATTENDING_STATUS.NOT_ATTENDING) {

                return await axios.post("/api/userEvent", {
                    userId,
                    eventId
                })
            }

            if (attendanceStatus === ATTENDING_STATUS.ATTENDING) {

                return await axios.delete("/api/userEvent", {
                    data: {
                        userId,
                        eventId
                    }
                })
            }

        },
        onSuccess: () => {
            queryClient.invalidateQueries(["event", "userEvent", "user"])
        }
    })
}

export function useToggleBookmark() {

    const queryClient = new QueryClient()

    return useMutation({
        mutationFn: async ({userEventId, eventId, userId}: any) => {

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