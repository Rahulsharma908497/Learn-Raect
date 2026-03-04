import 'remixicon/fonts/remixicon.css'
import Herotext from './Herotext'
import Arrowtext from './Arrowtext'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
      <Herotext />
      <Arrowtext />
    </div>
  )
}

export default LeftContent
