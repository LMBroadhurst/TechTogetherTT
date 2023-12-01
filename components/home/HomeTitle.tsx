'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

const HomeTitle = () => {

    // Authentication
    const { data: session } = useSession()

    return <section className='flex flex-col gap-4'>
        <section>
            <h2 className='text-lg font-semibold text-slate-500'>{`${session?.user?.name ? session?.user?.name : 'Hey Stranger'}`},</h2>
            <h3 className='text-2xl font-bold text-slate-600'>Let&apos;s connect you with the TechTogether community</h3>
        </section>

        <p>
            Our aim is to get people like you together, online or in person.
            We provide a space to organise those events that will <span className='text-blue-900 font-bold'>help you to find Hackathon teams, mentors, fellow enthusiasts, and more.</span>
        </p>

        <button className='rounded bg-slate-700 text-white p-2 self-start'>Find an Event</button>
    </section>
}

export default HomeTitle