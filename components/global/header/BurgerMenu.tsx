import Link from 'next/link'
import React, { FC } from 'react'
import { burgerMenu } from '@/utils/icons';

type OwnProps = {
    className: string;
}

const BurgerMenu: FC<OwnProps> = ({className}) => {

  return <section className={`dropdown dropdown-end ${className}`}>
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
}

export default BurgerMenu