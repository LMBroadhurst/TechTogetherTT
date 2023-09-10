import React, {FC, useState} from 'react'
import {defaultSignupForm} from './defaultSignupFormValues'
import {Person} from '@/types/person'
import SignupFormHeader from './SignupFormHeader'
import { usePostPersonMutation } from '@/rtk/person/personAPI'

const SignupFormView: FC = ({}) => {

    // SignupFrom API Code
    const [signupTrigger, {data, isLoading, isSuccess, isError}] = usePostPersonMutation()

    const handleClickSignup = async () => {
        const response = await signupTrigger(signupDetails).unwrap()
        console.log(response)

        console.log(data)
    }

    // Form Related Code
    const [signupDetails, setSignupDetails] = useState<Person>(defaultSignupForm)
    const [isPassword, setIsPassword] = useState<boolean>(true)
    const handlePasswordToggleClick = () => setIsPassword(!isPassword)

    const {firstName, lastName, email, password} = signupDetails

    const handleSignupFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const key = event.target.name
        const value = event.target.value
        setSignupDetails({...signupDetails, [key]: value})
    }

    

  return (
    <section className='flex flex-col gap-4 max-w-lg my-1 m-auto'>
        <SignupFormHeader />

        {/* <VContainer className='gap-4'>
            <form className='flex flex-col gap-2 items-stretch' onSubmit={handleClickSignup}>

                <TextInput 
                    id="signupFirstName" label='First Name' inputType='text' value={firstName} 
                    apiProperty='firstName'
                    onChange={handleSignupFormChange}
                />

                <TextInput 
                    id="signupLastName" label='Last Name' inputType='text' value={lastName} 
                    apiProperty='lastName'
                    onChange={handleSignupFormChange}
                />

                <TextInput 
                    id="signupEmail" label='Email' inputType='text' value={email} 
                    apiProperty='email'
                    onChange={handleSignupFormChange}
                />

                <TextInput 
                    id="signupPassword" label='Password' inputType={isPassword ? 'password' : 'text'} value={password}
                    isPasswordInput 
                    apiProperty='password'
                    passwordStatus={isPassword}
                    onChange={handleSignupFormChange}
                    onPasswordTextToggle={handlePasswordToggleClick}
                />

                <Button type="submit" rounded='md' onClick={handleClickSignup}>
                    {!isError ? (isLoading ? "..." : "Join TechTogether") : "Something went wrong :("}
                </Button>
            </form>
        </VContainer> */}
    </section>
  )
}

export default SignupFormView;