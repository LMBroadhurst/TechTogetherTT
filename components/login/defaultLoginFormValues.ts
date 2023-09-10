type LoginCredentials = {
    email: string;
    password: string;
}

const defaultLoginForm: LoginCredentials = {
    email: "",
    password: ""
}

export {
    defaultLoginForm
}

export type {
    LoginCredentials
}