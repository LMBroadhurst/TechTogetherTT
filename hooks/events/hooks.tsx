import { useEffect, useState } from "react"
import { ATTENDING_STATUS } from "@/utils/enums"
import { User, UserEvent, Event } from "@prisma/client"
import axios from "axios"

type FilterEventFormFields = {
    name: string
    location: string
    technologies: string[]
    ticketsAvailable: boolean
}

export function useHandleEventCardActionClick() {

    const [status, setStatus] = useState<string>('IDLE')
    
    async function handleEventCardActionClick(currentUser: any, attendanceStatus: string, event: Event) {
        // Setup
        setStatus('PENDING')
        console.log(attendanceStatus)

        // Get User and check validity
        if (!currentUser) {
            setStatus('ERROR')
            throw new Error("No user found")
        }

        const {user}: {user: User} = await fetch(`/api/user/${currentUser.email}`).then(res => res.json())

        if (!user) {
            setStatus('ERROR')
            throw new Error(`Could not find a user with the email ${currentUser.email}`)
        }

        // Not currently attending OR no userEvent attendanceStatus
        if (!attendanceStatus || attendanceStatus === ATTENDING_STATUS.NOT_ATTENDING) {
            
            const response = await axios.post("/api/userEvent", {
                userId: user.id,
                eventId: event.id,
            })

            console.log(response)
            setStatus("SUCCESSFUL")
            return response
        }

        // Already Attending or on waiting list
        if (attendanceStatus === ATTENDING_STATUS.ATTENDING || attendanceStatus === ATTENDING_STATUS.WAITING_LIST) {
            
            const response = await fetch('/api/userEvent', {
                method: 'DELETE',
                body: JSON.stringify({
                    eventId: event.id, 
                    userId: user.id
                })
            })

            setStatus("SUCCESS")
            return response
        }
    }

    return {
        status,
        handleEventCardActionClick,
    }
}


export function useGetAttendanceStatus() {

    const [status, setStatus] = useState('')
    const [attendanceStatus, setAttendanceStatus] = useState('')

    async function getAttendanceStatus(currentUser: any, userEvents: UserEvent[]){

        if(currentUser) {
            const {user}: {user: User} = await fetch(`/api/user/${currentUser.email}`).then(res => res.json())

            const userEvent: UserEvent | undefined = userEvents?.find(userEvent => userEvent.userId === user.id)

            if (!userEvent) {
                setStatus("ERROR")
                return null
            }

            setStatus("SUCCESS")
            setAttendanceStatus(userEvent?.attendanceStatus)
            return userEvent?.attendanceStatus
        }

        setStatus("ERROR")
        return null
    }

    return {
        status,
        attendanceStatus,
        getAttendanceStatus
    }
}

export function useGetEventFormFilteredEvents(form: FilterEventFormFields) {

    const [events, setEvents] = useState<Event[]>([]);

    const filterEventsClick = async () => {
        
        const { data } = await axios.put("/api/event", {
            data: form
        });

        setEvents(data.events);
    };

    useEffect(() => {
        filterEventsClick();
    }, [form]);

    return {
        events,
        filterEventsClick
    };

}

export type {
    FilterEventFormFields
}