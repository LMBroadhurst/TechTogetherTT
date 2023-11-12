'use client'
import React, { useEffect, useMemo, useState } from 'react'
import TextInput from '../../../global/TextInput'
import { CreateEventForm, defaultCreateEventFormDetails } from './defaultCreateEventFormValues'
import { Event, User } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { HContainer } from '@/components/global/Containers'
import { zodCreateEventFormRequest } from '@/utils/zod'
import { z } from 'zod'
import { delay } from '@/utils/delay'
import { useSession, signOut } from 'next-auth/react'
import axios from 'axios'

export default function CreateEventForm() {

    const router = useRouter()
    const { data: session } = useSession()

    // Event Details Form
    const [createEventFormValues, setCreateEventFormValues] = useState<CreateEventForm>(defaultCreateEventFormDetails)
    const [formStatus, setFormStatus] = useState<"IDLE" | "SUCCESS" | "ERROR" | "LOADING">("IDLE")

    const {
        localDateTime, cityCountry, venue, maxAttendance, name
    } = createEventFormValues as Event

    function handleCreateEventFormChange(event: any) {
        const key = event.target.name
        let value = event.target.value
        setCreateEventFormValues({ ...createEventFormValues, [key]: value })
    }

    // Form Submission

    const handleFormSubmit = async (event: any) => {
        event.preventDefault()
        setFormStatus("LOADING")

        // Add organiser to form 
        if (!session?.user?.email) throw new Error("Must be signed in to create an event")
        const email = session.user.email

        setCreateEventFormValues({
            ...createEventFormValues,
            organiserEmail: email,
        })

        // zod parsing pre API submission
        const coerceNumber = z.coerce.number()
        const parsedCreateEventDetails = {
            ...createEventFormValues,
            maxAttendance: coerceNumber.parse(maxAttendance)
        }
        zodCreateEventFormRequest.parse(parsedCreateEventDetails)

        // Call to API
        // TODO: React Query?
        let response;
        try {
            response = await axios.post('/api/event', {
                createEventFormValues
            })
        } catch {
            setFormStatus("ERROR")
        }

        if (response?.status && response.status < 300) {
            setFormStatus("SUCCESS")

            // Show toast for 3 seconds
            await delay(3000)

            // Now redirect
            // @ts-ignore
            document?.getElementById('create_event_modal')?.close()
            router.push(`/event/${response.data.newEvent.id}`)
        } else {
            // error stuff
            setFormStatus("ERROR")
        }

        setFormStatus("IDLE")
    }

    return <>
        {
            formStatus === "SUCCESS" &&
            <div className="toast-center">
                <div className="alert alert-info flex flex-col items-start">
                    <span>Success!</span>
                    <span>Redirecting you to your new event =D</span>
                </div>
            </div>
        }

        <form className='flex flex-col gap-4' onSubmit={handleFormSubmit}>
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
                min={new Date().toString()}
                required

                // TODO: Issues with date
                value={localDateTime}
                name='localDateTime'
                onChange={handleCreateEventFormChange}
            />

            <TextInput
                required
                id="cityCountry"
                label='City, Country'
                type='text'
                value={cityCountry}
                name='cityCountry'
                minLength={3}
                onChange={handleCreateEventFormChange}
            />

            <TextInput
                required
                id="venue"
                label='Venue'
                type='text'
                value={venue}
                name='venue'
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