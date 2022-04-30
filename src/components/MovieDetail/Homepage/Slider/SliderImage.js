import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { HiArrowSmUp } from 'react-icons/hi'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loader from './Loader/Loader'

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <span onClick={onClick} className='cursor-pointer p-[1px] absolute drop-shadow-lg rotate-90 z-20 right-[-15px] top-[45%] rounded-full bg-white dark:bg-[#323F4B] text-[#4F4D4D] dark:text-[#E4E7EB]'> <HiArrowSmUp size={31} /> </span>
    );
  }
  
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <span onClick={onClick} className='absolute p-[1px] cursor-pointer drop-shadow-lg -rotate-90 z-20 left-[-15px] top-[45%] rounded-full bg-white dark:bg-[#323F4B] text-[#4F4D4D] dark:text-[#E4E7EB]'> <HiArrowSmUp size={31} /> </span>
    );
}

const fetchLatestMovie = () => {
    return axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_KEY}`)
}

const SliderImage = () => {


    const {isLoading, data} = useQuery('latest-movie', fetchLatestMovie)
    
    const settings = {
        infinite: true,
        speed:2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
    };
   
  return (
    <div className='mx-4 lg:mr-7 relative space-y-4 mt-4'>
        <div className='mx-3 mt-6'>
            <h1 className='text-[22px] md:text-3xl antialiased text-[#343333] dark:text-[#F5F7FA]'>Now Trending.</h1>
        </div>
        
        {isLoading ? 
            <Loader/>
        :
        <Slider {...settings} className="cursor-grab">
            {data?.data?.results.map((movie,id) => (
                <div key={id} className='relative w-full overflow-hidden max-w-full h-[400px] m-0 rounded-xl '>
                   <div className='relative w-full h-full' >
                       <div className='absolute inset-0 bg-black/50 dark:bg-transparent dark:bg-gradient-to-r dark:from-[#1F2933] dark:via-[#1F2933]/80 dark:to-transparent ' ></div>
                       <img src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie?.backdrop_path}`} alt="bg_img" className='w-full h-full object-cover object-center' />
                       <div>
                            <div className='absolute inset-0 z-20 text-white flex flex-col lg:flex-row justify-evenly lg:justify-start items-center flex-no-wrap lg:ml-8 lg:space-x-6'>
                                <div className=' w-full max-w-[100px] lg:max-w-[150px] rounded-xl shrink-0 overflow-hidden drop-shadow-xl'>
                                    <img src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`} alt="poster_img" className=' w-full h-full object-cover object-center' />
                                </div>
                                <div className='lg:flex-aut lg:text-left space-y-3 text-center p-3'>
                                    <h1 className='text-lg lg:text-4xl'>{movie?.title}</h1>
                                    <p className='text-xs lg:text-sm w-full max-w-[450px] max-h-[107px] overflow-auto'>{movie?.overview}</p>
                                    <Link to={`/movie/${movie?.id}`} className='text-sm lg:text-md cursor-pointer w-max inline-block px-10 py-1 border rounded-md '>View</Link>
                                </div>
                            </div>
                       </div>
                   </div>
               </div>
            ))}
         
        </Slider>
        }
    </div>
  )
}

export default SliderImage