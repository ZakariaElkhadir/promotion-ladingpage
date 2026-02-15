import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

const HeroSection = () => {
  return (
    <section className="w-full bg-light-bg px-5 pt-8 sm:pt-0 overflow-hidden min-h-[calc(100vh-3.25rem)]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-12">
        <div className="flex-1 text-center lg:text-left">
          <ScrollAnimation animation="fade-up" delay={0.2}>
            <p className="text-base sm:text-lg text-secondary">START A GOOD SKIN JOURNEY </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={0.4}>
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-8xl text-primary">
              TAKE <br /> 10% OFF
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={0.6}>
            <div className='flex flex-col items-center lg:items-start'>
              <button className='bg-yellow text-primary px-4 py-3 mt-4 w-full sm:w-60 h-12 shadow-[0_4px_6px_rgba(0,0,0,0.3)] -rotate-2 hover:rotate-0 transition-transform duration-300'>
                CODE: WELLVERSED10
              </button>
              <button className='bg-black text-white px-4 py-2 mt-4 sm:ml-4 w-full sm:w-48 h-12'>
                SHOP 10% OFF
              </button>
            </div>
          </ScrollAnimation>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end lg:-mr-32 w-full">
          <ScrollAnimation animation="fade-in" delay={0.8} className="w-full flex justify-center lg:justify-end">
            <Image
              src="/images/heroimage1.png"
              alt="Hero Image"
              width={1000}
              height={600}
              className="w-full max-w-lg lg:max-w-none max-h-[calc(100vh-3.25rem)] object-contain"
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default HeroSection