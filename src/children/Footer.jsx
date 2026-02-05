"use client";

import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/nihacs",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com/nihacs",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@nihacs",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/nihacs",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  const credits = [
    {
      text: "Web development by",
      name: "Your Name",
      href: "#",
    },
    {
      text: "Illustrations by",
      name: "Designer Name",
      href: "#",
    },
    {
      text: "Branding projects done with",
      name: "Agency Name",
      href: "#",
    },
    {
      text: "Content by",
      name: "Writer Name",
      href: "#",
    },
  ];

  return (
    <footer className="bg-black text-white py-12 px-4 relative">
      {/* Green dot indicator */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-600 rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center hover:bg-red-600 hover:text-black transition-all duration-300"
              aria-label={social.name}
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Credits Section */}
        <div className="bg-[#1a1a1a] rounded-3xl py-6 px-8 mb-8 max-w-6xl mx-auto">
          <p className="text-center text-sm md:text-base text-gray-400 flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
            <span className="text-red-600">Hire my fantastic team!</span>
            {credits.map((credit, index) => (
              <span key={index} className="flex items-center gap-2">
                {index > 0 && <span className="text-gray-600">|</span>}
                <span>{credit.text}</span>
                <Link
                  href={credit.href}
                  className="underline hover:text-red-600 transition-colors"
                >
                  {credit.name}
                </Link>
              </span>
            ))}
          </p>
        </div>

        {/* Large Brand Name with Map */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <h2
              className="font-black text-white text-center lg:text-left leading-none tracking-tighter mb-2"
              style={{
                fontSize: "clamp(3rem, 12vw, 10rem)",
                fontWeight: 900,
                letterSpacing: "-0.05em",
              }}
            >
              NIHACS
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mt-4">
              National Institute of Hacking And Cyber Security
            </p>
          </div>

          {/* Map Section with Overlay */}
          <div className="relative w-full lg:w-96 h-48 lg:h-56 rounded-lg overflow-hidden shadow-lg group">
            {/* Black Overlay */}
            <div className="absolute inset-0  group-hover:bg-opacity-0 transition-all duration-300 z-10 flex items-center justify-center">
              <span className="text-white text-lg font-semibold group-hover:opacity-0 transition-opacity duration-300">
                View Location
              </span>
            </div>

            {/* Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531677!3d-37.81720997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NIHACS Location"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>Made in India © 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
