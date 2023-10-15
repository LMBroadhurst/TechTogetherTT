'use client'
import CreateEventForm from "@/components/create-event/create-event-form/CreateEventForm"
import CreateEventHero from "@/components/create-event/CreateEventHero"
import React from "react"

const CreateEventPage = () => {

    return <main className="flex flex-col justify-center items-center p-20 max-w-[800px] mx-auto">
        <CreateEventHero />
        <div className="divider"></div>
        <CreateEventForm />
    </main>
}

export default CreateEventPage