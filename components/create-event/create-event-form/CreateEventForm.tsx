'use client'
import React, { useEffect, useState } from 'react'
import TextInput from '../../global/TextInput'
import { CreateEventForm, defaultCreateEventFormDetails } from './defaultCreateEventFormValues'
import { Event } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { HContainer } from '@/components/global/Containers'
import moment from 'moment'

const CreateEventForm = () => {

    // delay
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

    // Event Details Form
    const [formStatus, setFormStatus] = useState<"IDLE" | "SUCCESS" | "ERROR" | "LOADING">("IDLE")
    const [createEventDetails, setCreateEventDetails] = useState<CreateEventForm>(defaultCreateEventFormDetails)
    const [newlyCreatedEvent, setNewlyCreatedEvent] = useState<Event>()
    const router = useRouter()

    const {
        // Why are types lost here?
        localDateTime, location, maxAttendance, name
    } = createEventDetails as Event

    function handleCreateEventFormChange(event: any) {
        const key = event.target.name
        let value = event.target.value
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
            setFormStatus("SUCCESS")
            const responseBody = await response.json()
            const newEvent = responseBody.newEvent as Event
            setNewlyCreatedEvent(newEvent)
        
            // Show toast for 3 seconds
            await delay(3000)

            // Now redirect
            router.push(`/event/${newEvent.id}`)
        }

        if (response.status >= 300) {
            // error stuff
            setFormStatus("ERROR")
        }
    }

    console.log(new Date().toISOString())

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

            <HContainer className='gap-4 flex-grow self-stretch'>
                <TextInput 
                    className='w=1/2'
                    id="localDateTime" 
                    label='Local Date Time' 
                    type='datetime-local' 
                    // TODO: Issues with date
                    value={localDateTime}
                    name='localDateTime'
                    onChange={handleCreateEventFormChange}
                />

                {/* <TextInput 
                    id="localDateTime" 
                    label='Local Date Time' 
                    type='time' 
                    // TODO: Issues with date
                    value={localDateTime}
                    name='localDateTime'
                    onChange={handleCreateEventFormChange}
                /> */}
            </HContainer>

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
                {formStatus !== "ERROR" && ' Ah Crabz'}
            </button>
        </form>
    </>
}

export default CreateEventForm