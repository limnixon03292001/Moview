import React,{ useState, useRef } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import GlobalLoader from '../GlobaLoader/Loader'
import useClickOutside from '../../../hooks/useClickOutside'


const search = (searchData) => {
    return axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${searchData}`);
}

const TvShowsSearchbar = () => {
  
  const ref = useRef();
  const [searchData, setSearchData] = useState('');
  const { data, isFetching }  = useQuery(['search', searchData], () => search(searchData), 
  {
    enabled: Boolean(searchData)
  })

  useClickOutside(ref, setSearchData);

  return (
    <div className='md:my-3 md:mx-7'>
    <div className='max-w-[410px] h-[47px] relative'>

      <div className='h-full w-full relative'>
        <input type="text" className='drop-shadow-md bg-white dark:bg-[#323F4B] px-4 pr-7 py-2 rounded-lg w-full h-full dark:text-[#E4E7EB] outline-none focus:ring focus:ring-[#E4E7EB]' placeholder='Search Tv-Show...' name='search' onChange={(e) => setSearchData(e.target.value)} value={searchData} />
       <div className='text-gray-500 dark:text-[#E4E7EB] mx-2 flex items-center justify-center absolute top-0 right-0 bottom-0 '>{searchData === '' ? <BiSearchAlt2 size={24}/> :  <IoMdClose size={27} className='cursor-pointer p-1 rounded-full drop-shadow-md bg-[#F4F4F4] dark:bg-[#1F2933]' onClick={() => setSearchData(prevData => prevData = '')}/>} </div> 
      </div>

        <div className='absolute max-h-[390px] overflow-y-auto overflow-x-hidden w-full z-30 bg-[#F4F4F4] dark:bg-[#323F4B] drop-shadow-md rounded-md mt-1' ref={ref}>

          {isFetching ? 

            <div className='w-full h-full gap-3 flex items-center md:pl-3 py-2'>
              <GlobalLoader /> 
              <p className='text-[#343333] dark:text-[#F5F7FA] text-xs md:text-sm'>Fetching Tv-shows Info...</p>
            </div>

          :  

            data?.data?.results.map((show,id) => (
              <Link to={`/tv-show/${show?.id}`} key={id} className='px-3 my-3 w-full h-max flex gap-3 items-center' onClick={() => setSearchData(prevData => prevData = '')}>
                <div className='w-[36px] h-[36px] lg:w-[46px] lg:h-[46px] rounded-full flex-grow-0 flex-shrink-0 overflow-hidden'>
                  <img src={`https://image.tmdb.org/t/p/w200${show?.poster_path}`} alt="poster_img" className='  w-full h-full object-cover object-center bg-white' />
                </div>
                <div>
                  <p className='text-[14px] md:text-sm text-[#343333] dark:text-[#F5F7FA]'>{show?.name}</p>
                  <p className='text-[11px] md:text-xs text-[#4F4D4D] dark:text-[#CBD2D9]'>{show?.original_name}</p>
                </div>
              </Link>
            )) 
          }

        </div>
    </div>
  </div>
  )
}

export default TvShowsSearchbar