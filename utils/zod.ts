import { z } from 'zod'

const zodCreateEventFormRequest = z.object({
    name: z.string(),
    localDateTime: z.string(),
    location: z.string(),
    maxAttendance: z.number()
})

export {
    zodCreateEventFormRequest
}