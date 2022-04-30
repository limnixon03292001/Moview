import React, { useEffect } from 'react'
import { sideNav } from '../../../../data'
import { Link, useLocation } from 'react-router-dom'
import { IoMdClose } from 'react-icons/io'
import MovieSearchbar from '../../MovieSearchbar/MovieSearchbar'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import TvShowsSearchbar from '../../TvShowsSearchbar/TvShowsSearchbar'

const Sidenav = ({ isOpen, setIsOpen }) => {

    const { pathname } = useLocation();
    //every route changes we are going to close the sidenav automatically
    useEffect(() => {
        setIsOpen(false);

        return () => {
            setIsOpen(false);
        }
    },[pathname])
    
  return (
    <>
        <div className={`${isOpen ? `opacity-100` : `opacity-0 invisible`} transition-opacity fixed inset-0 w-full h-full bg-black/20 z-40 md:hidden overflow-y-hidden`} onClick={() => setIsOpen(false)}></div>
        <div className={`fixed bg-[#F4F4F4] dark:bg-[#1F2933] z-50 w-full max-w-[290px] lg:w-[240px] md:w-[220px] py-3 left-0 top-0 bottom-0 h-full overflow-auto
        ${isOpen ? `translate-x-0 drop-shadow-md` : `-translate-x-full`} md:drop-shadow-none md:translate-x-0 transition-transform `}>
        
            <div className='text-[#343333] dark:text-[#F5F7FA] flex items-center justify-between px-4 md:px-5 h-[68px]'>
                <Link to='/' className='text-2xl lg:text-3xl'>Moview</Link>
                <button className='md:hidden active:bg-black/5 dark:active:bg-white/10 p-1 rounded-full' onClick={() => setIsOpen(false)}><IoMdClose size={28}/></button>
            </div>
            <div className='md:hidden my-2 mb-5 px-3 md:px-5 w-full'>
            {pathname === '/tv-shows' || pathname.split("/")[1] === 'tv-show'  ? 
                <TvShowsSearchbar/> 
                :   <MovieSearchbar /> } 
            </div>
            <p className='text-[#4F4D4D] dark:text-[#F5F7FA] text-lg flex items-center px-4 md:px-5 h-[50px]'>Menu</p>
            <nav className='lg:space-y-2'>
                {sideNav.map((data,id) => (
                    <Link key={id} to={`${data.path}`} className={`px-4 md:px-5 py-2 inline-block w-full relative rounded-r-lg overflow-hidden ${pathname === data.path ? `bg-black/5 dark:bg-[#323F4B]/40 ` : ``}`}>
                        <div className='flex items-end gap-3 text-[#4F4D4D] dark:text-[#F5F7FA]'>
                            <span className='p-1 bg-white dark:bg-[#323F4B] drop-shadow-md rounded-md inline-block'>{data.icon}</span>
                            <span className='text-lg align-bottom'>{data.label}</span>
                        </div>
                    </Link>
                ))}
                <ThemeToggle/>
            </nav>

            {/* Information about me */}
            <div className='text-gray-400 dark:text-[#E4E7EB] text-xs border-t border-gray-300 dark:border-[#323F4B] m-4 mt-4 pt-4 space-y-2'>
                <p>Developed By: <a href='https://facebook.com/limnixon03292001' target='_blank' className='underline'>Nixon Lim</a></p>
                <p>Powered By: TheMovieDB Api</p>
            </div>
        </div>
    </>
  )
}

export default Sidenav