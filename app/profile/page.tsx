'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import DEFAULT from '@/assets/TECHDEFAULT.jpg'
import React from 'react'
import { UserEventsContainer } from '@/components/profile/UserEventsContainer'

const Profile = () => {

    // Authentication
    const router = useRouter()
    const {data: session} = useSession()

    if (!session) {
        router.push('/auth')
    }

    
    return <main className='flex flex-col gap-14 px-5 py-20 md:p-20 lg:px-40 xl:px-96'>

        <UserEventsContainer />
        
        <section>
          <h2 className='text-lg font-semibold text-slate-500'>{session?.user?.name},</h2> 
          <h3 className='text-xl font-medium text-slate-600'>This is your TechTogether profile. Cutomise it to your liking.</h3>
        </section>

        <section className='flex flex-row justify-between gap-20 items-center'>
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

        <section className='flex flex-col gap-2'>
            <section className='flex flex-row'>
                <h2 className='text-lg font-bold'>Favourite Tech Stack</h2>
                <></>
            </section>
                <p className='text-sm'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio placeat dolorum nostrum, minima quas cupiditate 
                    hic quia fugiat tempore? Similique qui eligendi consectetur pariatur ad minima veritatis, illo laudantium excepturi.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio placeat dolorum nostrum, minima quas cupiditate 
                    hic quia fugiat tempore? Similique qui eligendi consectetur pariatur ad minima veritatis, illo laudantium excepturi.
                </p>
                <p className='text-sm'>Typescript -- Redux -- Java -- React -- etc.</p>
        </section>

        <section className='flex flex-col gap-2'>
            <section className='flex flex-row'>
                <h2 className='text-lg font-bold'>Recently Attended Events</h2>
                <></>
            </section>
                <p className='text-sm'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio placeat dolorum nostrum, minima quas cupiditate 
                    hic quia fugiat tempore? Similique qui eligendi consectetur pariatur ad minima veritatis, illo laudantium excepturi.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio placeat dolorum nostrum, minima quas cupiditate 
                    hic quia fugiat tempore? Similique qui eligendi consectetur pariatur ad minima veritatis, illo laudantium excepturi.
                </p>
        </section>

        <section className='flex flex-col gap-2'>
            <section className='flex flex-row'>
                <h2 className='text-lg font-bold'>Event Reviews</h2>
                <></>
            </section>
                <p className='text-sm'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio placeat dolorum nostrum, minima quas cupiditate 
                    hic quia fugiat tempore? Similique qui eligendi consectetur pariatur ad minima veritatis, illo laudantium excepturi.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio placeat dolorum nostrum, minima quas cupiditate 
                    hic quia fugiat tempore? Similique qui eligendi consectetur pariatur ad minima veritatis, illo laudantium excepturi.
                </p>
        </section>

    </main>
}

export default Profile