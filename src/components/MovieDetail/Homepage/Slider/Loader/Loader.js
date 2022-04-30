import React from 'react'
import GlobalLoader from '../../../GlobaLoader/Loader'

const Loader = () => {
  return (
    <div className="w-full">
        <div className="animate-pulse mx-3">
            <div className="flex items-center justify-center rounded-xl relative w-full h-[400px] max-w-full overflow-hidden bg-gray-300 dark:bg-[#323F4B]"> 
                <div className='gap-3 text-center flex flex-wrap items-center justify-center p-3'>
                    <GlobalLoader /> 
                    <p className='text-[#343333] dark:text-[#F5F7FA] text-sm'>Fetching now trending movies...</p>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Loader