import { Event } from '@prisma/client'
import moment from 'moment'

type CreateEventForm = {
    name: string
    location: string
    maxAttendance: number
    localDateTime: string
}

const defaultCreateEventFormDetails: CreateEventForm = {
    name: '',
    location: '',
    maxAttendance: 0,
    localDateTime: ''
}

export {
    defaultCreateEventFormDetails
}

export type {
    CreateEventForm
}