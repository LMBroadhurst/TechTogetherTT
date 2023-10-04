import { useQuery } from 'react-query'
import axios from 'axios'
import { useSession } from 'next-auth/react'

export function useGetEvents() {
    return useQuery("event", async () => {
        const { data } = await axios.get("/api/event")
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

    return useQuery(
        "event", 
        async () => {
            const { data } = await axios.get(`/api/user/${session?.user?.email}`)
            console.log(data)
        },
        {
            enabled: !!session?.user?.email
        }
    )

}