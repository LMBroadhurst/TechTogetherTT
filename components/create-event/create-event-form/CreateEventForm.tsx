'use client'
import React, { useEffect, useMemo, useState } from 'react'
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
        } else {
            // error stuff
            setFormStatus("ERROR")
        }
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

        <form className='flex flex-col gap-4 max-w-2xl w-full' onSubmit={handleFormSubmit}>
            <TextInput
                required
                id="nameEvent" 
                label='Name' 
                type='text'
                value={name} 
                minLength={3}
                name='name' 
                onChange={handleCreateEventFormChange}
            />

            <TextInput 
                required
                id="maxAttendanceEvent" 
                label='Max Attendance' 
                type='number' 
                min={2}
                value={maxAttendance}
                name='maxAttendance'
                onChange={handleCreateEventFormChange}
            />

            <TextInput 
                className='w=1/2'
                id="localDateTime" 
                label='Local Date Time' 
                type='datetime-local' 
                minLength={11}
                required
                // TODO: Issues with date
                value={localDateTime}
                name='localDateTime'
                onChange={handleCreateEventFormChange}
            />

            <TextInput 
                required
                id="locationEvent" 
                label='Location' 
                type='text'
                value={location}
                name='location'
                minLength={3}
                onChange={handleCreateEventFormChange}
            />          

            <button 
                className='btn'
                type='submit'
                disabled={formStatus === "LOADING"}
            >
                {formStatus !== "LOADING" ? 'Create Event' : '...'}
            </button>

            { 
                formStatus === "ERROR" &&
                <div className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Error! Something went wrong when creating an event. Please check your inputs and try again.</span>
                </div>
            }
        </form>
    </>
}

export default CreateEventForm