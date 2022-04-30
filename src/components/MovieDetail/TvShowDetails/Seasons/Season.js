import React, { Fragment, useCallback } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { settingsSeason } from '../../../../utils/Settiings';
import GlobalLoader from '../../GlobaLoader/Loader';

const Season = ({ data, tvShowTitle, isLoadingMovieDetails }) => {

    const fullYear = useCallback((date) => {
      let d = new Date(date).getFullYear();
      return d;
    },[]);
    
    const fullDate = useCallback((date) => {
      let d = new Date(date);
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
    },[]);

  return (
        <div className='mt-9 px-6 max-w-full w-full overflow-hidden '>
            <h1 className='text-2xl text-[#343333] dark:text-[#F5F7FA] mb-5'>Relations</h1>
                {isLoadingMovieDetails ? 

                    <div className='gap-3 flex items-center my-2'>
                        <GlobalLoader /> 
                        <p className='text-[#343333] dark:text-[#F5F7FA] text-sm'>Fetching relations...</p>
                    </div> 
                :
                    data?.data?.seasons.length === 0 ? 
                    <p className='text-sm font-light dark:text-[#BCCCDC] mb-5'>No recommendations found.</p>
                    :
                        <Slider {...settingsSeason} className='cursor-pointer md:cursor-grab h-full w-full group'>
                                {data?.data?.seasons.map((season,id) => ( 
                                    <Fragment key={id}>
                                        <div className='flex flex-row items-center gap-3 bg-gray-200/30 dark:bg-[#323F4B] rounded-xl h-[150px]  overflow-hidden shadow-md max-w-[380px]' >
                                            <div className='w-[120px] h-full'>
                                                {season?.poster_path ?
                                                    <img src={`https://image.tmdb.org/t/p/w200${season?.poster_path}`} alt="backdrop_img" className='h-full w-full object-cover object-center bg-gray-200 dark:bg-[#323F4B] font-light' />
                                                :
                                                    <div className='w-full h-full object-cover object-center bg-gray-200/40 dark:bg-[#323F4B] overflow-hidden font-light flex items-center'>
                                                    <h1 className='w-full text-center text-xs md:text-sm text-gray-400 dark:text-[#BCCCDC]'>Photo not available</h1>
                                                    </div>
                                                }
                                                
                                            </div>
                                            <div className='flex-auto w-full h-full overflow-auto font-medium text-[#4F4D4D] dark:text-[#BCCCDC]'>
                                                <div className='h-full w-full py-2 pr-2 flex items-center'>
                                                    <div>
                                                        <h1 className='text-sm md:text-md font-[500] text-[#343333] dark:text-[#F5F7FA]'>{season?.name}</h1>
                                                        <div className='flex flex-nowrap items-center gap-1 text-[#343333] dark:text-[#F5F7FA] mb-2'>
                                                            {season?.air_date && <p className='text-xs md:text-sm'>{fullYear(season?.air_date)}</p>}
                                                            {season?.episode_count !== 0 && <p className='text-xs md:text-sm break-normal'> - {season?.episode_count} Episodes</p>}
                                                        </div>
                                                        {season?.air_date && <p className='text-xs'>{`${season?.name} of ${tvShowTitle} premiered on ${fullDate(season?.air_date)}.`}</p> } 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>
                                ))}
                        </Slider>
                }
        </div>
  )
}

export default Season