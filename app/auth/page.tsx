'use client'
import LoginFormView from '@/components/login/LoginFormView'
import React from 'react'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const Auth = () => {

  // Authentication Redirect
  const router = useRouter()
  const {data: session} = useSession()

  if (session) {
    router.push('/')
  }
  

  return <main className='p-10 py-20'>
    <LoginFormView />
  </main>
}

export default Auth