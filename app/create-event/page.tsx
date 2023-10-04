'use client'
import CreateEventForm from "@/components/create-event/create-event-form/CreateEventForm"
import CreateEventHero from "@/components/create-event/CreateEventHero"
import React from "react"

const CreateEventPage = () => {

    return <main className="flex flex-col justify-center items-center gap-10 p-20">
        <CreateEventHero />
        <div className="divider"></div>
        <CreateEventForm />
    </main>
}

export default CreateEventPage