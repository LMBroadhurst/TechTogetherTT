import { useSession } from 'next-auth/react'
import React from 'react'

const ProfileAboutMe = () => {

    const {data: session} = useSession()

    return <section className='flex flex-row justify-between gap-20 items-center'>
        <section className='flex flex-col gap-2'>
            <section className='flex flex-row'>
                <h2 className='text-lg font-bold'>About Me</h2>
                <></>
            </section>
            <p className='text-sm'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio placeat dolorum nostrum, minima quas cupiditate 
                hic quia fugiat tempore? Similique qui eligendi consectetur pariatur ad minima veritatis, illo laudantium excepturi.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio placeat dolorum nostrum, minima quas cupiditate 
                hic quia fugiat tempore? Similique qui eligendi consectetur pariatur ad minima veritatis, illo laudantium excepturi.
            </p>
        </section>

        <section className='border shadow bg-base-200 w-full h-full flex-grow p-5 flex flex-col justify-between items-center'>
            <div className='w-20 h-20 border'></div>
            <h3 className='text-sm'>{session?.user?.name}</h3>
        </section>
    </section>
}

export default ProfileAboutMe