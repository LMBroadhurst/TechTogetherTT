import { useQuery } from 'react-query'
import axios from 'axios'
import { User } from '@prisma/client'
import { useSession } from 'next-auth/react'

export function useGetUsers() {
    return useQuery("user", async () => {
        const { data } = await axios.get("/api/user")
        return data
    })
}

export function useGetUserByEmail() {

    const {data: session} = useSession()

    return useQuery(
        "user", 
        async () => {
            const { data, status } = await axios.get(`/api/user/${session?.user?.email}`)
        },
        {
            enabled: !!session?.user?.email
        }
    )

}