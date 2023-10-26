import { useState ,useEffect } from 'react'



function Timer() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const intarvalId = setInterval(()=>{
      setCount(prevCount => prevCount + 1)
    },1000)

    return()=>{
      clearInterval(intarvalId)
    }

  },[])

  return (
    <>
      <div>
        <h1>Time:{count}</h1>
      </div>
        
    </>
  )
}

export default Timer
