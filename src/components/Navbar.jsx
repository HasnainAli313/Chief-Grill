import { useState } from "react";
import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu =()=>{
    setIsOpen(!isOpen);
  }

  return (
    <nav className="flex items-center justify-between p-6 bg-gray-800">
      <div className="flex items-center">
        <Link to="/" className="text-white mr-4 hover:text-gray-300">
          Chief Grill
        </Link>
      </div>
      <ul className={`flex gap-5 ${isOpen ? 'block' : 'hidden'} lg:flex lg:gap-5 md:flex-row flex-col items-left absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent p-6 lg:p-0
    `}>
        <Link to="/" className="text-sm text-gray-500 hover:text-gray-300 ">
          Home
        </Link>
        <Link to="/product" className="text-sm text-gray-500 hover:text-gray-300 ">
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
      <div className="flex lg:flex-row flex-col  lg:gap-0 gap-2">
        <Link to="./SignIn" className="text-sm text-gray-500 hover:text-gray-300 mx-3" >Sign in</Link>
        <Link to="./SignUp" className="text-sm text-gray-500 hover:text-gray-300 mx-3" >Sign up</Link>
      </div>
      </ul>
      <div className="block lg:hidden">
      <RxHamburgerMenu className="text-gray-500  hover:text-gray-300" onClick={toggleMenu} />
      </div>
    </nav>
    
  )
}

export default Navbar


