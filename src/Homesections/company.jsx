import React from 'react'

export default function Company() {
  const logos = [
    { name: 'Flylah', url: '/logos/8.png' },
    { name: 'Creating Homes', url: '/logos/2.png' },
    { name: 'Kanan Prep', url: '/logos/3.png' },
    { name: 'Renewable Corp', url: '/logos/4.png' },
    { name: 'VaigHai Worldwide', url: '/logos/5.png' },
    { name: 'ENXO S-Ring', url: '/logos/6.png' },
    { name: 'GeoDataTek', url: '/logos/7.png' },
    { name: 'UHWD', url: '/logos/8.png' },
    { name: 'Sirf Taxi', url: '/logos/9.png' },
  ];

  // positions to place logos around the hero area (repeats if more logos exist)
  const positions = [
    { left: '8%', top: '18%', scale: 1.05, delay: '0s', dur: '22s' },
    { left: '24%', top: '8%', scale: 1.1, delay: '0.6s', dur: '26s' },
    { left: '44%', top: '12%', scale: 0.9, delay: '1.2s', dur: '28s' },
    { left: '68%', top: '6%', scale: 1.05, delay: '0.4s', dur: '24s' },
    { left: '88%', top: '18%', scale: 0.95, delay: '0.8s', dur: '30s' },
    { left: '12%', top: '40%', scale: 1.15, delay: '0.2s', dur: '26s' },
    { left: '36%', top: '44%', scale: 1.0, delay: '0.9s', dur: '32s' },
    { left: '52%', top: '36%', scale: 1.05, delay: '0.1s', dur: '20s' },
    { left: '76%', top: '44%', scale: 1.2, delay: '0.3s', dur: '34s' },
    { left: '6%', top: '70%', scale: 0.95, delay: '0.5s', dur: '28s' },
    { left: '38%', top: '74%', scale: 1.1, delay: '0.7s', dur: '30s' },
    { left: '70%', top: '78%', scale: 1.0, delay: '1.0s', dur: '26s' },
  ];

  return (
    <section className="relative bg-black text-white overflow-hidden py-20 md:py-6 min-h-[70vh] md:min-h-[75vh]">
      {/* Large background heading (white, low-opacity) */}
      <h2
        aria-hidden
        className="pointer-events-none text-white absolute inset-0 flex items-center justify-center text-center text-[16vw] md:text-[10vw] lg:text-[12vw] leading-none font-extrabold tracking-tight select-none"
        style={{ transform: 'translateY(-2%)', color: 'rgba(255,255,255,0.20)', letterSpacing: '-0.03em' }}
      >
        <span className="block">Companies where our students work</span>
      </h2>

      <div className="relative z-10 max-w-[1350px] mx-auto px-4">
        {/* Row-wise infinite marquee */}
        <div className="space-y-12 md:space-y-16">
          {/* Row 1 - moving left */}
          <div className="overflow-hidden">
            <div className="marquee-row" style={{ animation: 'marqueeLeft 45s linear infinite' }}>
              {logos.concat(logos).map((logo, i) => (
                <div key={`r1-${i}`} className="flex-shrink-0 w-40 sm:w-48 md:w-56 h-20 md:h-38 flex items-center justify-center">
                  <img src={logo.url} alt={logo.name} loading="lazy" className="w-4/5 h-4/5 object-contain filter brightness-0 invert" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - moving right */}
          <div className="overflow-hidden">
            <div className="marquee-row" style={{ animation: 'marqueeRight 52s linear infinite' }}>
              {logos.concat(logos).map((logo, i) => (
                <div key={`r2-${i}`} className="flex-shrink-0  gap-40    w-40 sm:w-48 md:w-56 h-20 md:h-28 flex items-center justify-between">
                  <img src={logo.url} alt={logo.name} loading="lazy" className="w-4/5 h-4/5  object-contain filter brightness-0 invert" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - moving left */}
          <div className="overflow-hidden">
            <div className="marquee-row" style={{ animation: 'marqueeLeft 50s linear infinite' }}>
              {logos.concat(logos).map((logo, i) => (
                <div key={`r3-${i}`} className="flex-shrink-0 w-40 sm:w-48 md:w-56 h-20 md:h-28 flex items-center justify-center">
                  <img src={logo.url} alt={logo.name} loading="lazy" className="w-4/5 h-4/5 object-contain filter brightness-0 invert" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 4 - moving right */}
          <div className="overflow-hidden">
            <div className="marquee-row" style={{ animation: 'marqueeRight 48s linear infinite' }}>
              {logos.concat(logos).map((logo, i) => (
                <div key={`r4-${i}`} className="flex-shrink-0 w-40 sm:w-48 md:w-56 h-20 md:h-28 flex items-center justify-center">
                  <img src={logo.url} alt={logo.name} loading="lazy" className="w-4/5 h-4/5 object-contain filter brightness-0 invert" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .marquee-row {
          display: flex;
          gap: 2rem;
          width: fit-content;
          will-change: transform;
        }

        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

       

        @media (max-width: 640px) {
          .marquee-row { gap: 1rem; }
        }
      `}</style>
    </section>
  )
}
