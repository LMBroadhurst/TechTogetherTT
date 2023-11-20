import axios from "axios"

export default async function HomeEventsContainer() {

    const eventResponse = await fetch("http:/localhost:3000/api/event")
    const resolvedData = await eventResponse.json()
    console.log(resolvedData)

    // const userEventResponse = await fetch("http:/localhost:3000/api/userEvent")
    // const resolvedUserEvents = await userEvents.json()

    // const userEventsArray = resolvedUserEvents.userEvents as UserEvent[]
    // console.log(eventsArray, userEventsArray)

    return <></>
}