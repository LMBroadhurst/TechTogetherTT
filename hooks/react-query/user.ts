import { useQuery } from 'react-query'
import axios from 'axios'
import { useSession } from 'next-auth/react'

export function useGetUsers() {
    return useQuery({
        queryKey: "user", 
        queryFn: async () => {
            const { data } = await axios.get("/api/user")
            return data
        }
    })
}

export function useGetUserByEmail() {

    const {data: session} = useSession()

    return useQuery({
        queryKey: "user", 
        enabled: !!session?.user?.email,
        queryFn: async () => {
            const { data, status } = await axios.get(`/api/user/${session?.user?.email}`)
        },
    })

}