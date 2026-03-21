import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 px-8 bg-cyan-900'>
        <h2 className='font-bold text-xl '>Portfolio</h2>
        <div className='flex gap-5'>
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/product" >Product</Link>
        </div>
        
    </div>
  )
}

export default Navbar