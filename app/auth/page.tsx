"use client"
import LoginFormView from '@/components/auth/login/LoginFormView'
import React from 'react'

export default function Auth() {

    return <main className='p-10 py-20'>
        <LoginFormView />
    </main>
}

export const dynamic = 'force-dynamic'