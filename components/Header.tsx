"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'products', 'recovery', 'join'];
            let current = 'home';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section is near the top of the viewport
                    if (rect.top <= 150) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Offset the scroll to account for the sticky header height
            const headerOffset = 70;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(sectionId);
        }
    };

    const navItems = [
        { id: 'home', label: 'HOME' },
        { id: 'products', label: 'SHOP' },
        { id: 'recovery', label: 'LEARN' },
        { id: 'join', label: 'JOIN' }
    ];

    // Lock body scroll when cart or search is open
    useEffect(() => {
        if (isCartOpen || isSearchOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [isCartOpen, isSearchOpen]);

    return (
        <>
            <header className='w-full border-b border-[#1a2615]/10 sticky top-0 z-50 bg-[#e3ebce]'>
                <nav className='w-full text-[#1a2615] py-4 px-5 flex items-center justify-between gap-4 flex-wrap'>
                    <div 
                        onClick={() => scrollToSection('home')}
                        className='font-bold text-lg sm:text-xl border border-[#1a2615] px-2 py-1 hover:bg-[#1a2615] hover:text-[#e3ebce] transition-colors cursor-pointer tracking-widest'
                    >
                        VERSED
                    </div>
                    <div className='hidden md:flex gap-6'>
                        <ul className='flex gap-6 text-sm tracking-[0.1em] font-medium'>
                            {navItems.map(item => (
                                <li 
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`transition-colors cursor-pointer ${activeSection === item.id ? 'font-bold opacity-100' : 'opacity-60 hover:opacity-100'}`}
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex gap-3 sm:gap-4'>
                        <img 
                            src="/icons/search.png" 
                            alt="Search" 
                            className='w-6 h-8 sm:w-7 sm:h-9 hover:opacity-70 transition-opacity cursor-pointer' 
                            onClick={() => setIsSearchOpen(true)}
                        />
                        <img 
                            src="/icons/cart.png" 
                            alt="Cart" 
                            className='w-6 h-8 sm:w-7 sm:h-9 hover:opacity-70 transition-opacity cursor-pointer' 
                            onClick={() => setIsCartOpen(true)}
                        />
                    </div>
                </nav>
            </header>

            {/* Search Overlay */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center px-5"
                    >
                        <button 
                            onClick={() => setIsSearchOpen(false)}
                            className="absolute top-6 right-6 text-4xl text-primary hover:text-amber-600 transition-colors leading-none"
                        >
                            &times;
                        </button>
                        <div className="w-full max-w-3xl">
                            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-8 text-center uppercase">What are you looking for?</h2>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    placeholder="Search products, ingredients, etc..." 
                                    className="w-full border-b-2 border-primary bg-transparent text-xl md:text-2xl py-4 pr-12 focus:outline-none focus:border-amber-600 transition-colors"
                                    autoFocus
                                />
                                <img 
                                    src="/icons/search.png" 
                                    alt="Search" 
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-6 sm:w-8 opacity-50"
                                />
                            </div>
                            <div className="mt-8">
                                <p className="text-secondary mb-4">Popular Searches</p>
                                <div className="flex flex-wrap gap-3">
                                    {['Doctor\'s Visit', 'Dew Point', 'Cleanser', 'Vitamin C', 'Acne'].map(term => (
                                        <span key={term} className="px-4 py-2 border border-[#E5E7EB] rounded-full text-sm text-primary hover:bg-light-bg cursor-pointer transition-colors">
                                            {term}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Cart Sidebar */}
            <AnimatePresence>
                {isCartOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsCartOpen(false)}
                            className="fixed inset-0 z-[60] bg-black"
                        />
                        <motion.div 
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB]">
                                <h2 className="text-xl font-bold text-primary">YOUR CART (2)</h2>
                                <button 
                                    onClick={() => setIsCartOpen(false)}
                                    className="text-4xl text-primary hover:text-amber-600 transition-colors leading-none"
                                >
                                    &times;
                                </button>
                            </div>
                            
                            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                                {/* Mock Cart Item 1 */}
                                <div className="flex gap-4">
                                    <div className="w-24 h-24 bg-light-bg flex-shrink-0 p-2 flex items-center justify-center">
                                        <img src="/images/Products/product-1.png" alt="Product" className="max-h-full object-contain" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-bold text-primary">DOCTOR'S VISIT</h3>
                                            <p className="text-sm text-secondary">Instant Resurfacing Mask</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex items-center border border-[#E5E7EB]">
                                                <button className="px-3 py-1 text-primary hover:bg-light-bg">-</button>
                                                <span className="px-3 text-sm">1</span>
                                                <button className="px-3 py-1 text-primary hover:bg-light-bg">+</button>
                                            </div>
                                            <span className="font-bold text-primary">$17.99</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Mock Cart Item 2 */}
                                <div className="flex gap-4">
                                    <div className="w-24 h-24 bg-light-bg flex-shrink-0 p-2 flex items-center justify-center">
                                        <img src="/images/Products/product-2s.png" alt="Product" className="max-h-full object-contain" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-bold text-primary">DEW POINT</h3>
                                            <p className="text-sm text-secondary">Moisturizing Gel-Cream</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex items-center border border-[#E5E7EB]">
                                                <button className="px-3 py-1 text-primary hover:bg-light-bg">-</button>
                                                <span className="px-3 text-sm">1</span>
                                                <button className="px-3 py-1 text-primary hover:bg-light-bg">+</button>
                                            </div>
                                            <span className="font-bold text-primary">$14.99</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-[#E5E7EB] bg-light-bg">
                                <div className="flex justify-between mb-4 text-primary">
                                    <span className="font-bold">SUBTOTAL</span>
                                    <span className="font-bold">$32.98</span>
                                </div>
                                <p className="text-sm text-secondary mb-6 text-center">Shipping & taxes calculated at checkout</p>
                                <button className="w-full bg-black text-white py-4 font-bold tracking-wide hover:bg-black/80 transition-colors">
                                    CHECKOUT
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Header;