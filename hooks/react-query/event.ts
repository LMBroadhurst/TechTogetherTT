import { useQuery } from 'react-query'
import axios from 'axios'

export function useGetEvents() {
    return useQuery("events", async () => {
        const { data } = await axios.get("/api/event")
        return data
    })
}

export function useGetEventById(id: string) {
    return useQuery("events", async () => {
        const {data} = await axios.get(`/api/event/${id}`)
        return data
    })
}