import React from 'react'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const TopNavbar = ({ setIsOpen }) => {
  return (
    <nav className='dark:border-b dark:border-[#323F4B] flex items-center h-[65px] gap-2 px-4 w-full translate-y-0 md:absolute md:-translate-y-full transition-transform shadow-sm text-[#343333] dark:text-[#E4E7EB]'>
        <button onClick={() => setIsOpen(prev => !prev)} className="active:bg-black/5 dark:active:bg-white/10 p-1 rounded-full"><RiBarChartHorizontalLine size={27} className='stroke-0'/></button>
        <Link to='/' className='text-2xl'>Moview</Link>
    </nav>
  )
}

export default TopNavbar