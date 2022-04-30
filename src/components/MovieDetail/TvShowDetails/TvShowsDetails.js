import React, { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import Loader from '../MovieDetail/TopInfoMovie/Loader/Loader'
import TopInfoTvShow from './TopInfo/TopInfoTvShow'
import Season from './Seasons/Season'
import CastsCrews from '../MovieDetail/CastsCrews/CastsCrews'
import MovieInformation from '../MovieDetail/MovieInformation/MovieInformation'
import TrailerMovie from '../MovieDetail/TrailerMovie/TrailerMovie'
import Recommendations from './Recommendations/Recommendation'
import TvShowsSearchbar from '../TvShowsSearchbar/TvShowsSearchbar'
import ScrollTop from '../ScrollTop/ScrollTop'

const fetchTvShowDetails = ({ queryKey }) => {
    const id = queryKey[1];
    return axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&append_to_response=videos`)
}

const fetchCasts = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
}

const TvShowsDetails = () => {

    const {id } = useParams();

    const {data, isLoading : isLoadingMovieDetails,} = useQuery(['tvShows-details', id], fetchTvShowDetails);
    const {data: dataCast, isLoading : isLoadingCast,} = useQuery(['cast-crews', id], fetchCasts);
    const [tvShowTitle, setTvShowTitle] = useState('');

  return (
    <div className='md:ml-[220px] lg:ml-[240px] w-auto h-full relative mb-9'>
        <ScrollTop/>
        <div className='hidden md:block absolute top-0 right-0 z-20 w-full max-w-[370px] my-2'>
            <TvShowsSearchbar />
        </div> 
        
        {isLoadingMovieDetails ?  <Loader/> : <TopInfoTvShow data={data} setTvShowTitle={setTvShowTitle}/>}
        
        <Season data={data} tvShowTitle={tvShowTitle} isLoadingMovieDetails={isLoadingMovieDetails}/>

        <div className=' mt-9 gap-5 mx-6 flex flex-col-reverse lg:grid lg:grid-cols-myGrid'>
            <CastsCrews dataCast={dataCast} isLoadingCast={isLoadingCast}/>
            <MovieInformation data={data} isLoadingMovieDetails={isLoadingMovieDetails}/>
        </div>

        <TrailerMovie data={data} />

        <Recommendations id={id}/>
          
    </div>
  )
}

export default TvShowsDetails