import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/global/header/Header'
import Providers from './Providers'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/authOptions'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({ children }: { children: React.ReactNode }) {

    const session = getServerSession(authOptions)

    return <html lang="en">
        <body className={inter.className}>
            <Providers session={session}>
                <Header />
                {children}
            </Providers>
        </body>
    </html>
}
