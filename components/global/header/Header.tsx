'use client'
import Link from 'next/link'
import React, { FC, useEffect } from 'react'
import BurgerMenu from './BurgerMenu'
import { smallMagnifyingGlass } from '@/utils/icons'
import { HContainer } from '../Containers'
import DEFAULT from '@/assets/TECHDEFAULT.jpg'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react'
import { BiCog } from 'react-icons/bi'


type OwnProps = {};

const Header: FC<OwnProps> = ({}) => {

  // Authentication
  const {data: session, status} = useSession()
  const handleClickLogout = () => signOut()

  console.log(session)

  return <header className='border-b w-full shadow-md sticky top-0 z-10 bg-base-100'>
    <section className='flex flex-row justify-between items-center p-4 text-2xl text-slate-800 '>
      
      <Link href={"/"}>
        <h1 className='font-extrabold'>TechTogether</h1>
      </Link>

      {/* Burger Menu */}
      <BurgerMenu className='md:hidden' />

      <HContainer className='items-center gap-5 hidden md:flex'>
        {
          session ? <Link href='/create-event' className='btn btn-sm'>Create Event</Link>
          : <Link href='/auth' className='btn btn-ghost'>Login</Link>
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
              {session ? <button onClick={handleClickLogout}>Logout</button> : <Link href='/auth'>Login</Link>}
            </li>
          </ul>
        </details>
      </HContainer>
    </section>
  </header>
}

export default Header