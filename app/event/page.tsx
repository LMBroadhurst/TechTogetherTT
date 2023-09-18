'use client'
import { HContainer, VContainer } from '@/components/global/Containers'
import React from 'react'

const Event = () => {

  
  return <main className='flex flex-col gap-16 px-5 py-20 md:p-20 lg:flex-row lg:mx-auto xl:w-[1300px]'>
    <section className='flex flex-col gap-1 border shadow-md rounded-lg p-5 w-full'>
        <VContainer className='flex flex-col gap-0 w-full'>
            <h1 className='text-2xl font-semibold text-slate-500'>Next.JS is really cool!</h1> 
            <h4>London, UK</h4>
        </VContainer>

        <div className='divider'></div>
  </section>
</main>
}

export default Event