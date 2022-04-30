import React from 'react'
import { Link } from 'react-router-dom'
import { useInfiniteQuery } from 'react-query'
import axios from 'axios'
import GlobalLoader from '../../GlobaLoader/Loader'
const fetchNowPlaying = ({pageParam = 1}) => {
    return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${pageParam}`)
}

const NowPlaying = () => {

    const {isLoading, isFetching, data, hasNextPage, fetchNextPage } = useInfiniteQuery('now-playing', fetchNowPlaying, 
    {
        getNextPageParam: (lastPage, pages) => {
            const nextPage = pages[pages.length - 1];
            if(nextPage.data.length === 0){
                return undefined
            }else {
                return pages.length + 1;
            }
        }
    })

  return (
    <div>
        <div className='mt-7 mb-7 flex flex-wrap'>
            <h1 className='text-[22px] md:text-3xl antialiased text-[#343333] mx-6 dark:text-[#F5F7FA] '>Now playing movies.</h1>
        </div>

        {isLoading ? 
            <div className='gap-3 max-w-max flex flex-wrap text-center px-6 items-center justify-center'>
                <GlobalLoader /> 
                <p className='text-[#343333] dark:text-[#F5F7FA] text-sm'>Fetching now playing movies...</p>
            </div>
        :
        <>
            <div className='grid grid-cols-myGridFluid lg:grid-cols-myGridFluidlg gap-4 mx-6'>
                {data?.pages.map((group, id) => (
                    <React.Fragment key={id}>
                        {group?.data?.results.map((movie,id) => (
                             <Link to={`/movie/${movie?.id}`} key={id} className='space-y-4 mx-auto md:mx-0 drop-shadow-md'>
                                {movie?.poster_path ? 
                                    <img src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`} alt="poster" className='rounded-xl w-full max-w-[220px] h-[190px] lg:h-[240px] drop-shadow-md object-cover object-fit bg-gray-200 dark:bg-[#323F4B]' />
                                :
                                    <div className='max-w-[220px] h-[190px] lg:h-[240px] object-cover object-center bg-gray-200 dark:bg-[#323F4B] rounded-xl overflow-hidden font-light flex items-center'>
                                        <h1 className='w-full text-center text-gray-400 dark:text-[#BCCCDC]'>Photo not available</h1>
                                    </div> }

                                    <h1 className='text-md text-[#343333] dark:text-[#F5F7FA] break-words'>{movie?.title}</h1>
                            </Link>
                        ))}
                    </React.Fragment>   
                ))}
            </div>

            {isFetching ?  
                <div className='gap-3 flex flex-wrap text-center px-6 mt-2 items-center justify-center'>
                   <GlobalLoader /> 
                   <p className='text-[#343333] dark:text-[#F5F7FA] text-sm'>Fetching more movies...</p>
                </div> 
            :
                <button onClick={fetchNextPage} className='w-full h-full max-w-[180px] bg-[#343333] dark:bg-[#323F4B] active:bg-[#343333]/80 text-gray-200 dark:text-[#F5F7FA] focus:ring focus:ring-violet-300 rounded-lg block m-auto py-2 my-4'>Load more.</button>
            }
        </> 
        }
    </div>
  )
}

export default NowPlaying