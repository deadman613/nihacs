"use client";

import React, { useState, useEffect } from 'react';

const CybersecurityTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Alex Mitchell",
      role: "Security Analyst",
      company: "CyberDefense Corp",
      content: "This cybersecurity course completely transformed my career. The hands-on labs and real-world scenarios prepared me for actual threats I face daily. Best investment I've made!",
      image: "https://i.pravatar.cc/400?img=12",
      rating: 5,
      date: "15/01/2024"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Penetration Tester",
      company: "SecureNet Solutions",
      content: "The ethical hacking modules were incredibly comprehensive. I went from beginner to landing my dream job in just 6 months. The instructors are industry experts!",
      image: "https://i.pravatar.cc/400?img=5",
      rating: 5,
      date: "22/12/2023"
    },
    {
      id: 3,
      name: "Marcus Thompson",
      role: "IT Security Manager",
      company: "Global Tech Inc",
      content: "Outstanding course content covering everything from network security to incident response. The certification helped me secure a 30% salary increase.",
      image: "https://i.pravatar.cc/400?img=8",
      rating: 5,
      date: "08/01/2024"
    },
    {
      id: 4,
      name: "Sofia Chen",
      role: "Cybersecurity Consultant",
      company: "TechGuard Consulting",
      content: "The practical approach to teaching complex concepts made learning enjoyable. The community support and mentorship were invaluable throughout my journey.",
      image: "https://i.pravatar.cc/400?img=9",
      rating: 5,
      date: "30/11/2023"
    },
    {
      id: 5,
      name: "James Rodriguez",
      role: "SOC Analyst",
      company: "DefenseFirst Systems",
      content: "From threat detection to malware analysis, this course covered it all. The 24/7 lab access allowed me to practice at my own pace. Highly recommended!",
      image: "https://i.pravatar.cc/400?img=13",
      rating: 5,
      date: "19/12/2023"
    },
    {
      id: 6,
      name: "Emily Watson",
      role: "Security Engineer",
      company: "CloudSecure Ltd",
      content: "The instructors' real-world experience shines through every lesson. I gained practical skills that I use every single day in my role. Worth every penny!",
      image: "https://i.pravatar.cc/400?img=10",
      rating: 5,
      date: "05/01/2024"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => '★'.repeat(rating);

  const current = testimonials[currentIndex];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000',
      padding: isMobile ? '1.5rem 1rem' : isTablet ? '2rem 1.5rem' : '2.5rem 2rem',
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      boxSizing: 'border-box'
    }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        .testimonial-scroll::-webkit-scrollbar { display: none; }
        .testimonial-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .card-hover:hover { border-color: #dc2626 !important; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(220,38,38,0.15) !important; }
        .dot-btn:hover { background-color: #dc2626 !important; }
        @media (max-width: 639px) {
          .hero-title { font-size: 1.8rem !important; }
          .layout-grid { grid-template-columns: 1fr !important; }
          .right-scroll { max-height: none !important; overflow-y: visible !important; }
          .featured-img { height: 220px !important; }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .hero-title { font-size: 2.2rem !important; }
          .layout-grid { grid-template-columns: 1fr !important; }
          .right-scroll { max-height: none !important; overflow-y: visible !important; }
          .featured-img { height: 260px !important; }
        }
      `}</style>

      <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '0.8rem' }}>
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
            Student Success Stories
          </span>
        </div>

        <h1 className="hero-title" style={{
          textAlign: 'center',
          fontSize: '3rem',
          marginBottom: '0.5rem',
          color: '#fff',
          fontWeight: '900',
          letterSpacing: '-0.5px',
          lineHeight: '1.15',
          padding: '0 0.5rem'
        }}>
          Transform Your Career in Cybersecurity
        </h1>

        <p style={{
          textAlign: 'center',
          color: '#666',
          fontSize: isMobile ? '0.85rem' : '0.95rem',
          maxWidth: '650px',
          margin: '0 auto 2rem',
          padding: '0 1rem',
          lineHeight: '1.6'
        }}>
          Join thousands of professionals who transformed their careers with our industry-leading cybersecurity course
        </p>

        {/* Layout */}
        <div className="layout-grid" style={{
          display: 'grid',
          gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr',
          gap: isMobile ? '1rem' : '1.5rem',
          alignItems: 'start'
        }}>
          {/* Featured Left Card */}
          <div style={{
            position: isMobile || isTablet ? 'static' : 'sticky',
            top: '1.5rem',
            background: '#111',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
            border: '1px solid #222'
          }}>
            <div className="featured-img" style={{
              position: 'relative',
              width: '100%',
              height: '280px',
              overflow: 'hidden'
            }}>
              <img
                src={current.image}
                alt={current.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: '0.8rem',
                right: '0.8rem',
                padding: '0.4rem 0.8rem',
                backgroundColor: '#e8000c',
                color: '#fff',
                fontSize: '0.65rem',
                fontWeight: '600',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                borderRadius: '3px'
              }}>
                Featured
              </div>
            </div>

            <div style={{ padding: isMobile ? '1rem' : '1.5rem' }}>
              <div style={{ fontSize: '1.2rem', color: '#dc2626', marginBottom: '0.8rem', letterSpacing: '1px' }}>
                {renderStars(current.rating)}
              </div>
              <h2 style={{ fontSize: isMobile ? '1.3rem' : '1.5rem', margin: '0 0 0.4rem 0', fontWeight: '700', color: '#fff' }}>
                {current.name}
              </h2>
              <p style={{ fontSize: '0.9rem', margin: '0 0 0.2rem 0', color: '#dc2626', fontWeight: '600' }}>
                {current.role}
              </p>
              <p style={{ fontSize: '0.8rem', margin: '0 0 1rem 0', color: '#888' }}>
                {current.company}
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 1rem 0', color: '#ccc' }}>
                "{current.content}"
              </p>
              <div style={{
                paddingTop: '1rem',
                borderTop: '1px solid #222',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '0.75rem', color: '#666' }}>{current.date}</span>
                <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className="dot-btn"
                      onClick={() => setCurrentIndex(index)}
                      style={{
                        width: index === currentIndex ? '20px' : '8px',
                        height: '8px',
                        borderRadius: '4px',
                        border: 'none',
                        backgroundColor: index === currentIndex ? '#dc2626' : '#333',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        padding: 0
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Scrolling Section */}
          <div
            className="testimonial-scroll right-scroll"
            style={{
              maxHeight: isMobile || isTablet ? 'none' : '600px',
              overflowY: isMobile || isTablet ? 'visible' : 'auto',
              paddingRight: isMobile || isTablet ? '0' : '0.5rem'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="card-hover"
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    background: '#111',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: index === currentIndex ? '2px solid #dc2626' : '1px solid #222',
                    boxShadow: index === currentIndex
                      ? '0 6px 20px rgba(220,38,38,0.2)'
                      : '0 2px 10px rgba(0,0,0,0.1)',
                    transform: index === currentIndex ? 'translateY(-2px)' : 'none'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    gap: isMobile ? '0.75rem' : '1rem',
                    padding: isMobile ? '0.9rem' : '1.2rem',
                    flexDirection: isMobile && window.innerWidth < 400 ? 'column' : 'row',
                    alignItems: isMobile && window.innerWidth < 400 ? 'flex-start' : 'flex-start'
                  }}>
                    <div style={{
                      width: isMobile ? '70px' : '90px',
                      height: isMobile ? '70px' : '90px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      flexShrink: 0,
                      border: index === currentIndex ? '2px solid #dc2626' : '2px solid #222'
                    }}>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.9rem', color: '#dc2626', marginBottom: '0.3rem' }}>
                        {renderStars(testimonial.rating)}
                      </div>
                      <h3 style={{
                        fontSize: isMobile ? '1rem' : '1.1rem',
                        margin: '0 0 0.2rem 0',
                        color: '#fff',
                        fontWeight: '700',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {testimonial.name}
                      </h3>
                      <p style={{
                        fontSize: isMobile ? '0.8rem' : '0.85rem',
                        margin: '0 0 0.1rem 0',
                        color: index === currentIndex ? '#dc2626' : '#999',
                        fontWeight: '600'
                      }}>
                        {testimonial.role}
                      </p>
                      <p style={{ fontSize: '0.75rem', margin: '0 0 0.6rem 0', color: '#666' }}>
                        {testimonial.company}
                      </p>
                      <p style={{
                        fontSize: isMobile ? '0.8rem' : '0.85rem',
                        lineHeight: '1.5',
                        color: '#bbb',
                        margin: '0 0 0.5rem 0',
                        display: '-webkit-box',
                        WebkitLineClamp: isMobile ? 2 : 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        "{testimonial.content}"
                      </p>
                      <span style={{ fontSize: '0.7rem', color: '#666' }}>{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityTestimonial;