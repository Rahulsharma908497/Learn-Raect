import React from 'react'

const App = () => {

  localStorage.setItem('user','Rahul Sharma')
  sessionStorage.setItem('age','18')
  const user = localStorage.getItem('user')
  sessionStorage.removeItem('age')


  const users = localStorage.getItem('users')

   const user2 = JSON.parse(localStorage.getItem('user1'))

   console.log(user2);

   localStorage.removeItem('users')
   
  
  return (
    <div>
      
    </div>
  )
}

export default App
