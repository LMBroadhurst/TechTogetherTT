import React from 'react'
import { Event, UserEvent } from '@prisma/client'
import EventCardSSR from '../events/EventCard/EventCard'

export default function ProfileEventsContainer({ eventData, userEventData }: { eventData: Event[], userEventData: any }) {

    return <section className='flex flex-col gap-2'>

        <section className='flex flex-row'>
            <h2 className='text-lg font-bold'>Your Events</h2>
        </section>

        <section className='flex flex-row gap-10'>
            {
                eventData && eventData?.length > 0 && userEventData && userEventData?.length > 0
                    ? eventData?.map((event: Event) => {
                        return <EventCardSSR
                            event={event}
                            userEvents={userEventData}
                            key={event.id}
                        />
                    })
                    : "You're currently not attending any events. Check out the events page for some inspiration!"
            }
        </section>

    </section>
}