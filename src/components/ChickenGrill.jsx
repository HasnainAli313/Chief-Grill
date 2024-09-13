import img from '../assets/5.jpg'

function ChickenGrill() {
  return (
    <section   className='bg-[#313030] flex flex-row-reverse  flex-wrap justify-center  lg:justify-around items-center pt-10 pb-10'>
    <img  data-aos="fade-up"
    data-aos-duration="3000" className='w-[300px] h-[300px] rounded-[50%]' src={img} alt="chicken_grill_img" />
    <div data-aos="fade-up"
    data-aos-duration="3000" className=' lg:text-left text-center'>
    <h1 className="custom-font text-7xl lg:text-8xl">ChickenGrill</h1>
    <p className='text-white mt-5' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, sint.</p>
    <button className='bg-[#ffc404] rounded mt-5 p-1 w-[160px] font-semibold   hover:animate-pulse'>ORDER NOW</button>
    </div>
</section>
  )
}

export default ChickenGrill