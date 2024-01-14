'use client'
import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
import BurgerMenu from './BurgerMenu'
import TabletDesktopMenu from './TabletDesktopMenu'
import { useSession } from 'next-auth/react'

type OwnProps = {};

const Header: FC<OwnProps> = ({ }) => {

    const { data: session } = useSession()
    console.log(session)

    return <header className='border-b w-full shadow-md sticky top-0 z-10 bg-base-100'>
        <section className='md:w-[1300px] mx-auto'>

            <section className='w-full flex flex-row justify-between items-center p-4 text-2xl text-slate-800 '>
                <Link href={"/"}>
                    <h1 className='text-slate-700 font-bold'>TechTogether</h1>
                </Link>

                {/* Burger Menu */}
                <BurgerMenu className='md:hidden' />

                <TabletDesktopMenu />
            </section>

        </section>
    </header>
}

export default Header