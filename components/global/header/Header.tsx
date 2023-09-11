import Link from 'next/link';
import React, {FC} from 'react'
import BurgerMenu from './BurgerMenu'
import { smallMagnifyingGlass } from '@/utils/icons';
import { HContainer } from '../Containers';
import DEFAULT from '@/assets/TECHDEFAULT.jpg'
import Image from 'next/image';

type OwnProps = {};

const Header: FC<OwnProps> = ({}) => {


  return <header className='border-b w-full shadow-md sticky top-0 z-10 bg-base-100'>
    <section className='flex flex-row justify-between items-center p-4 text-2xl text-slate-800 '>
      
      <h1 className='font-extrabold'>TechTogether</h1>

      {/* Burger Menu */}
      <BurgerMenu className='md:hidden' />

      <HContainer className='items-center gap-5'>
        <section className='join'>
          <input type="text" placeholder="Search for Events" className="input input-bordered w-full max-w-xs input-sm join-item" />
          <button className='btn btn-sm btn-square join-item'>{smallMagnifyingGlass}</button>
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
      </HContainer>
    </section>
  </header>
}

export default Header