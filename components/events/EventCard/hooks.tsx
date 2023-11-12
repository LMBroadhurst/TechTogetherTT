import { UserEvent } from "@prisma/client";

export function useRenderNumberOfAttendees(userEvents: UserEvent[]) {

    let attendeesString: string = ''
    let numberOfAttendees: number = 0

    const usersAttendingEvent = userEvents.filter((userEvent: UserEvent) => userEvent.attendanceStatus === 'ATTENDING')
    numberOfAttendees = usersAttendingEvent?.length ?? 0

    if (numberOfAttendees === 0) {
        attendeesString = 'No attendees yet. Be the first!'
    }
    else if (numberOfAttendees === 1) {
        attendeesString = `${numberOfAttendees} attendee`
    }
    else {
        attendeesString = `${numberOfAttendees} attendees`
    }

    return {
        numberOfAttendees,
        attendeesString
    }
}