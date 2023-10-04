'use client'
import LoginFormView from '@/components/auth/login/LoginFormView'
import React from 'react'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'


export default function Auth() {

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
