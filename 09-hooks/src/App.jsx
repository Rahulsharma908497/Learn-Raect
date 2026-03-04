import { useState } from "react"


const App = () => {
  const [num, setNum] = useState(0)
  function increaseNum(){
    setNum(num+1)
  }
  function decreaseNum(){
    setNum(num-1)
  }
  
  return (
    <div>
      <div className='meter'>
      <button>{num}</button>
      </div>
      <button onClick={increaseNum}>Incraese</button>
      <button onClick={decreaseNum}>Decrease</button>
      
    </div>
  )
}

export default App
