'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

const TrainerScrollSimple = () => {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const ticking = useRef(false);

  const trainers = [
    {
      id: 1,
      name: 'Mr Varnit Jain',
      image: '/trainers/varnit.jpeg',
      Position: 'Cybersecurity Expert'
    },
    {
      id: 2,
      name: 'Mr Kunal',
      image: '/trainers/kunal.jpeg',
      Position: 'Cybersecurity Expert'
    },
    {
      id: 3,
      name: 'Mr Manjeet Singh',
      image: '/trainers/manjeet.jpeg',
      Position: 'Software Developer '
    },
    {
      id: 4,
      name: 'Miss Shagun',
      image: '/trainers/shagun.jpeg',
      Position: 'AI  Expert'
    },
  ];

  // Throttled scroll handler using rAF to prevent lag
  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      const container = scrollContainerRef.current;
      if (!container) { ticking.current = false; return; }

      const scrollTop = container.scrollTop;
      const itemHeight = container.clientHeight;
      const newIndex = Math.min(
        Math.max(0, Math.round(scrollTop / itemHeight)),
        trainers.length - 1
      );

      setActiveIndex(prev => (prev !== newIndex ? newIndex : prev));
      ticking.current = false;
    });
  }, [trainers.length]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToIndex = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollTo({ top: container.clientHeight * index, behavior: 'smooth' });
  };

  return (
    <div style={{
      position: 'relative',
      backgroundColor: '#000',
      color: '#fff',
      overflow: 'hidden',
      minHeight: '100vh',
      fontFamily: "'Inter', 'Segoe UI', sans-serif"
    }}>
      <style>{`
        .trainer-scroll::-webkit-scrollbar { display: none; }
        .trainer-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .trainer-img { will-change: transform; transition: transform 0.6s ease; }
        .trainer-img:hover { transform: scale(1.06); }
        .name-item { transition: opacity 0.35s ease, transform 0.35s ease, color 0.35s ease; will-change: opacity, transform; }
        .dot { transition: height 0.3s ease, background-color 0.3s ease; }

        /* Responsive header font */
        .section-title {
          font-size: clamp(2rem, 7vw, 5rem);
          font-weight: 900;
          text-align: center;
          color: #fff;
          line-height: 1.1;
          margin: 0;
        }

        /* Desktop: side-by-side */
        .layout-wrapper {
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 100vh;
          padding-top: 120px;
        }
        .left-col {
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 4rem 0 3rem;
          overflow: visible;
        }
        .right-col {
          width: 50%;
          position: relative;
          height: 100vh;
          display: flex;
        }
        .mobile-view { display: none; }

        /* Tablet */
        @media (max-width: 1024px) {
          .left-col { padding: 0 2rem 0 2rem; }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .layout-wrapper { display: none; }
          .mobile-view {
            display: block;
            padding: 0 1rem 3rem;
          }
          .header-area {
            padding: 1.2rem 1rem 1rem !important;
          }
        }

        /* Trainer name scaling */
        .trainer-name {
          font-size: clamp(1.6rem, 4vw, 4rem);
          font-weight: 700;
          line-height: 1.15;
          transition: color 0.35s ease;
        }

        /* Red indicator bar */
        .active-bar {
          position: absolute;
          left: -1.5rem;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 3.5rem;
          background: #dc2626;
          border-radius: 2px;
        }

        @media (max-width: 1024px) {
          .active-bar { left: -1rem; height: 2.5rem; }
        }
      `}</style>

      {/* Header */}
      <div className="header-area" style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        zIndex: 20,
        padding: 'clamp(1rem, 3vw, 2rem) 1rem clamp(1rem, 2vw, 1.5rem)',
        background: 'linear-gradient(to bottom, #000 60%, transparent)',
        textAlign: 'center'
      }}>
        <span style={{
          display: 'inline-block',
          padding: '0.35rem 1.1rem',
          backgroundColor: '#e8000c',
          color: '#fff',
          fontSize: '0.72rem',
          fontWeight: '600',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          borderRadius: '4px',
          marginBottom: '0.6rem'
        }}>
          Cyber Security Trainers
        </span>
        <h1 className="section-title">Our Experts</h1>
      </div>

      {/* ─── DESKTOP / TABLET LAYOUT ─── */}
      <div className="layout-wrapper">

        {/* Left: Clickable names */}
        <div className="left-col">
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            {trainers.map((trainer, index) => (
              <div
                key={trainer.id}
                className="name-item"
                onClick={() => scrollToIndex(index)}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  paddingLeft: '0.5rem',
                  opacity: activeIndex === index ? 1 : 0.28,
                  transform: activeIndex === index ? 'scale(1)' : 'scale(0.96)',
                }}
              >
                {activeIndex === index && <div className="active-bar" />}
                <div
                  className="trainer-name"
                  style={{ color: activeIndex === index ? '#dc2626' : '#888' }}
                >
                  {trainer.name}
                </div>
                {activeIndex === index && (
                  <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.2rem', letterSpacing: '0.5px' }}>
                    {trainer.Position}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Snapping scroll images */}
        <div className="right-col">
          <div
            ref={scrollContainerRef}
            className="trainer-scroll"
            style={{
              height: '100vh',
              width: '100%',
              overflowY: 'scroll',
              scrollSnapType: 'y mandatory',
            }}
          >
            {trainers.map((trainer, index) => (
              <div
                key={trainer.id}
                style={{
                  height: '100vh',
                  scrollSnapAlign: 'start',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem',
                }}
              >
                <div style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '420px',
                  height: 'min(70vh, 520px)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}>
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="trainer-img"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      display: 'block',
                    }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)'
                  }} />
                  <div style={{
                    position: 'absolute', bottom: '1.2rem', left: '1.2rem'
                  }}>
                    <div style={{ color: '#fff', fontWeight: '700', fontSize: '1.1rem' }}>{trainer.name}</div>
                    <div style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '0.2rem' }}>{trainer.Position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll dots */}
          <div style={{
            position: 'absolute',
            right: '1.5rem',
            bottom: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
          }}>
            {trainers.map((_, index) => (
              <div
                key={index}
                className="dot"
                onClick={() => scrollToIndex(index)}
                style={{
                  width: '6px',
                  height: activeIndex === index ? '40px' : '6px',
                  borderRadius: '3px',
                  backgroundColor: activeIndex === index ? '#dc2626' : '#444',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ─── MOBILE LAYOUT ─── */}
      <div className="mobile-view" style={{ paddingTop: '110px' }}>
        {trainers.map((trainer) => (
          <div key={trainer.id} style={{ marginBottom: '2.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 5vw, 2rem)',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '0.8rem',
              paddingLeft: '0.2rem'
            }}>
              {trainer.name}
            </h2>
            <div style={{ fontSize: '0.8rem', color: '#dc2626', marginBottom: '0.8rem', paddingLeft: '0.2rem' }}>
              {trainer.Position}
            </div>
            <div style={{
              position: 'relative',
              width: '100%',
              height: 'min(55vh, 420px)',
              overflow: 'hidden',
              borderRadius: '2px',
            }}>
              <img
                src={trainer.image}
                alt={trainer.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  display: 'block',
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)'
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerScrollSimple;