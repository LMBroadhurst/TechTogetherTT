import { Person, LoginCredentials } from "@/types/person";
import { Event } from "@prisma/client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventApiAlice = createApi({
    reducerPath: "eventApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/event" }),
    tagTypes: ["personAPI"],
    endpoints: (builder) => ({

        // POST
        getAllEvents: builder.query<Event[], null>({
            query: () => ``,
        }),

    }),
    
});

export const {
    useGetAllEventsQuery
} = eventApiAlice

