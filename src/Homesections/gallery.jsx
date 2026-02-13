'use client';

import { useState } from 'react';

const galleryItems = [
  {
    id: 1,
    src: '/gallery/group.jpeg',
    title: 'Our Campus',
    subtitle: 'Where excellence meets innovation',
    category: 'Campus View',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 2,
    src: '/gallery/2.webp',
    title: 'Modern Library',
    subtitle: 'State-of-the-art learning resources',
    category: 'Library',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    src: '/gallery/3.webp',
    title: 'Student Life',
    subtitle: 'Vibrant community & culture',
    category: 'Students',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    src: '/gallery/4.webp',
    title: 'Smart Classrooms',
    subtitle: 'Technology-enabled learning',
    category: 'Classrooms',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 5,
    src: '/gallery/5.webp',
    title: 'Corporate Environment',
    subtitle: 'World-class athletic facilities',
    category: 'Sports',
    span: 'col-span-1 row-span-1',
  },
];

export default function Gallery() {
  const [hoveredId, setHoveredId] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="min-h-screen bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header – only scale text & spacing */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight">
            OUR CAMPUS
          </h1>
          <div className="w-28 sm:w-32 h-1.5 bg-red-600 mx-auto my-5 sm:my-6 rounded" />
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Experience world-class infrastructure and facilities designed to nurture excellence
          </p>
        </div>

        {/* Grid – keep your original row height, just add responsive columns + small gap scaling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 auto-rows-[280px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${item.span} bg-gray-900`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative w-full h-full">
                {!imageErrors[item.id] ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    onError={() => handleImageError(item.id)}
                    className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                      hoveredId === item.id
                        ? 'scale-110 brightness-50'
                        : 'scale-100 brightness-75 group-hover:brightness-50'
                    }`}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-800">
                    <div className="text-center p-4">
                      <svg className="w-14 h-14 sm:w-16 sm:h-16 mx-auto text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-500 text-sm sm:text-base">Image placeholder</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Category Badge – slight size scaling */}
              <div
                className={`absolute top-3 sm:top-4 right-3 sm:right-4 bg-red-600 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-red-500 text-white text-xs sm:text-sm font-medium transition-all duration-500 shadow-sm ${
                  hoveredId === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}
              >
                {item.category}
              </div>

              {/* Text Content – responsive text sizes */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 transition-all duration-500">
                <div
                  className={`transition-all duration-500 ${
                    hoveredId === item.id ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-90'
                  }`}
                >
                  <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base font-light italic">
                    {item.subtitle}
                  </p>
                </div>

                {/* Explore Button – size scales gently */}
                <button
                  className={`mt-3 sm:mt-4 bg-red-600 text-white px-5 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base transition-all duration-500 transform hover:bg-red-700 hover:scale-105 active:scale-100 ${
                    hoveredId === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  Explore More
                </button>
              </div>

              {/* Corner Accents – keep original size */}
              <div
                className={`absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-red-600 transition-all duration-500 ${
                  hoveredId === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
              />
              <div
                className={`absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-red-600 transition-all duration-500 ${
                  hoveredId === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Footer CTA – gentle scaling */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <button className="bg-red-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg lg:text-xl hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-red-600/50">
            Explore Our Campus
          </button>
        </div>
      </div>
    </div>
  );
}