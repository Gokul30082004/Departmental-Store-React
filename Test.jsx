import React, { useEffect, useState } from 'react'

const defaultData = {
    name: 'none',
    size: 20,
}
function Test({ data = defaultData }) {
    let { name, size } = data
    const [dsize, setdsize] = useState(size)
    const myfunction = () => {
        setdsize(dsize + 20)
        console.log(dsize)
    }
    useEffect(()=>{
        const interval=setInterval(()=>{
            if(dsize<130)
            {
            setdsize(dsize+20)
            }
            while(true)
            {
                console.log('hii')
                break
            }
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    },[dsize])
    return (
        <div><span style={{ fontSize: `${dsize}px` }}>{name} {size}</span><button onClick={myfunction}>button</button></div>
    )
}

export default Test