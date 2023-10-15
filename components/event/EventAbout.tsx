import React from "react";
import { VContainer } from "../global/Containers";
import { Event } from "@prisma/client";

export default function EventAbout({event}: {event: Event}) {
                
    return <VContainer className='gap-1'>
        <h2 className='text-lg text-slate-600'>About &quot;{event.name}&quot;</h2>

        <p className='text-sm text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum voluptas, dolores enim animi eveniet fugiat itaque ab ratione molestias assumenda aliquam doloribus vitae tempore!</p>
    </VContainer>
}