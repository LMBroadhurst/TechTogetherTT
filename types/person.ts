import { Preferences } from "./preferences";

type Person = {
    personId: number,
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
    location?: string,
    dateOfBirth?: string,
    joinDate?: string,
    preferences?: Preferences,
}

type LoginCredentials = {
    email: string;
    password: string;
}

export type {
    Person,
    LoginCredentials
}