import { useQuery } from 'react-query'
import axios from 'axios'
import { User } from '@prisma/client'

export function useGetUsers() {
    return useQuery("user", async () => {
        const { data } = await axios.get("/api/user")
        return data
    })
}

export function useGetUserByEmail(email: string) {
    return useQuery("user", async () => {
        const { data } = await axios.get(`/api/user/${email}`)
        console.log(data)
        return data
    })
}