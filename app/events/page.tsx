"use client"
import EventFilterForm from '@/components/events/EventFilterForm'
import { VContainer } from '@/components/global/Containers'
import React, { Suspense, useCallback, useEffect, useState } from 'react'
import EventsSuspenseBoundarySSR from '@/components/events/EventGetters/EventsSSR'
import EventsSuspenseBoundaryCSR from '@/components/events/EventGetters/EventsSuspenseBoundaryCSR'
import { FilterEventFormFields } from '@/components/events/hooks'

export default function EventsPage() {

    const [form, setForm] = useState<FilterEventFormFields>({
        name: '',
        location: '',
        technologies: [],
        ticketsAvailable: true
    })

    const handleFormChange = (formValue: any) => {
        const input = formValue.target.name
        const value = formValue.target.value
        const checked = formValue.target.checked

        if (input === "ticketsAvailable") {
            setForm({
                ...form, ticketsAvailable: checked
            })
        } else {
            setForm({
                ...form, [input]: value
            })
        }
    }

    return <main className='flex flex-col gap-16 px-5 py-20 md:p-20 lg:flex-row lg:mx-auto xl:w-[1300px]'>

        <section className='flex flex-col gap-6 border shadow-md rounded-lg p-5 sticky self-start lg:w-1/4'>
            <VContainer className='flex flex-col gap-0'>
                <h2 className='text-lg font-semibold text-slate-500'>Lewis,</h2>
                <h3 className='text-xl font-bold text-slate-600'>Where are you going next?!</h3>
            </VContainer>

            <EventFilterForm handleFormChange={handleFormChange} />
        </section>

        <section className='flex flex-row flex-wrap gap-6 lg:w-3/4'>
            <EventsSuspenseBoundaryCSR form={form} />
            {/* <EventsSuspenseBoundary /> */}
        </section>
    </main>
}