import React, {FC} from 'react'

type OwnProps = {};

const Header: FC<OwnProps> = ({}) => {


  return <header className='border-b w-full bg-slate-100 shadow-md sticky top-0 z-10'>
    <section className='flex flex-row justify-between items-center p-4 text-2xl'>
      <h1 className='text-slate-800 font-extrabold'>TechTogether</h1>


      <section className='border-slate-600 rounded-md w-10 h-10 flex flex-col justify-center items-center duration-300 hover:cursor-pointer hover:bg-slate-200'>
      </section>
    </section>
  </header>
}

export default Header