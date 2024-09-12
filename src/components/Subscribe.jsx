
function Subscribe() {
  return (
    <section className="text-center bg-slate-200 lg:h-[70vh] p-16">
             <h1 className="custom-font text-black text-7xl lg:text-8xl">Subscribe</h1>
             <p className="m-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, sint.</p>
             <div className=" flex justify-center gap-2 lg:gap-0 lg:flex-row flex-col">
                <input className="border p-1 w-[100%]  lg:w-[30%]" type="email"  placeholder="Your Email"/>
                <button className="bg-[#ffc404] font-semibold p-1">SUBSCRIBE</button>
             </div>
    </section>
  )
}

export default Subscribe