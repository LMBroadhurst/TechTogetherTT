'use client'
import React, { useEffect, useState } from 'react'
import TextInput from '../../global/TextInput'
import { defaultCreateEventFormDetails } from './defaultCreateEventFormValues'
import { Event } from '@prisma/client'
import { useRouter } from 'next/navigation'

const CreateEventForm = () => {

    // delay
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

    // Event Details Form
    const [formStatus, setFormStatus] = useState<"IDLE" | "SUCCESS" | "ERROR" | "LOADING">("IDLE")
    const [createEventDetails, setCreateEventDetails] = useState(defaultCreateEventFormDetails)
    const [newlyCreatedEvent, setNewlyCreatedEvent] = useState<Event>()
    const router = useRouter()

    const {
        id, localDateTime, location, maxAttendance, name
    } = createEventDetails

    function handleCreateEventFormChange(event: any) {
        event.preventDefault()

        const key = event.target.name
        const value = event.target.value
        setCreateEventDetails({...createEventDetails, [key]: value})
    }

    // Form Submission

    const handleFormSubmit = async (event: any) => {
        event.preventDefault()
        setFormStatus("LOADING")

        const response = await fetch('/api/event', {
            method: 'POST',
            body: JSON.stringify(createEventDetails),
        })

        if (response.status < 300) {
            // show success toast
            // redirect to event page
            setFormStatus("SUCCESS")
            const responseBody = await response.json()
            const newEvent = responseBody.newEvent as Event
            setNewlyCreatedEvent(newEvent)
        
            // Show stuff for 3 seconds
            delay(3000)

            // Now redirect
            router.push(`/event/${newEvent.id}`)
        }

        if (response.status >= 300) {
            // error stuff
        }
    }

    // DateTime
    const [dateTime, setDateTime] = useState<Date>(new Date())
    const handleDateChange = (e: any) => {
        const dateTime = new Date(e.target.value)
        setDateTime(dateTime)
    }


    return <>
        {
            formStatus === "SUCCESS" && 
            <div className="toast">
                <div className="alert alert-info flex flex-col items-start">
                    <span>Success!</span>
                    <span>Redirecting you to your new event =D</span>
                </div>
            </div>
        }

        <form className='flex flex-col gap-4 max-w-2xl w-full'>
            <TextInput
                id="nameEvent" 
                label='Name' 
                type='text'
                value={name} 
                name='name' 
                onChange={handleCreateEventFormChange}
            />

            <TextInput 
                id="maxAttendanceEvent" 
                label='Max Attendance' 
                type='number' 
                value={maxAttendance}
                name='maxAttendance'
                onChange={handleCreateEventFormChange}
            />

            <TextInput 
                id="localDateTime" 
                label='Local Date Time' 
                type='datetime-local' 
                // TODO: Issues with date
                value={localDateTime.toISOString()}
                name='localDateTime'
                onChange={handleCreateEventFormChange}
            />

            <TextInput 
                id="locationEvent" 
                label='Location' 
                type='text'
                value={location}
                name='location'
                onChange={handleCreateEventFormChange}
            />          
                    

            <button 
                className='btn'
                type='button'
                disabled={formStatus === "LOADING"}
                onClick={handleFormSubmit}
            >
                {formStatus !== "LOADING" ? 'Create Event' : '...'}
            </button>
        </form>
    </>
}

export default CreateEventForm