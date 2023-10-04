import { Event } from "@prisma/client";

const defaultCreateEventFormDetails: Event = {
    id: '',
    name: '',
    location: '',
    maxAttendance: 0,
    localDateTime: new Date()
}

export {
    defaultCreateEventFormDetails
}