import { User } from '@prisma/client'

type CreateEventForm = {
    name: string
    cityCountry: string
    venue: string
    maxAttendance: number
    localDateTime: string
    organiser?: User
    organiserEmail: string
}

const defaultCreateEventFormDetails: CreateEventForm = {
    name: '',
    cityCountry: '',
    venue: '',
    maxAttendance: 0,
    localDateTime: '',
    organiser: undefined,
    organiserEmail: ''
}

export {
    defaultCreateEventFormDetails
}

export type {
    CreateEventForm
}