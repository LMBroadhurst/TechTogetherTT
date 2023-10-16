'use client'
import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
import BurgerMenu from './BurgerMenu'
import TabletDesktopMenu from './TabletDesktopMenu'
import CreateEventModal from '@/components/create-event/CreateEventModal';

type OwnProps = {};

const Header: FC<OwnProps> = ({}) => {

  const [openModal, setOpenModal] = useState<string | undefined>();

  return <header className='border-b w-full shadow-md sticky top-0 z-10 bg-base-100'>
    <CreateEventModal openModal={openModal} setOpenModal={setOpenModal} />

    <section className='flex flex-row justify-between items-center p-4 text-2xl text-slate-800 '>
      
      <Link href={"/"}>
        <h1 className='text-slate-700 font-bold'>TechTogether</h1>
      </Link>

      {/* Burger Menu */}
      <BurgerMenu className='md:hidden' />

      <TabletDesktopMenu setOpenModal={setOpenModal} />
    </section>
  </header>
}

export default Header