import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="flex  gap-10 bg-[#313030] text-white  lg:flex-row flex-col p-[70px] justify-evenly ">
        <div className="flex  flex-col">
           <h4 className="text-xl font-semibold">TITLE HERE</h4> 
           <p className="w-[150px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, saepe?</p>
           {/* social media */}
           <div className="flex mt-2 gap-5">
           <FiInstagram className="hover:text-gray-400 cursor-pointer"  size={20}/>
           <FaFacebook  className="hover:text-gray-400 cursor-pointer" size={20}/>
           <TiSocialTwitterCircular className="hover:text-gray-400 cursor-pointer" size={20} />
           <FaWhatsapp  className="hover:text-gray-400 cursor-pointer" size={20}/>
           </div>
        </div>

        <div>
        <h4 className="text-xl font-semibold" >ABOUT</h4> 
        <ul>
            <li className="hover:text-gray-400 cursor-pointer">History</li>
            <li className="hover:text-gray-400 cursor-pointer">Our Team</li>
            <li className="hover:text-gray-400 cursor-pointer">Brand Guidelines</li>
            <li className="hover:text-gray-400 cursor-pointer">Terms&Condition</li>
            <li className="hover:text-gray-400 cursor-pointer">Privacy Policy</li>
        </ul>
        </div>

        <div>
        <h4 className="text-xl font-semibold">SERVICES</h4> 
        <ul>
            <li  className="hover:text-gray-400 cursor-pointer">How to Order</li>
            <li  className="hover:text-gray-400 cursor-pointer">Our Product</li>
            <li  className="hover:text-gray-400 cursor-pointer">Order Status</li>
            <li  className="hover:text-gray-400 cursor-pointer">Promo</li>
            <li  className="hover:text-gray-400 cursor-pointer">Payment Method</li>
        </ul>
        </div>

        <div>
        <h4 className="text-xl font-semibold">OTHER</h4> 
        <ul>
            <li  className="hover:text-gray-400 cursor-pointer"><Link to="/contact" >Contact Us</Link></li>
            <li  className="hover:text-gray-400 cursor-pointer">Help</li>
            <li  className="hover:text-gray-400 cursor-pointer">Privacy</li>
        </ul>
        </div>
    </footer>
  )
}

export default Footer