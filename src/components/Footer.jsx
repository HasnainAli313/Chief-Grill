import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex  gap-10 bg-[#313030] text-white  lg:flex-row flex-col p-[70px] justify-evenly ">
        <div className="flex  flex-col">
           <h4 className="text-xl font-semibold">TITLE HERE</h4> 
           <p className="w-[150px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, saepe?</p>
           {/* social media */}
           <div className="flex mt-2 gap-5">
           <FiInstagram  size={20}/>
           <FaFacebook  size={20}/>
           <TiSocialTwitterCircular size={20} />
           <FaWhatsapp  size={20}/>
           </div>
        </div>

        <div>
        <h4 className="text-xl font-semibold" >ABOUT</h4> 
        <ul>
            <li>History</li>
            <li>Our Team</li>
            <li>Brand Guidelines</li>
            <li>Terms&Condition</li>
            <li>Privacy Policy</li>
        </ul>
        </div>

        <div>
        <h4 className="text-xl font-semibold">SERVICES</h4> 
        <ul>
            <li>How to Order</li>
            <li>Our Product</li>
            <li>Order Status</li>
            <li>Promo</li>
            <li>Payment Method</li>
        </ul>
        </div>

        <div>
        <h4 className="text-xl font-semibold">OTHER</h4> 
        <ul>
            <li>Contact Us</li>
            <li>Help</li>
            <li>Privacy</li>
            
        </ul>
        </div>
    </footer>
  )
}

export default Footer