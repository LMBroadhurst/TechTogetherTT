import { useGetAllUserEvents } from '@/app/api/userEvent/hooks'
import React from 'react'

export function UserEventsContainer() {

    const { userEvents } = useGetAllUserEvents()
    console.log(userEvents)
    
    return <section>
        {userEvents && userEvents?.map(ue => ue.attendanceStatus)}
    </section>
}