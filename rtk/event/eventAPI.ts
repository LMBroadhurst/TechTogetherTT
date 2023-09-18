import { Event } from "@prisma/client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventApiAlice = createApi({
    reducerPath: "eventAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/event" }),
    tagTypes: ["eventAPI"],
    endpoints: (builder) => ({

        // GET
        getAllEvents: builder.query<Event[], null>({
            query: () => ``,
        }),

        // POST
        postEvent: builder.mutation<Event, Event>({
            query: (event: Event) => ({ method: 'POST', url: '', body: event}),
            invalidatesTags: ['eventAPI']
        })

    }),
    
});

export const {
    useGetAllEventsQuery, 
    usePostEventMutation
} = eventApiAlice

