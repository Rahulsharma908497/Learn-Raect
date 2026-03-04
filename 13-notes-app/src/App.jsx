import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    const newTask = [...task];
    newTask.push({title,details})
    setTask(newTask)
    
    
    e.preventDefault()
    setTitle('')
    setDetails('')
    
  }

  const deletenote = (idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
    
  }

  return (
    <div className='h-screen lg:flex text-white bg-black'>
      <form onSubmit={(e) => {
        submitHandler(e)

      }} className='flex gap-4 lg:w-1/2 flex-col p-10'>
          <h1 className='text-4xl font-bold'>Add Notes</h1>
          
          {/* first input for heading */}
          <input 
            type="text" 
            placeholder='Enter Notes Heading' 
            className='px-5 w-full font-medium outline-none py-2 border-2 rounded'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              
            }}
          />

          {/* second input for detail */}
          <textarea type="text" 
          className='h-32 w-full outline-none font-medium border-2 px-5 py-2 rounded'  
          placeholder='Write Details'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
          />
          <button 
          className='bg-white cursor-pointer active:scale-95 w-full font-medium outline-none text-black px-5 py-2 rounded'
          >Add Note
          </button>
        
      </form>
      <div className='lg:border-l-2 lg:w-1/2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 overflow-auto h-[90%] mt-5'>
          {task.map(function(elem,idx) {

            return <div key={idx} className="text-black flex justify-between flex-col bg-cover h-62 w-50 rounded-2xl  pt-5 pb-3 px-4 bg-[url('data:image/png;base64,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')]">
              <div>
                <h3 className='leading-tight text-lg font-bold '>{elem.title}</h3>
                <p className='mt-3 text-xs leading-tight font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button 
              onClick={() => {
                deletenote(idx)
              }}
              className='w-full py-1 cursor-pointer active:scale-95 bg-red-400 text-xs rounded font-bold text-white'>Delete</button>
            </div>

          })}
        </div>
      </div>
    </div>
  )
}

export default App
