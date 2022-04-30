import React from 'react'
import useDarkMode from '../../../../hooks/useDarkMode'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'

const ThemeToggle = () => {

    const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className='px-4 md:px-5 py-2 inline-block w-full relative rounded-r-lg overflow-hidden'>
        <button onClick={() => setTheme(colorTheme)} className='flex items-end gap-3 text-[#4F4D4D] dark:text-[#F5F7FA]'>
            <span className='p-1 bg-white dark:bg-[#323F4B] drop-shadow-md rounded-md inline-block'> {colorTheme !== 'light' ? <BsMoonFill size={23}/>: <BsSunFill size={23}/>}</span>
            <span className='text-lg text-[#4F4D4D] dark:text-[#F5F7FA] align-bottom'>{colorTheme !== 'light' ? 'Dark Mode' : 'Light Mode'}</span>
        </button>
    </div>
  )
}

export default ThemeToggle