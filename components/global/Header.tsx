import React, {FC} from 'react'

type OwnProps = {};

const Header: FC<OwnProps> = ({}) => {


  return <header className='border-b w-full shadow-md sticky top-0 z-10 bg-base-100'>
    <section className='flex flex-row justify-between items-center p-4 text-2xl text-slate-800 '>
      <h1 className='font-extrabold'>TechTogether</h1>

      {/* Burger Menu */}
      <button className='btn btn-ghost'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        </svg>
      </button>

    
    </section>
  </header>
}

export default Header