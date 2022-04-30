import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { LoaderCastCrew } from './Loader/Loader';
import { settingsCastCrews } from '../../../../utils/Settiings';

const CastsCrews = ({ dataCast, isLoadingCast }) => {
    
    

  return (
        <div className='mt-4 md:mt-0 tracking-wide max-w-full w-full overflow-hidden' >
            <div>
                <h1 className='mb-5 text-2xl text-[#343333] dark:text-[#F5F7FA]'>Cast</h1>
                {isLoadingCast ? 
                   <LoaderCastCrew/>   
                :  

                dataCast?.data?.cast.length === 0 ?  
                    <p className='text-sm font-light dark:text-[#BCCCDC] mb-5'>No Cast found.</p>
                :
                    <Slider {...settingsCastCrews} className='cursor-pointer md:cursor-grab h-full w-full group'>
                        {
                            dataCast?.data?.cast.slice(0,10).map((cast, id) => (
                                <div className='w-full max-w-[120px] md:max-w-[140px] h-[180px] md:h-[230px] space-y-3' key={id}>
                                    {cast?.profile_path ?  
                                    <img src={`https://image.tmdb.org/t/p/w200${cast?.profile_path}`} alt="poster_img" className='w-full h-full object-cover object-center bg-gray-200 dark:bg-[#323F4B] rounded-xl overflow-hidden font-light'  />
                                    :
                                    <div className='w-full h-full object-cover object-center bg-gray-200 dark:bg-[#323F4B] rounded-xl overflow-hidden font-light flex items-center'>
                                        <h1 className='w-full text-center text-gray-400 dark:text-[#BCCCDC]'>Photo not available</h1>
                                    </div>
                                    }
                                    <div className='text-[#343333] '>
                                        <h1 className='text-sm antialiased dark:text-[#F5F7FA] '>{cast?.name}</h1>
                                        <p className='text-xs font-light dark:text-[#BCCCDC]'>{cast?.character}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                }
            </div>

            <div className='mt-6 max-w-full w-full' >
                <h1 className='text-2xl text-[#343333] dark:text-[#F5F7FA] mb-5'>Crew</h1>
                {isLoadingCast ? 
                    <LoaderCastCrew/>
                : 

                dataCast?.data?.crew.length === 0 ? 
                    <p className='text-sm font-light dark:text-[#BCCCDC] mb-5'>No Crew found.</p>
                :
                    <Slider {...settingsCastCrews} className='cursor-pointer md:cursor-grab h-full w-full group'>
                    {
                        dataCast?.data?.crew.slice(0,10).map((cast, id) => (
                            <div className='w-full max-w-[120px] md:max-w-[140px] h-[180px] md:h-[230px] space-y-3' key={id}>
                                {cast?.profile_path ?   
                                <img src={`https://image.tmdb.org/t/p/w200${cast?.profile_path}`} alt="poster_img" className='w-full h-full object-cover object-center bg-gray-200 dark:bg-[#323F4B] rounded-xl overflow-hidden font-light' />
                                :
                                <div className='w-full h-full object-cover object-center bg-gray-200 dark:bg-[#323F4B] rounded-xl overflow-hidden font-light flex items-center'>
                                    <h1 className=' w-full text-center text-gray-400 dark:text-[#BCCCDC]'>Photo not available</h1>
                                </div>
                                }
                    
                                <div className='text-[#343333] '>
                                    <h1 className='text-sm dark:text-[#F5F7FA]'>{cast?.name}</h1>
                                    <p className='text-xs font-light dark:text-[#BCCCDC] '>{cast?.known_for_department}</p>
                                </div>
                            </div>
                        ))
                    }
                    </Slider>
                }
            </div>       
    </div>
  )
}

export default CastsCrews