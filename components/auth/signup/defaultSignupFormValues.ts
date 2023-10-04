import { Person } from "@/types/person";

type DefaultSignupForm = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const defaultSignupForm: Person = {
    personId: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}

export {
    defaultSignupForm
}

export type {
    DefaultSignupForm
}