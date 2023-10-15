import React from "react";
import { VContainer } from "../global/Containers";
import { Event } from "@prisma/client";

export default function EventHeader({event}: {event: Event}) {

    return <VContainer className='flex flex-col gap-0'>
        <h1 className='text-2xl font-semibold text-slate-500'>{event.name}</h1> 
        {/* <h4 className='text-sm text-slate-500'>{event.location}</h4> */}
        <h4 className='text-sm text-slate-500'>{event.localDateTime}</h4>
    </VContainer>
}