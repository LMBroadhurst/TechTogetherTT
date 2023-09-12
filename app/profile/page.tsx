import React from 'react'

const Profile = () => {
    
    return <main className='flex flex-col gap-14 px-5 py-20 md:p-20 lg:px-40 xl:px-96'>
        <section>
          <h2 className='text-lg font-semibold text-slate-500'>Lewis,</h2> 
          <h3 className='text-xl font-medium text-slate-600'>This is your TechTogether profile. Cutomise it to your liking.</h3>
        </section>

        <section>
            <p>Stuff about bio, cool profile picture, etc.</p>
        </section>
      
    </main>
}

export default Profile