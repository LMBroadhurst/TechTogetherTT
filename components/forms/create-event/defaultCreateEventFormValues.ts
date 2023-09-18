import { Event } from "@prisma/client";

const defaultCreateEventFormDetails: Event = {
    id: 0,
    name: '',
    location: '',
    maxAttendance: 0,
    localDateTime: new Date()
}

export {
    defaultCreateEventFormDetails
}