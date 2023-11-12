"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

export default function ProfileHeader() {

    const { data: session } = useSession()

    return <section>
        <h2 className='text-lg font-semibold text-slate-500'>{session?.user?.name},</h2>
        <h3 className='text-xl font-medium text-slate-600'>This is your TechTogether profile. Cutomise it to your liking.</h3>
    </section>


}