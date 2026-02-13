import React from 'react'

const Header = () => {
  return (
    <header className='w-full border-b border-[#E5E7EB]'>

        <nav className='w-full bg-light-bg text-primary py-4 px-5 flex items-center justify-between gap-4 flex-wrap'>
            <div className='font-bold text-lg sm:text-xl border border-black px-2 py-1'>VERSED</div>
            <div className='hidden md:flex gap-6'>
                <ul className='flex gap-6 text-sm tracking-wide'>
                    <li>SHOP</li>
                    <li>NEW</li>
                    <li>BEST SELLERS</li>
                    <li>LEARN</li>
                </ul>
            </div>
            <div className='flex gap-3 sm:gap-4'>
                <img src="/icons/search.png" alt="Search" className='w-6 h-8 sm:w-7 sm:h-9' />
                <img src="/icons/cart.png" alt="Cart" className='w-6 h-8 sm:w-7 sm:h-9' />
                <img src="/icons/dark.png" alt="Theme" className='w-6 h-8 sm:w-7 sm:h-9' />
            </div>
        </nav>
    </header>
  )
}

export default Header