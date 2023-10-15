import { User, Event } from '@prisma/client'

type CreateEventForm = {
    name: string
    localDateTime: string
    cityCountry: string
    venue: string
    maxAttendance: number
    description?: string
    organiserEmail: string
}

const defaultCreateEventFormDetails: CreateEventForm = {
    name: '',
    localDateTime: '',
    cityCountry: '',
    venue: '',
    maxAttendance: 0,
    description: '',
    organiserEmail: '',
}

export {
    defaultCreateEventFormDetails
}

export type {
    CreateEventForm
}