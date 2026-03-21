import { useNavigate } from 'react-router-dom'

const Navbar1 = () => {

    let navigate = useNavigate()
  return (
    <div className='bg-cyan-800'>
        <button onClick={()=>{
        navigate("/")
      }} className='bg-amber-500 font-medium px-5 py-2 m-2 rounded cursor-pointer active:scale-95'>Return to Home Page</button>
      <button onClick={()=>{
        navigate(-1)
      }} className='bg-amber-500 font-medium px-5 py-2 m-2 rounded cursor-pointer active:scale-95'>Back</button>
      <button onClick={()=>{
        navigate(+1)
      }} className='bg-amber-500 font-medium px-5 py-2 m-2 rounded cursor-pointer active:scale-95'>Next</button>

    </div>
  )
}

export default Navbar1