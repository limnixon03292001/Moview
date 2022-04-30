import React from 'react'
import GlobalLoader from '../../GlobaLoader/Loader'

const MovieInformation = ({ data, isLoadingMovieDetails }) => {
 
  return (
    <div className='space-y-4 tracking-wide drop-shadow-md lg:px-3'>
        <h1 className='text-xl text-[#343333] dark:text-[#F5F7FA] mt-3 mb-1'>Movie Information</h1>
        {isLoadingMovieDetails ? 
            <div className='gap-3 flex items-center'>
                <GlobalLoader /> 
                <p className='text-[#343333] dark:text-[#F5F7FA] text-xs'>Fetching Movie Information...</p>
            </div>
        :
            <>
                <div className='space-y-1'>
                    <h1 className='text-[#343333] dark:text-[#F5F7FA] '>Score</h1>
                    <p className='text-[#4F4D4D] dark:text-[#BCCCDC] text-xs'>{data?.data?.vote_average}</p>
                </div>
                <div>
                    <h1 className='text-[#343333] dark:text-[#F5F7FA] '>Genres</h1>
                    <div className='w-full space-y-2 '>
                        {data?.data?.genres.map((genre,id) => (
                            <span key={id} className='drop-shadow-md mr-1 text-white dark:text-[#BCCCDC] inline-block text-xs bg-[#4F4D4D] dark:bg-[#323F4B] px-2 py-1 rounded-xl'>{genre?.name}</span>
                        ))}
                        </div>
                </div>
                <div className='space-y-1'>
                    <h1 className='text-[#343333] dark:text-[#F5F7FA]'>Status</h1>
                    <p className='text-[#4F4D4D] dark:text-[#BCCCDC] text-xs'>{data?.data?.status}</p>
                </div>
                <div className='space-y-1'>
                    <h1 className='text-[#343333] dark:text-[#F5F7FA] '>Original Language</h1>
                    <p className='text-[#4F4D4D] dark:text-[#BCCCDC] text-xs'>{data?.data?.original_language}</p>
                </div>
                <div className='space-y-1'>
                    <h1 className='text-[#343333] dark:text-[#F5F7FA] '>Spoken Language</h1>
                    {data?.data?.spoken_languages.map((lang,id) => (
                            data?.data?.spoken_languages.length - 1 === id ?
                            <span className='text-[#4F4D4D] dark:text-[#BCCCDC] text-xs' key={id}>{lang?.english_name}</span> 
                            : 
                            <span className='text-[#4F4D4D] dark:text-[#BCCCDC] text-xs mr-1' key={id}>{lang?.english_name},</span>  
                    ))}
                </div>
            </>
        }
    </div> 
  )
}

export default MovieInformation