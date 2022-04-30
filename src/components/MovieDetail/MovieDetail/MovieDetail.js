import React from 'react'
import MovieSearchbar from '../MovieSearchbar/MovieSearchbar'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import TopInfoMovie from './TopInfoMovie/TopInfoMovie'
import CastsCrews from './CastsCrews/CastsCrews'
import MovieInformation from './MovieInformation/MovieInformation'
import TrailerMovie from './TrailerMovie/TrailerMovie'
import Loader from './TopInfoMovie/Loader/Loader'
import Recommendations from '../MovieDetail/Recommendations/Recommendations'
import ScrollTop from '../ScrollTop/ScrollTop'

const fetchMovieDetails = ({ queryKey }) => {
    const id = queryKey[1];
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&append_to_response=videos`)
}

const fetchCast = ({ queryKey }) => {
    const id = queryKey[1];
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
}


const MovieDetail = () => {

    const {id} = useParams();
    const {isLoading: isLoadingMovieDetails, isFetching: isFetchingMovieDetails, data, isError, error} = useQuery(['movie-details', id], fetchMovieDetails);
    const {isLoading: isLoadingCast, data: dataCast, isFetching: isFetchingCast, isError: isErrorCast} = useQuery(['cast-crew', id], fetchCast);

    if(isError && isErrorCast) {
        return (
            <div className='md:ml-[220px] lg:ml-[240px] w-auto h-screen relative flex items-center justify-center p-2'>   
                <h1 className='text-lg font-light dark:text-[#BCCCDC] mb-5'>{error.message}</h1>
            </div>
        ) 
    }

  return (
    <div className='md:ml-[220px] lg:ml-[240px] w-auto h-full relative'>     
        <ScrollTop/>
        <div className='hidden md:block absolute top-0 right-0 z-20 w-full max-w-[370px] my-2'>
            <MovieSearchbar />
        </div> 

        {isLoadingMovieDetails ?  <Loader/> : <TopInfoMovie data={data}/> }
        
        <div className=' mt-9 gap-5 mx-6 flex flex-col-reverse lg:grid lg:grid-cols-myGrid'>
            <CastsCrews dataCast={dataCast} isLoadingCast={isLoadingCast}/>
            <MovieInformation data={data} isLoadingMovieDetails={isLoadingMovieDetails}/>
        </div>

        <TrailerMovie data={data} />
        <Recommendations id={id}/>
    </div>
  )
}

export default MovieDetail