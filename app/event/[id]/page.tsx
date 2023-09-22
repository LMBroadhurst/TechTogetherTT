'use client'
import { Event } from '@prisma/client'
import React, { useEffect, useState, useCallback } from 'react'

const Event = ({params} : {params: {id: number}}) => {

    const [event, setEvent] = useState<Event>()

    const eventApiCall = useCallback(async () => {
        const response = await fetch(`/api/event/${params.id}`).then(res => res.json())
        setEvent(response)
    }, [params])

    useEffect(() => {
        eventApiCall()
    }, [eventApiCall])


    if (!event) return 'Loading...'

    return (<>
        <div>page: {params.id}</div>
        <pre>{event.name}</pre>
    </>
    )
}

export default Event