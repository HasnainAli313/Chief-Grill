import { Link } from "react-router-dom"
function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-gray-800">
      <div className="flex items-center">
        <Link to="/" className="text-white mr-4 hover:text-gray-300">
          Chief Grill
        </Link>
      </div>
      <ul className="flex gap-5">
        <Link to="/" className="text-sm text-gray-500 hover:text-gray-300 mx-3">
          Home
        </Link>
        <Link to="/product" className="text-sm text-gray-500 hover:text-gray-300 mx-3">
         Product
        </Link>
        <Link to="/promo" className="text-sm text-gray-500 hover:text-gray-300">
          Promo
        </Link>
        
        <Link to="/about" className="text-sm text-gray-500 hover:text-gray-300">
          About
        </Link>
        <Link to="/contact" className="text-sm text-gray-500 hover:text-gray-300">
          Contact
        </Link>
      </ul>
      <div>
        <Link to="./SignIn.jsx" className="text-sm text-gray-500 hover:text-gray-300 mx-3" >Sign in</Link>
        <Link to="" className="text-sm text-gray-500 hover:text-gray-300 mx-3" >Sign up</Link>
      </div>
    </nav>
    
  )
}

export default Navbar