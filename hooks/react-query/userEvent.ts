import { useQuery, useMutation } from 'react-query'
import axios from 'axios'

export function usePostUserEvent(userId: string, eventId: string) {
    return useMutation("events", async () => {
        const { data, status } = await axios.post("/api/event", {
            userId,
            eventId
        })
        console.log(data, status)
        return data
    })
}