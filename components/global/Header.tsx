import { burgerMenu } from '@/utils/icons';
import Link from 'next/link';
import React, {FC} from 'react'

type OwnProps = {};

const Header: FC<OwnProps> = ({}) => {


  return <header className='border-b w-full shadow-md sticky top-0 z-10 bg-base-100'>
    <section className='flex flex-row justify-between items-center p-4 text-2xl text-slate-800 '>
      <h1 className='font-extrabold'>TechTogether</h1>

      {/* Burger Menu */}
      <section className='dropdown dropdown-end'>
        <button className='btn btn-square btn-ghost' tabIndex={0}>{burgerMenu}</button>
        
        <ul tabIndex={0} className='dropdown-content menu bg-base-100 z-10 rounded-box border-[0.5px] shadow'>
          <li>
            <Link href='/'>Home</Link>
          </li>

          <li>
            <Link href='/'>Settings</Link>
          </li>

          <li>
            <Link href='/auth'>Login</Link>
          </li>
        </ul>
      </section>

    </section>
  </header>
}

export default Header