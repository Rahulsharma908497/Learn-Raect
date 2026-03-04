import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')
  const formsubmitted = (e) => {
    e.preventDefault()
    console.log('form submitted by',title);
    settitle('')
  }
  return (
    <div>
      <form onSubmit={(e) => {
        formsubmitted(e)
      }}>
        <input 
        type="text" 
        placeholder='Enter your name'
        value={title}
        onChange={(e) => {
          settitle(e.target.value)
        }}
        />
        <button>Sumbit</button>
      </form>
    </div>
  )
}

export default App

