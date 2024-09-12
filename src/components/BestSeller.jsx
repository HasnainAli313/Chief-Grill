import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';

function BestSeller() {
  return (
    <section className="p-10 text-center  ">
        <h1 className="custom-font text-black text-7xl lg:text-8xl">Best Seller</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, sint.</p>
        
        {/* items */}
        <div className='flex  flex-wrap justify-around mt-[50px]'>
            <div className=''>
                <img className='m-auto w-[170px] rounded-[50%] h-[170px]' src={img1} alt="" />
                <h4 className="custom-font text-xl  m-2 font-semibold text-black">TITLE HERE</h4>
                <p className='w-[200px]'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className=''>
                <img className='m-auto w-[170px] rounded-[50%] h-[170px]' src={img2} alt="" />
                <h4 className="custom-font text-xl m-2 font-semibold text-black">TITLE HERE</h4>
                <p className='w-[200px]'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className=''>
                <img className='m-auto w-[170px] rounded-[50%] h-[170px]' src={img3} alt="" />
                <h4 className="custom-font text-xl m-2 font-semibold text-black">TITLE HERE</h4>
                <p className='w-[200px]'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </div>
    </section>
  )
}

export default BestSeller