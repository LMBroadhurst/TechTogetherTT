'use client'
import React, { FC, useState } from 'react'
import LoginFormHeader from './LoginFormHeader'
import { defaultLoginForm } from './defaultLoginFormValues'
import { VContainer } from '../../global/Containers'
import TextInput from '../../global/TextInput'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const LoginFormView: FC = () => {

    // Hooks
    // Authentication Redirect
    const router = useRouter()
    const { data: session } = useSession()

    // if (session?.user?.name) {
    //     router.push('/')
    // }

    // LoginForm API Code
    const handleClickGoogleLogin: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault()
        console.log("Google Login...")

        await signIn("google")
    }

    // Toggle Modal Related Code
    // @ts-ignore
    const handleOpenModal: React.MouseEventHandler<HTMLButtonElement> = () => document.getElementById('signupModal').showModal()

    // Form Related Code
    // TODO: Think how I can further abstract forms. Think password code can easily be moved to TextInput
    const [loginDetails, setLoginDetails] = useState(defaultLoginForm)
    const { email, password } = loginDetails

    const handleLoginFormChange = (event: any) => {
        const key = event.target.name
        const value = event.target.value
        setLoginDetails({ ...loginDetails, [key]: value })
    }

    const [isPassword, setIsPassword] = useState<boolean>(true)
    const handlePasswordToggleClick = () => setIsPassword(!isPassword)

    return <section className='flex flex-col gap-4 max-w-lg my-1 m-auto'>
        <LoginFormHeader />

        <VContainer className='gap-4'>
            <form className='flex flex-col gap-4'>
                {/* <TextInput
                    id="loginEmail" label='Email' type='text' value={email}
                    onChange={handleLoginFormChange}
                />

                <TextInput
                    id="loginPassword" label='Password' type={isPassword ? 'password' : 'text'} value={password}
                    isPasswordInput
                    passwordStatus={isPassword}
                    onChange={handleLoginFormChange}
                    onPasswordTextToggle={handlePasswordToggleClick}
                /> */}


                {/* <button
                    className='btn'
                    type='button'
                    onClick={handleClickGoogleLogin}
                >
                    Login
                </button> */}

                <div className='divider'></div>

                <button
                    className='btn'
                    type='button'
                    onClick={handleClickGoogleLogin}
                >
                    Login/Register with Google
                </button>

                {/* <button
                    className='btn'
                    type='button'
                    onClick={handleClickGoogleLogin}
                >
                    Login with GitHub
                </button> */}
            </form>

            {/* <button
                className='btn btn-link text-center -mt-1 text-neutral'
                onClick={handleOpenModal}
            >
                I don&apos;t have a login yet...
            </button> */}
        </VContainer>

        {/* <dialog id="signupModal" className="modal">
            <div className="modal-box">
                <SignupFormView />
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog> */}
    </section>
}

export default LoginFormView