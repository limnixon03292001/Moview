import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { LoaderCastCrew } from '../../MovieDetail/CastsCrews/Loader/Loader';
import { settingsReco } from '../../../../utils/Settiings';

const  fetchRecommendations = ({ queryKey }) => {
    const id = queryKey[1];
    return axios.get(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`)
}

const Recommendations = ({id}) => {
    
    const {data, isLoading} = useQuery(['recommendations', id], fetchRecommendations);
    
  return (
    <div className='mt-7 w-full h-full px-6 mb-10'>
        <h1 className='text-2xl text-[#343333] dark:text-[#F5F7FA] mb-5'>Recommendations</h1>

        {isLoading ? <LoaderCastCrew/>  
        :
            data?.data?.results.length === 0 ? 
                <p className='text-sm font-light dark:text-[#BCCCDC] mb-5'>No recommendations found.</p>
            :
                <Slider {...settingsReco} className='cursor-grab h-full w-full group'>
                    {
                        data?.data?.results.map((tv, id) => (
                            <Link to={`/tv-show/${tv?.id}`} className='max-w-[120px] md:max-w-[140px] h-[180px] md:h-[230px] space-y-3' key={id}>
                                {tv?.poster_path ?  
                                <img src={`https://image.tmdb.org/t/p/w200${tv?.poster_path}`} alt="poster_img" className='w-full h-full object-cover object-center bg-gray-200 rounded-xl overflow-hidden font-light'  />
                                :
                                <div className='w-full h-full object-cover object-center bg-gray-200 dark:bg-[#323F4B] rounded-xl overflow-hidden font-light flex items-center'>
                                    <h1 className='w-full text-center text-gray-400 dark:text-[#BCCCDC]'>Photo not available</h1>
                                </div>
                                }
                                <div className='text-[#343333] '>
                                    <h1 className='text-sm antialiased dark:text-[#F5F7FA] '>{tv?.name}</h1>
                                </div>
                            </Link>
                        ))
                    }
                </Slider>
        }    
    </div>
  )
}

export default Recommendations