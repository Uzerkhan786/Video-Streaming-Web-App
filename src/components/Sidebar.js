import React from 'react'
import { useSelector } from 'react-redux';
const Sidebar = () => {
    const flag = useSelector(item => item.app.flag);
    if (flag === false) {
        return null;
    }
    return (
        <div className='col-span-1 ml-3 sticky' >
            <ul>
                <div className='border-b-2 border-gray-300'>
                    <li className='my-4'>Home</li>
                    <li className='my-4'>Shorts</li>
                    <li className='my-4'>kk</li>
                    <li className='my-4'>Subscriptions</li>
                </div>
                <div className='border-b-2 border-gray-300 mt-5'>
                    <h1 className='text-l font-bold'>You</h1>
                    <li className='my-4'>Your Channel</li>
                    <li className='my-4'>Watch Later</li>
                    <li className='my-4'>History</li>
                    <li className='my-4'>Show More</li>
                </div>

                <div className='mt-4'>
                    <h1 className='text-l font-bold'>Subscriptions</h1>
                    <li className='my-4'>Akshay Saini</li>
                    <li className='my-4'>Code with Harry</li>
                    <li className='my-4'>Sanket Singh</li>
                    <li className='my-4'>Love Babbar</li>
                </div>
            </ul>
        </div>
    )
}

export default Sidebar
