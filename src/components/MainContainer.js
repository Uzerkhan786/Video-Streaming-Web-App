import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { API_URL } from '../utils/constants'


const MainContainer = () => {
    const [videos, setVideos] = useState(null);
    //console.log(videos);
    const fetchData = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();
        // console.log(json);
        setVideos(json?.items);
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <div className='col-span-11 mx-3 flex flex-wrap justify-center' >
                {videos?.map(item => (
                    <VideoCard key={item.id} video={item} />
                ))}
            </div>
        </>
    )
}

export default MainContainer
