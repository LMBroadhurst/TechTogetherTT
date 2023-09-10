import React, {FC} from 'react'

type OwnProps = {};

const Header: FC<OwnProps> = ({}) => {


  return <header className='border-b w-full bg-slate-100 shadow-md sticky top-0 z-10'>
    <section className='flex flex-row justify-between items-center p-4 text-2xl text-slate-800 '>
      <h1 className='font-extrabold'>TechTogether</h1>

      {/* Burger Menu */}
      

          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        

    </section>
  </header>
}

export default Header