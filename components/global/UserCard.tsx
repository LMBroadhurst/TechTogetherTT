import { User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import DEFAULT from '@/assets/TECHDEFAULT.jpg'

export default function UserCard({user} : {user?: User}) {

    return <article className='flex flex-col items-center justify-between gap-1 shadow-sm p-2 bg-slate-100 rounded-md'>
        <figure className='h-12 w-12 border overflow-hidden rounded-full object-center'>
            <Image
                src={DEFAULT}
                height={48}
                width={48}
                alt='Picture of user'
                className=''
            />
        </figure>

        <span className='text-xs font-bold text-slate-500'>{user?.name ?? 'Person A'}</span>
    </article>
}