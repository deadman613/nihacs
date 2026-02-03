'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Our Courses', href: '#courses' },
    { name: 'About', href: '#about' },
  ];

  const headingStyle = {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontWeight: 900,
    letterSpacing: '-0.05em',
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isMenuOpen ? 'bg-transparent' : 'bg-black/95 backdrop-blur-sm'
      }`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left - Brand Name */}
            <div className="flex-1">
              <Link 
                href="/" 
                className={`text-2xl transition-colors duration-300 ${
                  isMenuOpen ? 'text-white' : 'text-white hover:text-lime-400'
                }`}
                style={headingStyle}
              >
                Nihacs
              </Link>
            </div>

            {/* Center - Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link href="/" className="block">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  {/* Placeholder for your logo - replace with your actual logo */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="14" fill="red"/>
                    <circle cx="16" cy="16" r="10" fill="white"/>
                  </svg>
                </div>
              </Link>
            </div>

            {/* Right - Get in touch button and Hamburger */}
            <div className="flex-1 flex items-center justify-end gap-4">
              <Link 
                href="#contact" 
                className={`hidden md:block px-6 hover:text-white py-2 rounded-full font-semibold transition-colors duration-300 ${
                  isMenuOpen 
                    ? 'bg-white text-black hover:bg-[#ff1e00] ' 
                    : 'bg-white text-black hover:bg-[#ff1e00] '
                }`}
                style={headingStyle}
              >
                Get in touch!
              </Link>

              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMenu}
                className="w-12 h-12 bg-[#ff1e00] rounded-full flex items-center justify-center hover:bg-white transition-colors focus:outline-none relative z-[60]"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span 
                    className={`w-full h-0.5 bg-black transition-all duration-300 ${
                      isMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  />
                  <span 
                    className={`w-full h-0.5 bg-black transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span 
                    className={`w-full h-0.5 bg-black transition-all duration-300 ${
                      isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Full Page Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-40 transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
      >
        <div className="h-full w-full flex items-center justify-center">
          <nav className="text-center">
            <ul className="space-y-8">
              {menuItems.map((item, index) => (
                <li 
                  key={item.name}
                  className={`transform transition-all duration-500 delay-${index * 100} ${
                    isMenuOpen 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-10 opacity-0'
                  }`}
                >
                  <Link
                    href={item.href}
                    className="text-white hover:text-red-600 transition-colors duration-300 block"
                    style={{
                      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 900,
                      letterSpacing: '-0.05em',
                      fontSize: 'clamp(3rem, 20vw, 4.5rem)',
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;