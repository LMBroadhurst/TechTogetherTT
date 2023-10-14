'use client'
import Link from 'next/link'
import React, { FC } from 'react'
import { burgerMenu } from '@/utils/icons';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type OwnProps = {
    className: string;
}

const BurgerMenu: FC<OwnProps> = ({className}) => {

    const { data: session } = useSession()
    const router = useRouter()

    const handleAuthClick = () => {
        if (session?.user?.email) {
            signOut()
            router.push('/')
        } else {
            router.push('/auth')
        }
    }

    return <section className={`dropdown dropdown-end ${className}`}>
        <button className='btn btn-square btn-ghost w-10 h-10' tabIndex={0}>{burgerMenu}</button>
        
        <ul tabIndex={0} className='dropdown-content menu bg-base-100 z-10 rounded-box border-[0.5px] shadow'>
            <li>
                <Link href='/'>Home</Link>
            </li>

            <li>
                <Link href='/events'>Events</Link>
            </li>

            <li>
                <Link href='/profile'>Profile</Link>
            </li>

            <li>
                <button onClick={handleAuthClick}>{session?.user?.email ? 'Logout' : 'Login'}</button>
            </li>
        </ul>
    </section>
}

export default BurgerMenu