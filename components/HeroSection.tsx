"use client";

import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

const HeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      id="home" 
      className="w-full px-5 py-16 sm:py-0 overflow-hidden min-h-[calc(100vh-3.25rem)] flex items-center bg-cover bg-[80%_center] sm:bg-right bg-no-repeat relative"
      style={{ backgroundImage: 'url("/elegant-skin-care-banner-design.jpg")' }}
    >
      {/* Gradient overlay to ensure text readability on the left while keeping the right vibrant */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#e3ebce]/80 via-[#e3ebce]/40 to-transparent sm:from-[#e3ebce]/60 sm:via-[#e3ebce]/20 sm:to-transparent"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-center">
        <div className="max-w-2xl text-center lg:text-left bg-white/40 sm:bg-transparent p-6 sm:p-0 rounded-2xl sm:rounded-none backdrop-blur-md sm:backdrop-blur-none">
          <ScrollAnimation animation="fade-up" delay={0.2}>
            <p className="text-sm sm:text-base text-[#2c3f2d] font-bold tracking-[0.3em] uppercase">START A GOOD SKIN JOURNEY</p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={0.4}>
            <h1 className="font-extrabold text-6xl sm:text-7xl lg:text-[7rem] text-[#1a2615] mt-3 sm:mt-5 leading-[0.9] tracking-tight">
              TAKE <br className="hidden sm:block" /> 10% OFF
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={0.6}>
            <div className='flex flex-col items-center lg:items-start mt-8'>
              <button className='bg-white font-bold text-[#1a2615] px-6 py-3 w-full sm:w-auto h-12 min-w-[240px] shadow-[0_4px_10px_rgba(0,0,0,0.05)] border border-[#1a2615]/10 -rotate-2 hover:rotate-0 hover:bg-gray-50 hover:shadow-lg transition-all duration-300'>
                CODE: WELLVERSED10
              </button>
              <button className='bg-[#2c3f2d] text-white px-8 py-2 mt-4 sm:ml-4 w-full sm:w-auto h-12 min-w-[200px] hover:bg-[#1a2615] hover:scale-105 shadow-md transition-all duration-300'>
                SHOP 10% OFF
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </motion.section>
  )
}

export default HeroSection