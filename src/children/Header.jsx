'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Our Courses', href: '/courses' },
    { name: 'About', href: '/About' },
    { name: 'Blog', href: '/blog' },
    { name: 'Get in touch!', href: '/Contact' },
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

            {/* Left — Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <img
                  src="/logo/logo.png"
                  alt="Brand Logo"
                  className="h-9 sm:h-10 w-auto max-w-[140px] sm:max-w-[160px]"
                />
              </Link>
            </div>

            {/* Center — Animated circle logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link href="/" className="block">
                <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg"
                  style={{ width: 'clamp(3.2rem, 7vw, 6rem)', height: 'clamp(3.2rem, 7vw, 6rem)' }}
                >
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="/gif/gif1.mp4" type="video/mp4" />
                  </video>
                </div>
              </Link>
            </div>

            {/* Right — Desktop buttons + hamburger */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">

              {/* Desktop only buttons */}
              <Link
                href="/blog"
                className="hidden md:inline-flex px-5 py-2.5 rounded-full font-semibold bg-white text-black hover:bg-[#ff1e00] hover:text-white transition-colors duration-300 text-base whitespace-nowrap"
                style={headingStyle}
              >
                Blog
              </Link>
              <Link
                href="/Contact"
                className="hidden md:inline-flex px-5 py-2.5 rounded-full font-semibold bg-white text-black hover:bg-[#ff1e00] hover:text-white transition-colors duration-300 text-base whitespace-nowrap"
                style={headingStyle}
              >
                Get in touch!
              </Link>

              {/* Hamburger — always visible */}
              <button
                onClick={toggleMenu}
                className="w-10 h-10 sm:w-11 sm:h-11 bg-[#ff1e00] rounded-full flex items-center justify-center hover:bg-white transition-colors focus:outline-none relative z-[60] flex-shrink-0"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                  <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`} />
                  <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Full-page overlay menu */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-all duration-500 ease-in-out flex flex-col ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Nav links — centered vertically */}
        <div className="flex-1 flex items-center justify-center px-6">
          <nav className="text-center w-full max-w-4xl">
            <ul className="space-y-8 sm:space-y-10 md:space-y-14">
              {menuItems.map((item, index) => (
                <li
                  key={item.name}
                  style={{ transitionDelay: isMenuOpen ? `${index * 80}ms` : '0ms' }}
                  className={`transform transition-all duration-500 ${
                    isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <Link
                    href={item.href}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white hover:text-[#ff1e00] transition-colors duration-300 block py-1"
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

        {/* Bottom CTA buttons — visible on mobile only (md hides since desktop has them in header)
        <div className="md:hidden flex flex-col sm:flex-row items-center justify-center gap-3 px-6 pb-10">
          <Link
            href="/blog"
            onClick={() => setIsMenuOpen(false)}
            className="w-full sm:w-auto text-center px-8 py-3 rounded-full font-semibold bg-white text-black hover:bg-[#ff1e00] hover:text-white transition-colors duration-300 text-base"
            style={headingStyle}
          >
            Blog
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="w-full sm:w-auto text-center px-8 py-3 rounded-full font-semibold bg-[#ff1e00] text-white hover:bg-white hover:text-black transition-colors duration-300 text-base"
            style={headingStyle}
          >
            Get in touch!
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Header;