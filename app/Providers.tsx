'use client'
import React, { PropsWithChildren } from 'react'
import { SessionProvider } from 'next-auth/react'


export default function Providers ({
  children,
  session
}: {
  children: React.ReactNode
  session: any
}): React.ReactNode {

  return <React.StrictMode>
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  </React.StrictMode>
}