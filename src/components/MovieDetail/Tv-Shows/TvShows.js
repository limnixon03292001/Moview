import React, { useState, Fragment } from 'react'
import { useInfiniteQuery } from 'react-query'
import axios from 'axios'
import Grid from './Grid/Grid'
import TvShowsSearchbar from '../TvShowsSearchbar/TvShowsSearchbar'
import { Listbox, Transition  } from '@headlessui/react'
import { IoIosArrowDown } from 'react-icons/io'

const fetchTopRated = ({pageParam = 1, queryKey}) => {
    const filter = queryKey[1];
    return axios.get(`https://api.themoviedb.org/3/tv/${filter}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${pageParam}`)
}

const filters = [
    { id: 1, name: 'Top Rated', filter: 'top_rated' },
    { id: 2, name: 'Popular', filter: 'popular' },
    { id: 3, name: 'On the Air', filter: 'on_the_air'  },
    { id: 4, name: 'Airing Today', filter: 'airing_today' },
]

const TvShows = () => {

    const [filter, setFilter] = useState(filters[0])
    const { data, isLoading, isFetching, hasNextPage, fetchNextPage, refetch }  = useInfiniteQuery(['top-rated', filter.filter], fetchTopRated,
    {
        getNextPageParam: (lastPage, pages) => {
            const nextPage = pages[pages.length - 1];
            if(nextPage.data.length === 0){
                return undefined
            }else {
                return pages.length + 1;
            }
        },
    
    });

  return (
        <div className='py-3 md:ml-[220px] lg:ml-[240px] h-full min-h-screen'>
            <div className='hidden md:block'>
                <TvShowsSearchbar/>
            </div>

            <div className='my-7 mr-3 flex items-center justify-between relative z-20'>
                <h1 className='text-[24px] md:text-3xl antialiased text-[#343333] mx-6 dark:text-[#F5F7FA]'>{filter.name}</h1>

                <Listbox value={filter} onChange={setFilter} as="div" className='relative w-full max-w-[150px] '>
                {({ open }) => (
                    <Fragment>
                    <Listbox.Button className='w-full bg-gray-200 dark:bg-[#323F4B] outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 text-gray-500 dark:text-[#BCCCDC] p-2 px-3  rounded-xl flex gap-4 items-center justify-between' onClick={refetch} >{filter.name} <IoIosArrowDown size={19} /></Listbox.Button>
                    <Transition
                        show={open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                    <Listbox.Options static className='absolute z-20 text-gray-500 dark:text-[#BCCCDC] bg-gray-200 dark:bg-[#323F4B] p-3 rounded-xl mt-1 w-full cursor-pointer'> 
                        {filters.map((filter) => (
                        <Listbox.Option
                            key={filter.id}
                            value={filter}
                            className='py-2'>
                            {filter.name}
                        </Listbox.Option>
                        ))}
                    </Listbox.Options>
                    </Transition>
                    </Fragment>
                    )}
                </Listbox>
            </div>

            <Grid isLoading={isLoading} fetchNextPage={fetchNextPage} data={data} isFetching={isFetching}  filterName= {filter.name} />

        </div>  
    )
}

export default TvShows