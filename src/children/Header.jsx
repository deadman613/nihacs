'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

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
    { name: 'Our Courses', href: '/courses' },
    { name: 'About', href: '#about' },
  ];

  const headingStyle = {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontWeight: 900,
    letterSpacing: '-0.05em',
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isMenuOpen ? 'bg-transparent' : 'bg-black/95 backdrop-blur-sm'
        }`}
      >
        <nav className="container mx-auto px-4 md:px-6 py-4 md:py-5">
          <div className="flex items-center justify-between relative">

            {/* Left - Brand Name / Logo text */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className={`text-xl sm:text-2xl transition-colors duration-300 ${
                  isMenuOpen ? 'text-white' : 'text-white hover:text-lime-400'
                }`}
                style={headingStyle}
              >
                <img
                  src="/logo/logo.png"
                  alt="Brand Logo"
                  className="h-9 sm:h-10 w-auto max-w-[140px] sm:max-w-[160px]"
                />
              </Link>
            </div>

            {/* Center - Animated Logo (stays centered) */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link href="/" className="block">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/gif/gif1.mp4" type="video/mp4" />
                  </video>
                </div>
              </Link>
            </div>

            {/* Right - Get in touch button + Hamburger */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-shrink-0">
              <Link
                href="#contact"
                className={`hidden md:inline-flex px-5 sm:px-6 py-2.5 rounded-full font-semibold transition-colors duration-300 text-base sm:text-lg ${
                  isMenuOpen
                    ? 'bg-white text-black hover:bg-[#ff1e00] hover:text-white'
                    : 'bg-white text-black hover:bg-[#ff1e00] hover:text-white'
                }`}
                style={headingStyle}
              >
                Get in touch!
              </Link>

              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMenu}
                className="w-11 h-11 sm:w-12 sm:h-12 bg-[#ff1e00] rounded-full flex items-center justify-center hover:bg-white transition-colors focus:outline-none relative z-[60] flex-shrink-0"
                style={headingStyle}
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 sm:w-6 sm:h-5 flex flex-col justify-between">
                  <span
                    className={`w-full h-0.5 sm:h-[3px] bg-black transition-all duration-300 ${
                      isMenuOpen ? 'rotate-45 translate-y-1.5 sm:translate-y-2' : ''
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 sm:h-[3px] bg-black transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0 scale-0' : ''
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 sm:h-[3px] bg-black transition-all duration-300 ${
                      isMenuOpen ? '-rotate-45 -translate-y-1.5 sm:-translate-y-2' : ''
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
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="h-full w-full flex items-center justify-center px-6">
          <nav className="text-center w-full max-w-4xl">
            <ul className="space-y-10 sm:space-y-12 md:space-y-16">
              {menuItems.map((item, index) => (
                <li
                  key={item.name}
                  className={`transform transition-all duration-500 delay-${index * 150}`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms',
                  }}
                >
                  <Link
                    href={item.href}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white hover:text-[#ff1e00] transition-colors duration-300 block py-2"
                    style={headingStyle}
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