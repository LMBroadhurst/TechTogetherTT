import { Person, LoginCredentials } from "@/types/person";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const personApiSlice = createApi({
    reducerPath: "personApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/person" }),
    tagTypes: ["personAPI"],
    endpoints: (builder) => ({

        // POST
        postPerson: builder.mutation<Person, Person>({
            query: (person: Person) => ({ method: "POST", url: `person/postPerson`, body: person}),
            invalidatesTags: ["personAPI"],
            transformResponse: (returnValue: Person) => returnValue
        }),

        // GET
        getAllPerson: builder.query<Person[], null>({
            query: () => `person/getAllPerson`
        }),

        // DEPRECATED

        deletePerson: builder.mutation<void, number>({
            query: (id: number) => `person/deletePerson/${id}`
        }),

        putPerson: builder.mutation<Person, Person>({
            query: (person: Person) => ({ url: `person/putPerson`, body: person})
        }),

        getPerson: builder.query<Person, number>({
            query: (id) => `person/getPerson/${id}`
        }),

        
    }),
    
});

export const {
    useGetPersonQuery,
    useGetAllPersonQuery,
    usePostPersonMutation,
    useDeletePersonMutation,
    usePutPersonMutation
} = personApiSlice;

