'use client'
import React, { PropsWithChildren } from 'react'
import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function Providers ({
  children,
  session
}: {
  children: React.ReactNode
  session: any
}): React.ReactNode {

  return <React.StrictMode>
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </SessionProvider>
  </React.StrictMode>
}