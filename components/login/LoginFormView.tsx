import React, { FC, useRef, useState } from 'react'
import { LoginCredentials } from '@/types/person'
import LoginFormHeader from './LoginFormHeader'
import { defaultLoginForm } from './defaultLoginFormValues'
import { loginPerson } from '@/rtk/person/personState'
import { useDispatch } from 'react-redux'



const LoginForm: FC = () => {

    // Hooks
    const dispatch = useDispatch()

    // LoginForm API Code
    // const [loginTrigger, {isSuccess, isLoading, isError, data}] = useLoginMutation()
    const handleClickLogin = async () => {
        // const response = await loginTrigger(loginDetails).unwrap()
        // dispatch(loginPerson(response))
        // navigate({ to: "/home", params: data})
    }

    // Toggle Modal Related Code
    const [openModal, setOpenModal] = useState<boolean>(false)
    const handleToggleModal = () => setOpenModal(!openModal)

    // Form Related Code
    // TODO: Think how I can further abstract forms. Think password code can easily be moved to TextInput
    const [loginDetails, setLoginDetails] = useState<LoginCredentials>(defaultLoginForm)
    const { email, password } = loginDetails
    
    const handleLoginFormChange = (event: any) => {
        const key = event.target.name
        const value = event.target.value
        setLoginDetails({...loginDetails, [key]: value})
    }

    const [isPassword, setIsPassword] = useState<boolean>(true)
    const handlePasswordToggleClick = () => setIsPassword(!isPassword)
    
    return <section className='flex flex-col gap-4 max-w-lg my-1 m-auto'>
        <LoginFormHeader />

        {/* <VContainer className='gap-4'>
            <form className='flex flex-col gap-4'>
                <TextInput 
                    id="loginEmail" label='Email' inputType='text' value={email} 
                    apiProperty='email' onChange={handleLoginFormChange}
                />

                <TextInput 
                    id="loginPassword" label='Password' inputType={isPassword ? 'password' : 'text'} value={password}
                    isPasswordInput 
                    apiProperty='password'
                    passwordStatus={isPassword}
                    onChange={handleLoginFormChange}
                    onPasswordTextToggle={handlePasswordToggleClick}
                />
                

                <Button 
                    type='button'
                    rounded='lg'
                    onClick={handleClickLogin}
                >
                    {!isError ? (isLoading ? "..." : "Login") : "Something went wrong :("}
                </Button>
            </form>

            <span 
                className='text-center -mt-1 text-slate-500 underline hover:cursor-pointer'
                onClick={handleToggleModal}
            >
                I don't have a login yet...
            </span>
        </VContainer>

        <Modal isVisible={openModal} toggleVisibility={handleToggleModal} showCloseTab>
            <SignupFormView />
        </Modal> */}
    </section>
}

export default LoginForm