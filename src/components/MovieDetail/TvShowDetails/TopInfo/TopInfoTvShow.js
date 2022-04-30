import React,{useEffect} from 'react'

const TopInfoTvShow = ({ data, setTvShowTitle }) => {
    useEffect(() => {
        setTvShowTitle(data?.data?.name);
    },[])
  return (
    <div>
        <div className='relative w-full h-[230px] md:h-[300px] max-w-full overflow-hidden bg-gray-400' >
            {data?.data?.backdrop_path ? 
                <>
                    <img src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data?.data?.backdrop_path}`} alt="backdrop_img" className='w-full h-full object-cover object-center bg-gray-200 dark:bg-[#323F4B] font-light ' />
                    <div className='absolute inset-0 w-full h-full 
                    bg-gradient-to-t from-[#F4F4F4] via-[#F4F4F4]/10 to-transparent 
                    dark:from-[#1F2933] dark:via-[#1F2933]/80 dark:to-transparent' />
                </> 
                :
                <div className='w-full h-full object-cover object-center bg-gray-200 dark:bg-[#323F4B] overflow-hidden font-light flex items-center relative'>
                    <h1 className='w-full text-md text-center text-gray-400 dark:text-[#BCCCDC] z-20'>Photo not available</h1>
                    <div className='absolute inset-0 w-full h-full bg-gradient-to-t from-[#F4F4F4] via-[#F4F4F4]/10 to-transparent dark:from-[#1F2933] dark:via-[#1F2933]/80 dark:to-transparent ' />
                </div>
            }
        </div>
        
        <div className='flex px-2 lg:px-0 md:mx-6 md:space-x-4'>
            <div className='hidden md:block -mt-[90px] w-full h-[236px] md:max-w-[140px] lg:max-w-[160px] overflow-hidden rounded-xl drop-shadow-md flex-grow-0 flex-shrink-0 bg-gray-400'>
                {data?.data?.poster_path ? 
                    <img src={`https://image.tmdb.org/t/p/w200${data?.data?.poster_path}`} alt="poster_img" className='  w-full h-full object-cover object-center bg-gray-200 font-light'  />
                    :
                    <div className='w-full h-full object-cover object-center bg-gray-200 dark:bg-[#323F4B] overflow-hidden font-light flex items-center p-2'>
                        <h1 className='w-full text-md text-center text-gray-400 dark:text-[#BCCCDC]'>Photo not available</h1>
                    </div>
                }
            </div>

            <div className='px-4 space-y-3'>
                <div className='space-y-1'>
                    <h1 className='text-3xl text-[#343333] dark:text-[#F5F7FA]'>{data?.data?.name}</h1>
                    <p className='font-light text-[#4F4D4D] dark:text-[#BCCCDC] text-sm'>{data?.data?.tagline}</p>
                </div>
                <div className='relative w-full overflow-hidden'>
                    <p className='text-[#4F4D4D] font-light dark:text-[#BCCCDC] text-sm max-h-[190px] overflow-auto'>{data?.data?.overview}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopInfoTvShow