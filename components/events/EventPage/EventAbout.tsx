import React from "react";
import { VContainer } from "../../global/Containers";
import { Event } from "@prisma/client";

export default function EventAbout({ event }: { event: Event }) {

    return <VContainer className='gap-1'>
        <h2 className='text-lg text-slate-600'>About &quot;{event.name}&quot;</h2>

        <p className='text-sm text-slate-500'>{true ? "This event doesn't yet have a description.\nIf you are the event organiser, please consider adding one to get other TechTogether members excited about your event." : 'The events description'}</p>
    </VContainer>
}