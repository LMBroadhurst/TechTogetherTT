'use client'
import CreateEventForm from "@/components/events/CreateEvent/CreateEventForm/CreateEventForm"
import CreateEventHero from "@/components/events/CreateEvent/CreateEventHero"
import React from "react"

const CreateEventPage = () => {

    return <main className="flex flex-col justify-center items-center p-20 max-w-[800px] mx-auto">
        <CreateEventHero />
        <div className="divider"></div>
        <CreateEventForm />
    </main>
}

export default CreateEventPage