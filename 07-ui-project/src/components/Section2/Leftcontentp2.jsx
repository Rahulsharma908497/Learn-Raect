import React from 'react'
import Leftcontenttext from './Leftcontenttext'
import LeftcontentCard from './LeftcontentCard'

const Leftcontentp2 = () => {
  return (
    <div className='h-full w-1/2 px-18 flex flex-col justify-between '>
      <Leftcontenttext />
      <div className='flex justify-between h-1/2 w-full'>
       <LeftcontentCard />
       <LeftcontentCard />
      </div>
    </div>
  )
}

export default Leftcontentp2
