import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Home() {

    const [num , setNum] = useState(
        (sessionStorage.getItem("num")!==null)?
        JSON.parse(sessionStorage.getItem('num')):0
    )

    useEffect((e)=>{
      setNum(num+1)
        
    },[])
    sessionStorage.setItem("number",num.tostring())
  return (
    <div>Home</div>
  )
}

export default Home