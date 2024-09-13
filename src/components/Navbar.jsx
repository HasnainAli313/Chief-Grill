import { useState } from "react";
import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu =()=>{
    setIsOpen(!isOpen);
  }

  return (
    <nav className="flex sticky top-0 z-10 items-center justify-between p-6 bg-[#313030]" >
      <div className="flex items-center">
        <Link to="/" className="text-white mr-4 hover:text-gray-300" >
          Chief Grill
        </Link>
      </div>
      <ul className={`flex gap-5 ${isOpen ? 'block' : 'hidden'} lg:flex lg:gap-5 md:flex-row flex-col items-left absolute lg:static top-16 left-0 w-full lg:w-auto bg-[#313030] lg:bg-transparent p-6 lg:p-0
    `}>
        <Link to="/" className="text-sm text-gray-400 hover:text-gray-300 " >
          Home
        </Link>
      <a className="text-sm text-gray-400 hover:text-gray-300 " href="#product">
         Product
      </a>
      <a href="" className="text-sm text-gray-400 hover:text-gray-300">
          Promo
      </a>
        <Link to="/about" className="text-sm text-gray-400 hover:text-gray-300">
          About
        </Link>
        <Link to="/Contact" className="text-sm text-gray-400 hover:text-gray-300">
          Contact
        </Link>
      <div className="flex lg:flex-row flex-col  lg:gap-0 gap-2">
        <Link to="./SignIn" className="text-sm text-gray-400 hover:text-gray-300 mx-3" >Sign in</Link>
        <Link to="./SignUp" className="text-sm text-gray-400 hover:text-gray-300 mx-3" >Sign up</Link>
      </div>
      </ul>
      <div className="block lg:hidden">
      <RxHamburgerMenu className="text-gray-400  hover:text-gray-300" onClick={toggleMenu} />
      </div>
    </nav>
    
  )
}

export default Navbar


