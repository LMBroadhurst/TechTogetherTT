import { useQuery, useMutation, useQueryClient } from 'react-query'
import axios from 'axios'
import { User } from '@prisma/client'

export function usePostUserEvent() {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async ({userEmail, eventId}: any) => {
            const { data, status } = await axios.get(`/api/user/${userEmail}`)
            
            if (status !== 200) throw new Error("Failed to find a user with the email: ...")

            const typedData = data as User
            const userId = typedData.id

            return await axios.post("/api/userEvent", {
                userId,
                eventId
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["event", "userEvent"])
        }
    })
}