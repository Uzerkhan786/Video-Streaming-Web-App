import { USER_ICON_URL, LOGO_URL, MENU_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { SEARCH_API } from '../utils/constants';
import { useState, useEffect } from 'react';
import { searchItem } from '../utils/searchSlice';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const [search, setSearch] = useState('');
    const [searchVideos, setSearchVideos] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = (item) => {
        dispatch(item);
    }
    const searchClick = (item) => {
        dispatch(item);
        navigate('/search')
    }

    useEffect(() => {
        console.log(search);
        const a = setTimeout(() => {
            fetchData();
        }, 500)
        return () => {
            clearTimeout(a)
        }
    }, [search])

    const fetchData = async () => {
        const res = await fetch(`${SEARCH_API}${search}&type=video&key=AIzaSyCsg1St4IwjAbQggmajzgOsxbVLCNyy6yQ`)
        const json = await res.json();
        setSearchVideos(json?.items);
    }
    return (<>
        <div className='grid grid-flow-col my-3 mx-2 shadow-lg px-2'>
            <div className="col-span-1 flex">
                <img className="h-8 w-6" src={MENU_URL} alt="menu" onClick={() => handleClick(toggleMenu())} />
                <img className="h-9 w-24 mx-2" src={LOGO_URL} alt="you-tube-icon" />
            </div>
            <div className="col-span-10 text-center pb-3">
                <input onChange={(e) => setSearch(e.target.value)} placeholder='Search' className='border border-gray-500 w-1/2 h-9 rounded-l-full px-2' type="text " value={search} />
                <button className='border border-gray-500 h-9 rounded-r-full px-2' onClick={() => searchClick(searchItem(searchVideos))} >search</button>
            </div>
            <div className="col-span-1">
                <img className="h-10 w-16 " src={USER_ICON_URL} alt="user" />
            </div>
        </div>

    </>

    )
}

export default Header
