import { Link } from "react-router-dom"


const Navbar = () => {
  return ( 
    <div className="nav">
       <h2>Portfolio</h2>
       <div>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/faq">FAQs</Link>
       </div>
    </div>
  )
}

export default Navbar