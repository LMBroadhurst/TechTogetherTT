'use client'
import React, { useEffect, useState } from 'react'
import TextInput from '../../global/TextInput'
import { defaultCreateEventFormDetails } from './defaultCreateEventFormValues'

const CreateEventForm = () => {

    // Event Details Form
    const [createEventDetails, setCreateEventDetails] = useState(defaultCreateEventFormDetails)

    const {
        id, localDateTime, location, maxAttendance, name
    } = createEventDetails

    function handleCreateEventFormChange(event: any) {
        event.preventDefault()

        const key = event.target.name
        const value = event.target.value
        setCreateEventDetails({...createEventDetails, [key]: value})
        console.log(createEventDetails)
    }

    // Form Submission

    const handleFormSubmit = async (event: any) => {
        event.preventDefault()

        const response = await fetch('/api/event', {
            method: 'POST',
            body: JSON.stringify(createEventDetails),
        })

        console.log(response)
    }

    // DateTime
    const [dateTime, setDateTime] = useState<Date>(new Date())
    const handleDateChange = (e: any) => {
        const dateTime = new Date(e.target.value)
        setDateTime(dateTime)
    }


    return <form className='flex flex-col gap-4 max-w-2xl w-full'>
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
            // disabled={Boolean(isLoading)}
            onClick={handleFormSubmit}
        >
            {true ? 'Create Event' : '...'}
        </button>
    </form>
}

export default CreateEventForm