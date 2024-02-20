import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
    const { snippet, id } = video;
    const { title, publishedAt, channelTitle, thumbnails } = snippet;
    // console.log(thumbnails);
    const { high } = thumbnails;
    // console.log(medium);


    return (
        <Link to={`videos/${id}`}> <div className='w-80 h-72 border-x-2 border-b-2 border-gray-300  rounded-lg mx-2 my-2 ' >
            <img src={high.url} alt="" className='w-96 h-48 rounded-lg ' />
            <h1 className='font-bold text-l ml-2'>{title.slice(30)}...</h1>
            <h1 className='text-gray-500 ml-2'>{channelTitle}</h1>
            <h2 className='ml-2'>{publishedAt}</h2>
        </div>
        </Link>
    )
}

export default VideoCard
