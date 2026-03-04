import React, { useState } from 'react'

const App = () => {
    const [num, setNum] = useState(1)

    function btnClick(){
        setNum(prev=>(prev+1))
        setNum(prev=>(prev+1))
        setNum(prev=>(prev+1))
    }

  return (
        <div>
            <h1>{num}</h1>
            <button onClick={btnClick}>Click</button>
        </div>
    
        
  )
}

export default App
