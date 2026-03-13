import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    setUserData(response.data)
    
  }
  useEffect(function() {
    getData()

  },[index])

  let printUserData = <h3 className="text-gray-300 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">Loading...</h3>
  if(userData.length > 0){
    printUserData = userData.map(function(elem,idx) {

      return <div key={idx}>
        {/* target="_blank" is used for the image link open in new tab browser */}
        <a href={elem.url} target="_blank">
          <div className="h-54 w-58 overflow-hidden bg-white rounded-xl">
        <img className="h-full w-full object-cover" src={elem.download_url} alt="" />
      </div>
      <h2 className="font-bold text-gray-550 text-lg">{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className=' h-screen bg-black overflow-auto p-4 text-white'>
      {/* <button onClick={getData} className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white'>Get Data</button> */}
     
      <div className="flex h-[82%] flex-wrap p-2 gap-4">
        {printUserData}
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-6">
        <button 
        style={{ opacity: index == 1 ? 0.5 : 1}}
        onClick={()=>{
          if(index > 1){
            setIndex(index-1)
            setUserData([])
          }
        }} className="bg-amber-400 text-black px-4 cursor-pointer py-2 active:scale-95 text-lg font-semibold">
          Prev
          </button>
        <h3 className="text-sm">Page - {index}</h3>
        <button onClick={()=>{
          setIndex(index+1)
          setUserData([])
        }} className="bg-amber-400 text-black px-5 py-2 cursor-pointer active:scale-95 text-lg font-semibold">Next</button>
      </div>
    </div>
   
  )
}

export default App
