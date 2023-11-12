import React from "react";
import CreateEventForm from "./CreateEventForm/CreateEventForm";
import CreateEventHero from "./CreateEventHero";

export default function CreateEventModal() {

    return <dialog id="create_event_modal" className="modal">

        <section className="modal-box overflow-hidden p-8">
            <CreateEventHero />
            <div className="divider"></div>
            <CreateEventForm />
        </section>

        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
}