import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="w-full bg-light-bg px-5 pt-8 sm:pt-0">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-12">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-base sm:text-lg text-secondary">START A GOOD SKIN JOURNEY </p>
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-8xl text-primary">
            TAKE <br /> 10% OFF
          </h1>
          <div className='flex flex-col items-center lg:items-start'>
            <button className='bg-yellow text-primary px-4 py-3 mt-4 w-full sm:w-60 h-12 shadow-[0_4px_6px_rgba(0,0,0,0.3)] -rotate-2 hover:rotate-0 transition-transform duration-300'>
              CODE: WELLVERSED10
            </button>
              <button className='bg-black text-white px-4 py-2 mt-4 sm:ml-4 w-full sm:w-48 h-12'>
                SHOP 10% OFF
              </button>
          </div>
        </div>
            <div className="flex-1 flex justify-center lg:justify-end lg:-mr-32 w-full">
          <Image src="/images/heroimage.png"  alt="Hero Image" width={1000} height={600}  className="w-full max-w-lg lg:max-w-none"/>
        </div>  
      </div>
    </section>
  )
}

export default HeroSection