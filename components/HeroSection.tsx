import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="w-full bg-light-bg px-5 pt-0  -mt-6">
      <div className="max-w-7xl mx-auto flex h-full items-center gap-10">
        <div className="flex-1">
          <p className="text-lg text-secondary">START A GOOD SKIN JOURNEY </p>
          <h1 className="font-bold text-8xl text-primary">TAKE <br /> 10% OFF</h1>
          <div className='flex flex-col'>
            <button className='bg-yellow text-primary px-4 py-3 mt-4 w-60 h-12 shadow-[0_4px_6px_rgba(0,0,0,0.3)] -rotate-2 hover:rotate-0 transition-transform duration-300'>CODE: WELLVERSED10</button>
              <button className='bg-black text-white px-4 py-2 mt-4 ml-4 w-48 h-12'>SHOP 10% OFF</button>
          </div>
        </div>
            <div className="flex-1 flex justify-end -mr-32">
          <Image src="/images/heroimage.png"  alt="Hero Image" width={1000} height={600}  className="left-0"/>
        </div>  
      </div>
    </section>
  )
}

export default HeroSection