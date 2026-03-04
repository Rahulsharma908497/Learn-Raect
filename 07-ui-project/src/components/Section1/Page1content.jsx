import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = (props) => {
  
  return (
    <div className='flex py-10 gap-10 items-center h-[90vh] px-18'>
      <LeftContent />
      <RightContent user={props.user}/>
    </div>
  )
}

export default Page1content
