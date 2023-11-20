import React, { FC, useState } from 'react'
import { defaultSignupForm } from './defaultSignupFormValues'
import SignupFormHeader from './SignupFormHeader'
// import { usePostPersonMutation } from '@/rtk/person/personAPI'
import { VContainer } from '../../global/Containers'
import TextInput from '../../global/TextInput'


const SignupFormView: FC = ({ }) => {

    // SignupFrom API Code
    // const [signupTrigger, {data, isLoading, isSuccess, isError}] = usePostPersonMutation()

    const handleClickSignup = async () => {
        // const response = await signupTrigger(signupDetails).unwrap()
        // console.log(response)

        // console.log(data)
    }

    // Form Related Code
    const [signupDetails, setSignupDetails] = useState(defaultSignupForm)
    const [isPassword, setIsPassword] = useState<boolean>(true)
    const handlePasswordToggleClick = () => setIsPassword(!isPassword)

    const { firstName, lastName, email, password } = signupDetails

    const handleSignupFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const key = event.target.name
        const value = event.target.value
        setSignupDetails({ ...signupDetails, [key]: value })
    }



    return (
        <section className='flex flex-col gap-4 max-w-lg my-1 m-auto'>
            <SignupFormHeader />

            <VContainer className='gap-4'>
                <form className='flex flex-col gap-2 items-stretch' onSubmit={handleClickSignup}>

                    <TextInput
                        id="signupFirstName" label='First Name' type='text' value={firstName}
                        onChange={handleSignupFormChange}
                    />

                    <TextInput
                        id="signupLastName" label='Last Name' type='text' value={lastName}
                        onChange={handleSignupFormChange}
                    />

                    <TextInput
                        id="signupEmail" label='Email' type='text' value={email}
                        onChange={handleSignupFormChange}
                    />

                    <TextInput
                        id="signupPassword" label='Password' type={isPassword ? 'password' : 'text'} value={password}
                        isPasswordInput
                        passwordStatus={isPassword}
                        onChange={handleSignupFormChange}
                        onPasswordTextToggle={handlePasswordToggleClick}
                    />

                    <button type="submit" className='btn' onClick={handleClickSignup}>
                        {/* {!isError ? (isLoading ? "..." :  */}
                        Join TechTogether
                        {/* ) : "Something went wrong :("} */}
                    </button>
                </form>
            </VContainer>
        </section>
    )
}

export default SignupFormView;