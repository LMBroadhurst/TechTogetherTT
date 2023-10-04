import { useQuery } from 'react-query'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { User, UserEvent } from '@prisma/client'

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
            const { data: userData, status: userStatus } = await axios.get(`/api/user/${session?.user?.email}`)

            if (userStatus !== 200) throw new Error("Failed to find a user with the email: ...")
            const typedUserData = userData as User
            const userId = typedUserData.id

            return await axios.get(`/api/event/getAllEventsByUser/${userId}`)
        },
        enabled: !!session?.user?.email
    })
}