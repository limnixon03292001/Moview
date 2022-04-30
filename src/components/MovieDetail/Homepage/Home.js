import React from 'react'
import NowPlaying from './NowPlaying/NowPlaying'
import MovieSearchbar from '../MovieSearchbar/MovieSearchbar'
import SliderImage from '../Homepage/Slider/SliderImage'

const Home = () => {
 
  return (
    <div className='py-3 md:ml-[220px] lg:ml-[240px] h-full min-h-screen'>
        <div className='hidden md:block'>
            <MovieSearchbar />
        </div>
        {/* Slider Image*/}
        <SliderImage/>
        {/* Now playing */}
        <NowPlaying />
    </div>
  )
}

export default Home