import axios from "axios"

export async function getEventsSSR() {
    const { data } = await axios.get("/api/event")
    console.log('from eventsSSR', data)
    return data
}