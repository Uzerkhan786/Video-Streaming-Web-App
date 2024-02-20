import React, { useEffect, useState } from 'react'

const Extra = () => {

    const [arr, setArr] = useState([]);
    useEffect(() => {
        setInterval(() => {
            setArr('uzer')
        }, 200)
    }, [arr])



    return (
        <div>
            {console.log(arr)}
            <h1>uzer</h1>
        </div>
    )
}

export default Extra
