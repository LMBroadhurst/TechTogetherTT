import {Person} from '@/types/person'
import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../store'

type PersonState = {
    loggedInPerson?: Person;
}

const initialState: PersonState = {
    loggedInPerson: undefined
};

const personSlice = createSlice({
    name: "person",
    initialState,
    reducers: {
        loginPerson(state, action: PayloadAction<Person>) {
            state.loggedInPerson = action.payload
        },
        logoutPerson(state) {
            state.loggedInPerson = undefined
        }
    },
});

export const {
    loginPerson,
    logoutPerson
} = personSlice.actions

export default personSlice.reducer

const selectLoggedInPerson = (state: RootState) => state.person.loggedInPerson

export {
    selectLoggedInPerson
}