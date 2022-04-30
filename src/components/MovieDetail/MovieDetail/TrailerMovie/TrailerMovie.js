import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'

const TrailerMovie = ({ data }) => {

  const trailer = data?.data?.videos?.results.find(video => video.type === 'Trailer');

  return (
    <div className='mt-5 w-full h-full px-6'>
        <h1 className='text-2xl text-[#343333] dark:text-[#F5F7FA] mb-5'>Trailer</h1>
        <div className='w-full h-full '>
            <YouTube videoId={trailer?.key} className='rounded-xl w-full max-w-[610px] h-[320px] '/>
        </div>
    </div>
  )
}

export default TrailerMovie