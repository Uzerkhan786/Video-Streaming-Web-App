import React, { useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom'
import LiveChat from './LiveChat';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../utils/chatSlice';
import { random } from '../utils/randomMsh';

const VideoDetails = () => {
    const [name, setName] = useState('')
    const { id } = useParams();
    const dispatch = useDispatch();
    const arr = useSelector((item) => item.chat.msg);

    useEffect(() => {
        const b = setInterval(() => {
            dispatch(addChat({ name: name, msg: random() }))
        }, 1000)
        return () => clearInterval(b)
    }, [])


    return (

        <div className="m-3 p-3 flex">

            <div className='w-9/12 '>
                <iframe className='w-full h-[35rem]'
                    src={`https://www.youtube.com/embed/${id}?si=Z-Aq-8nP9-HLlIOl`}
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer;
                    autoplay;
                    clipboard-write;
                    encrypted-media;
                    gyroscope; 
                    picture-in-picture;
                    web-share"
                >
                </iframe>
            </div>
            <div className="w-3/12 h-[35rem] ">
                <div className='h-[35rem] border border-slate-500 p-2 ml-2 bg-slate-100 overflow-y-scroll flex flex-col-reverse '>
                    {arr?.map((item, index) => <LiveChat key={index} name={item.name} msg={item.msg} />)}
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(addChat({ name: 'uzer', msg: name }))
                    setName('')
                }}>
                    < input type="text" className=' border border-black  rounded-md ml-2 mt-2'
                        placeholder='enter message' onChange={(e) => setName(e.target.value)} />
                    <button button className=' h-6 border border-black rounded-sm font-bold ml-2' onClick={() => {

                    }}> send </button>


                </form>
            </div>


        </div>


    )
}

export default VideoDetails


