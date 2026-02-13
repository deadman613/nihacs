'use client';
import { useEffect, useRef, useState } from 'react';

const TrainerScrollSimple = () => {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const trainers = [
    {
       id: 1,
      name: 'Mr Varnit Jain',
      image: '/trainers/varnit.jpeg',
      Position:"Cybersecurity Expert"
    },
    {
      id: 2,
      name: 'Mr Kunal',
      image: '/trainers/kunal.jpeg',
      Position:"Cybersecurity Expert"
    },
    {
      id: 3,
      name: 'Mr Manjeet Singh',
      image: '/trainers/manjeet.jpeg',
      Position:"Cybersecurity Expert"
    },
    {
      id: 4,
      name: 'Miss Shagun ',
      image: '/trainers/shagun.jpeg',
      Position:"Cybersecurity Expert"
    },
    // {
    //   id: 5,
    //   name: 'David Martinez',
    //   image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&h=1200&fit=crop',
    // },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const scrollPosition = container.scrollTop;
      const containerHeight = container.clientHeight;
      const totalHeight = container.scrollHeight;
      const itemHeight = totalHeight / trainers.length;
      
      // Calculate which trainer is most visible in the viewport (center-based)
      const centerOffset = scrollPosition + containerHeight / 2;
      const visibleIndex = Math.round(centerOffset / itemHeight);
      
      const newIndex = Math.min(Math.max(0, visibleIndex), trainers.length - 1);
      setActiveIndex(newIndex);
    };

    const container = scrollContainerRef.current;
    if (container) {
      // Initial call to set correct index
      handleScroll();
      
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [trainers.length]);

  return (
    <div className="relative  max-h-screen bg-black text-white overflow-hidden">
      {/* Section Header */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-6 md:pt-8 pb-6 md:pb-8 px-4 md:px-8 bg-gradient-to-b from-black via-black to-transparent">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <span style={{
            display: 'inline-block',
            padding: '0.4rem 1.2rem',
            backgroundColor: '#e8000c',
            color: '#fff',
            fontSize: '0.75rem',
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            borderRadius: '4px',
            marginBottom: '0.8rem'
          }}>
            Cyber Security Trainers
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-center font-black text-white">
          Our Experts
          </h1>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="flex flex-col md:flex-row w-full h-auto md:h-screen pt-32 md:pt-30">
        {/* Left Column - Trainer Names */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-4 md:px-8 lg:px-16 py-12 md:py-0 md:h-screen md:overflow-y-auto">
          <div className="w-full space-y-6 md:space-y-8">
            {trainers.map((trainer, index) => (
              <div
                key={trainer.id}
                className={`transition-all duration-500 cursor-pointer ${
                  activeIndex == index
                    ? 'opacity-100 scale-100'
                    : 'opacity-30 scale-95'
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  const container = scrollContainerRef.current;
                  if (container) {
                    const itemHeight = container.scrollHeight / trainers.length;
                    container.scrollTo({
                      top: itemHeight * index,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                <div className="relative">
                  {activeIndex == index && (
                    <div className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 w-1 h-12 md:h-16 bg-red-600 rounded-full" />
                  )}
                  
                  <h2
                    className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold transition-all duration-500 ${
                      activeIndex == index ? 'text-red-600' : 'text-gray-700'
                    }`}
                  >
                    {trainer.name}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Scrolling Images with Buttons */}
        <div className="hidden md:flex w-full md:w-1/2 relative h-screen">
          <div
            ref={scrollContainerRef}
            className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {trainers.map((trainer, index) => (
              <div
                key={trainer.id}
                className="h-screen snap-start relative flex flex-col items-center justify-center p-4 md:p-8"
              >
                {/* Image Container */}
                <div className="relative w-full max-w-sm md:max-w-md h-[60vh] md:h-[70vh] rounded-none overflow-hidden group mb-6 md:mb-8">
                  {/* Image */}
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  {/* Red Border Frame */}
                  <div className="absolute inset-0  pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 flex flex-col items-center gap-2">
            {trainers.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 md:w-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'h-10 md:h-12 bg-red-600'
                    : 'h-1.5 md:h-2 bg-gray-700'
                }`}
              />
            ))}
            {/* <p className="text-xs text-gray-600 mt-2 font-bold tracking-widest">
              SCROLL
            </p> */}
          </div>
        </div>
      </div>
      {/* <div className="hidden md:flex justify-center mt-8 md:mt-12 mb-8">
       
                <button className="px-8 md:px-10 py-3 md:py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 active:scale-95">
                  BOOK SESSION
                </button>
      </div> */}

      {/* Mobile View */}
      <div className="md:hidden px-4 sm:px-6 pb-8 md:pb-12 space-y-8 md:space-y-12">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{trainer.name}</h2>
            <div className="relative w-full h-[50vh] sm:h-[60vh] rounded-none overflow-hidden">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute inset-0 border-3 sm:border-4 border-red-600 pointer-events-none" />
            </div>
            {/* <button className="w-full px-6 sm:px-10 py-3 sm:py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95">
              BOOK SESSION
            </button> */}
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TrainerScrollSimple;