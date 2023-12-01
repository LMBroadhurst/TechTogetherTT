import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/global/header/Header'
import Providers from './Providers'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/authOptions'
import { headers } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export const dynamic = 'force-dynamic'
export default async function RootLayout({ children }: { children: React.ReactNode }) {

    const headersList = headers();
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
