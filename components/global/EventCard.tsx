/* eslint-disable @next/next/no-img-element */
import React, {FC} from 'react'
// import EventCardDefault from '@/assets/EventCardDefault.jpg'
// import {Event} from '@/types/event'
// import {SmallDashOutlined, LinkOutlined, BookOutlined} from "@ant-design/icons"
import Link from 'next/link'

type OwnProps = {
    event?: Event;
}

const EventCard: FC<OwnProps> = ({event}) => {

    return (
        <section 
            className="flex flex-col bg-slate-100 rounded-xl border-[1px] shadow-md min-w-[300px] max-w-[350px] hover:bg-slate-200 hover:cursor-pointer"
            // href={`/event/${encodeURIComponent(event.eventId)}`}
        >
            
            <img 
                alt='friends'
                className='rounded-t-xl overflow-hidden' 
                // src={EventCardDefault.src}
            />

            <section className="flex flex-col gap-3 p-3 md:justify-between">
                <section>
                    {/* <h2 className='text-xl text-slate-600 font-extrabold'>{event.name ?? "Typescript for beginners"}</h2> */}
                    <section className='flex flex-col text-sm font-semibold text-slate-600'>
                        {/* <span className=''>{event.startDateTime ?? "Sunday 9th June, 19:00PM"}</span>  */}
                        {/* <span>{event.startDateTime ?? "London, UK"}</span> */}
                    </section>
                </section>

                <section className='flex flex-row justify-between items-center'>
                    <section className="flex flex-col">
                        {/* <h3 className='text-sm text-slate-600'>{event.community?.name ?? "React FE Education"}</h3> */}
                        {/* <h4 className='text-xs text-slate-400'>{event.attendance.attendeesInPerson ?? "23"} people are attending</h4> */}
                    </section>

                    <section className='self-end flex flex-row gap-3 p-2 text-xl'>
                        {/* <LinkOutlined className='w-5' /> */}

                        {/* <BookOutlined className='w-5' /> */}
                    </section>
                </section>

            </section>
        </section>
    )
}

export default EventCard;