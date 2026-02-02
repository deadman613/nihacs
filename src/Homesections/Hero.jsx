'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const rotatingTexts = [
    { gray: "SECURE", white: "STUFF" },
    { gray: "PROTECT", white: "DATA" },
    { gray: "DEFEND", white: "SYSTEMS" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        (prevIndex + 1) % rotatingTexts.length
      );
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-black flex  scroll-smooth items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Main Heading with Rotating Text */}
        <div className="mb-16 relative">
          <h1 className="font-black leading-none tracking-tighter" style={{ 
            fontSize: 'clamp(3.5rem, 8vw, 12rem)',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 900,
            letterSpacing: '-0.05em'
          }}>
            <span className="block text-gray-500 opacity-80" style={{ fontWeight: 900 }}>
              LET'S
            </span>
            
            {/* Rotating Middle Text with Animation */}
            <div className="relative overflow-hidden my-4" style={{ height: '1.1em' }}>
              {rotatingTexts.map((text, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
                    index === currentTextIndex
                      ? 'opacity-100 translate-y-0'
                      : index < currentTextIndex
                      ? 'opacity-0 -translate-y-full'
                      : 'opacity-0 translate-y-full'
                  }`}
                  style={{ fontWeight: 900 }}
                >
                  <span className="text-gray-500 opacity-80">{text.gray}</span>
                  <span className="text-red-500 mx-6" style={{ fontSize: '0.4em' }}>●</span>
                </div>
              ))}
            </div>
            
            <span className="block text-white" style={{ fontWeight: 900 }}>
              {rotatingTexts[currentTextIndex].white}
            </span>
          </h1>
        </div>

        {/* Description Text */}
        <div className="mb-12 text-xl sm:text-2xl md:text-2xl text-gray-00 max-w-4xl mx-auto leading-relaxed">
          <p>
            <span className="font-bold ">Nihacs</span>, a{' '}
            <span className="text-red-500 font-semibold">Cybersecurity</span> and{' '}
            <span className="text-red-500 font-semibold">Programming</span> platform
          </p>
          <p className="mt-3">
            with expertise in{' '}
            <span className="text-red-500 font-semibold">Ethical Hacking</span> and{' '}
            <span className="text-red-500 font-semibold">Development</span>.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Link
            href="#courses"
            className="inline-block bg-red-600 text-white text-lg sm:text-xl font-bold px-12 py-5 rounded-full hover:bg-lime-500 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/50"
          >
            Let's learn together!
          </Link>
        </div>

        {/* Small decorative dot */}
        <div className="absolute top-20 right-10 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;