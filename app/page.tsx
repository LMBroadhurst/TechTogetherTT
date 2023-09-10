import React from 'react'

const Home = () => {
  
  return <main className='flex flex-col gap-28 px-5 py-20'>
  <section className='flex flex-col gap-1'>
    <h2 className='text-3xl font-semibold text-slate-600'>Lewis,</h2> 
    <h3 className='text-xl font-medium text-slate-600'>let&apos;s connect you with the TechTogether community</h3>
  </section>

  <section className='flex flex-col gap-5'>
    <h3 className='text-2xl font-semibold text-slate-600'>Events</h3>

    <section>
      <h4>Popular events near you</h4>
    </section>

    <section>
      <h4>Popular events in the UK</h4>
    </section>
    
    <section>
      <h4>Latest updates from your Communities</h4>
    </section>
  </section>

  <section className='flex flex-col gap-5'>
    <h3 className='text-2xl font-semibold text-slate-600'>TT Forums - Coming Soon!</h3>
  </section>

  
</main>
}

export default Home