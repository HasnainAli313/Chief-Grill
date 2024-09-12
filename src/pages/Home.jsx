import banner from '../assets/banner.jpg'
function Home() {
  return (
    <header className='flex lg:flex-row flex-col h-[90vh]'>
      <img src={banner} alt="" />
      <div className='h-[505px] lg:text-left text-center lg:w-[625px] bg-[#313030] '>
        <div className=' m-14'>
        <h1 className='custom-font text-8xl'>Chief Grill</h1>
        <p className='mt-[30px] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, explicabo.</p>
        <button className='bg-[#ffc404] rounded mt-5 p-1 w-[160px] font-semibold   hover:animate-pulse'>ORDER NOW</button>
        </div>
      </div>
    </header>
  )
}

export default Home