import React from 'react'
import { USER_ICON_URL } from '../utils/constants'
const LiveChat = ({ name, msg }) => {
    return (
        <div className='flex'>


            <h1 className=''>{name}</h1>


            <p className='ml-2'>{msg}</p>

        </div>
    )
}

export default LiveChat
