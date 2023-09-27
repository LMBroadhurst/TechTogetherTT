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


    return <form className='flex flex-col gap-4 max-w-2xl w-full'>
        <TextInput
            id="nameEvent" 
            label='Name' 
            inputType='text' 
            value={name} 
            apiProperty='name' 
            onChange={handleCreateEventFormChange}
        />

        <TextInput 
            id="maxAttendanceEvent" 
            label='Max Attendance' 
            inputType='number' 
            value={maxAttendance}
            apiProperty='maxAttendance'
            onChange={handleCreateEventFormChange}
        />

        <TextInput 
            id="localDateTime" 
            label='Local Date Time' 
            inputType='datetime-local' 
            value={localDateTime}
            apiProperty='localDateTime'
            onChange={handleCreateEventFormChange}
        />

        <TextInput 
            id="locationEvent" 
            label='Location' 
            inputType='text'
            value={location}
            apiProperty='location'
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