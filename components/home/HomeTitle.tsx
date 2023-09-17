'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

const HomeTitle = () => {

    // Authentication
    const {data: session} = useSession()

    return <section className='flex flex-col gap-10 xl:py-40'>
    <section>
      <h2 className='text-2xl font-semibold text-slate-500'>{session ? `${session.user?.name},` : 'Hey there,'}</h2> 
      <h3 className='text-4xl font-medium text-slate-600'>Let&apos;s connect you with the TechTogether community...</h3>
    </section>

    <p>Our aim is to get people like you together, online or in person. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis, accusantium tempora cupiditate provident sed quisquam impedit neque quae obcaecati, saepe atque vel expedita unde quod et voluptates enim alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, enim!</p>
  </section>
}

export default HomeTitle