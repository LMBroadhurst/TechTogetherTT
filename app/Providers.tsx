'use client'
import React, { PropsWithChildren } from 'react'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import { store } from '@/rtk/store'


export default function Providers ({
  children,
  session
}: {
  children: React.ReactNode
  session: any
}): React.ReactNode {

  return <React.StrictMode>
    <Provider store={store}>
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
    </Provider>
  </React.StrictMode>
}