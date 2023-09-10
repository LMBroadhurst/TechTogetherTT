import { Person, LoginCredentials } from "@/types/person";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const personApiSlice = createApi({
    reducerPath: "personApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
    tagTypes: ["personAPI"],
    endpoints: (builder) => ({

        getPerson: builder.query<Person, number>({
            query: (id) => `person/getPerson/${id}`
        }),

        getAllPerson: builder.query<Person[], null>({
            query: () => `person/getAllPerson`
        }),

        postPerson: builder.mutation<Person, Person>({
            query: (person: Person) => ({ method: "POST", url: `person/postPerson`, body: person}),
            invalidatesTags: ["personAPI"],
            transformResponse: (returnValue: Person) => returnValue
        }),

        login: builder.mutation<Person, LoginCredentials>({
            query: (loginCredentials: LoginCredentials) => ({ method: "POST", url: `person/login`, body: loginCredentials}),
            invalidatesTags: ["personAPI"]
        }),

        deletePerson: builder.mutation<void, number>({
            query: (id: number) => `person/deletePerson/${id}`
        }),

        putPerson: builder.mutation<Person, Person>({
            query: (person: Person) => ({ url: `person/putPerson`, body: person})
        }),
    }),
    
});

export const {
    useGetPersonQuery,
    useGetAllPersonQuery,
    usePostPersonMutation,
    useLoginMutation,
    useDeletePersonMutation,
    usePutPersonMutation
} = personApiSlice;

