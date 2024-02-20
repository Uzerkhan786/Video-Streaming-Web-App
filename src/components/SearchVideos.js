
import React from 'react'
import { useSelector } from 'react-redux'
import SearchDetails from './SearchDetails';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';
const SearchVideos = () => {
    const list = useSelector(item => item.search.item);
    //console.log(list);

    return (
        <div className='flex'>
            <div className='w-1/12'>
                <Sidebar />
            </div>
            <div className='mx-4 w-10/12'>
                {list && list.map((item) => {

                    return <Link to={`/videos/${item.id.videoId}`}><SearchDetails details={item.snippet} /></Link>
                })}
            </div>
        </div>
    )
}

export default SearchVideos
