'use client'
import React from "react";
import { HContainer } from "../Containers";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { BiCog } from 'react-icons/bi'
import { smallMagnifyingGlass } from '@/utils/icons'
import DEFAULT from '@/assets/TECHDEFAULT.jpg'
import Image from 'next/image'

export default function TabletDesktopMenu() {

    // Authentication
    const { data: session } = useSession()
    const handleClickLogout = () => signOut()



    return <HContainer className='items-center gap-5 hidden md:flex'>
        {
            // Maybe change so that it only says Create Event... But if not logged in must be logged in first
            session?.id ? (
                <button
                    className="btn btn-sm"
                    // @ts-ignore
                    onClick={() => document.getElementById('create_event_modal').checked = true}
                >
                    Create Event
                </button>
            ) : <Link href='/auth' className='btn btn-ghost'>Login</Link>
        }

        <section className='join'>
            <input type="text" placeholder="Search for Events" className="input input-bordered w-full max-w-xs input-sm join-item" />
            <button className='btn btn-sm btn-square join-item p-1'>{smallMagnifyingGlass}</button>
        </section>

        <section className='avatar w-8 h-8 rounded border'>
            <Image
                src={DEFAULT.src}
                width='32'
                height='32'
                alt='avatar'
                className='avatar'
            />
        </section>

        <details className="dropdown dropdown-bottom dropdown-end">
            <summary className="btn btn-square btn-ghost text-2xl"><BiCog /></summary>
            <ul className="p-2 menu dropdown-content z-[1] bg-base-100 shadow w-52 rounded-md">
                <li>
                    <Link href='/'>Home</Link>
                </li>

                <li className='whitespace-nowrap'>
                    <Link href='/events' className='whitespace-nowrap'>Events</Link>
                </li>

                <li className='whitespace-nowrap'>
                    <Link href='/profile' className='whitespace-nowrap'>Your Profile</Link>
                </li>

                <li>
                    {session?.id ? <button onClick={handleClickLogout}>Logout</button> : <Link href='/auth'>Login</Link>}
                </li>
            </ul>
        </details>
    </HContainer>
}