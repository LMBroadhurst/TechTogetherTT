"use client"
import React from 'react'
import { useRenderNumberOfAttendees } from './hooks'
import { UserEvent } from '@prisma/client'

export default function AttendeesRenderer({ relatedUserEvents }: { relatedUserEvents: UserEvent }) {

    const { numberOfAttendees, attendeesString } = useRenderNumberOfAttendees(relatedUserEvents)

    return <span>{attendeesString}</span>
}
