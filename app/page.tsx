import EventCard from '@/components/global/EventCard'
import React from 'react'

const Home = () => {
  
  return <main className='flex flex-col gap-28 px-5 py-20 md:p-20 lg:px-40 xl:px-96'>
    <section className='flex flex-col gap-1'>
      <h2 className='text-3xl font-semibold text-slate-600'>Lewis,</h2> 
      <h3 className='text-xl font-medium text-slate-600'>let&apos;s connect you with the TechTogether community</h3>
    </section>

    <section className='flex flex-col gap-5'>
      <h3 className='text-2xl font-semibold text-slate-600'>Events</h3>
      
      <EventCard />

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Attend</button>
          </div>
        </div>
      </div>
    </section>
  </main>
}

export default Home