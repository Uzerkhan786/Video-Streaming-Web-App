import React from 'react'

const SearchDetails = ({ details }) => {
    const { title, description, thumbnails, channelTitle } = details
    console.log(details);
    return (
        <div className='flex p-2 m-2 '>
            <div className="">
                <img className='w-80 h-48 rounded-lg' src={thumbnails.high.url} alt="" />
            </div>
            <div className="px-6">
                <h1 className='font-semibold text-xl'>{title}</h1>
                <h2 className='text-gray-500 py-2'>📺 {channelTitle}</h2>
                <h2 className='text-gray-500 py-2'>{description}</h2>

            </div>
        </div>
    )
}

export default SearchDetails
