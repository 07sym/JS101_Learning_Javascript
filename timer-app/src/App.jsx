import { useEffect } from 'react'
import { useState } from 'react'




function Timer() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
   setTimeout(() =>{
    setCount(prevCount => prevCount + 1)
   },1000)

  },[count])

  return (
    <>
       <h2>Time:{count}</h2>
       
    </>
  )
}

export default App
