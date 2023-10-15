import { z } from 'zod'

const zodCreateEventFormRequest = z.object({
    name: z.string(),
    localDateTime: z.string(),
    cityCountry: z.string(),
    venue: z.string(),
    maxAttendance: z.number(),
    description: z.string() || z.undefined(),
    organiserEmail: z.any(),
})

export {
    zodCreateEventFormRequest
}