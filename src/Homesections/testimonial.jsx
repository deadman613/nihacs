"use client";

import React, { useState, useEffect } from 'react';

const CybersecurityTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return '★'.repeat(rating);
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: 'black',
      padding: '2.5rem 2rem',
      fontFamily: "'Inter', 'Segoe UI', sans-serif"
    }}>
      <style>
        {`
          .testimonial-scroll::-webkit-scrollbar {
            display: none;
          }
          .testimonial-scroll {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '0.8rem'
        }}>
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
        
        <h1 style={{
          textAlign: 'center',
          fontSize: '3rem',
          marginBottom: '0.5rem',
          color: '#ffffff',
          fontWeight: '900',
          letterSpacing: '-0.5px'
        }}>
          Transform Your Career in Cybersecurity
        </h1>
        
        <p style={{
          textAlign: 'center',
          color: '#666',
          fontSize: '0.95rem',
          marginBottom: '2rem',
          maxWidth: '650px',
          margin: '0 auto 2rem'
        }}>
          Join thousands of professionals who transformed their careers with our industry-leading cybersecurity course
        </p>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
          alignItems: 'start'
        }}>
          {/* Featured Left Card */}
          <div style={{ 
            position: 'sticky',
            top: '1.5rem',
            background: '#111',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
            border: '1px solid #222',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '280px',
              overflow: 'hidden'
            }}>
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover'
                }} 
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

            <div style={{ padding: '1.5rem' }}>
              <div style={{ 
                fontSize: '1.2rem',
                color: '#dc2626',
                marginBottom: '0.8rem',
                letterSpacing: '1px'
              }}>
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              <h2 style={{ 
                fontSize: '1.5rem', 
                margin: '0 0 0.4rem 0',
                fontWeight: '700',
                color: '#fff'
              }}>
                {testimonials[currentIndex].name}
              </h2>
              
              <p style={{ 
                fontSize: '0.9rem', 
                margin: '0 0 0.2rem 0',
                color: '#dc2626',
                fontWeight: '600'
              }}>
                {testimonials[currentIndex].role}
              </p>
              
              <p style={{ 
                fontSize: '0.8rem', 
                margin: '0 0 1rem 0',
                color: '#888'
              }}>
                {testimonials[currentIndex].company}
              </p>

              <p style={{ 
                fontSize: '0.95rem', 
                lineHeight: '1.6',
                margin: '0 0 1rem 0',
                color: '#ccc'
              }}>
                "{testimonials[currentIndex].content}"
              </p>

              <div style={{
                paddingTop: '1rem',
                borderTop: '1px solid #222',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '0.75rem',
                  color: '#666'
                }}>
                  {testimonials[currentIndex].date}
                </span>

                <div style={{
                  display: 'flex',
                  gap: '0.3rem'
                }}>
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      style={{
                        width: index === currentIndex ? '20px' : '8px',
                        height: '6px',
                        borderRadius: '3px',
                        border: 'none',
                        backgroundColor: index === currentIndex ? '#dc2626' : '#333',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Scrolling Section */}
          <div 
            className="testimonial-scroll"
            style={{ 
              maxHeight: '600px',
              overflowY: 'auto',
              paddingRight: '0.5rem'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  onClick={() => setCurrentIndex(index)}
                  style={{ 
                    background: '#111',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: index === currentIndex ? '2px solid #dc2626' : '1px solid #222',
                    boxShadow: index === currentIndex 
                      ? '0 6px 20px rgba(220, 38, 38, 0.2)' 
                      : '0 2px 10px rgba(0, 0, 0, 0.1)',
                    transform: index === currentIndex ? 'translateY(-2px)' : 'translateY(0)'
                  }}
                >
                  <div style={{ display: 'flex', gap: '1rem', padding: '1.2rem' }}>
                    <div style={{
                      width: '90px',
                      height: '90px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      flexShrink: 0,
                      border: index === currentIndex ? '2px solid #dc2626' : '2px solid #222'
                    }}>
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover'
                        }} 
                      />
                    </div>
                    
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        fontSize: '0.9rem',
                        color: '#dc2626',
                        marginBottom: '0.4rem'
                      }}>
                        {renderStars(testimonial.rating)}
                      </div>

                      <h3 style={{ 
                        fontSize: '1.1rem', 
                        margin: '0 0 0.2rem 0',
                        color: '#fff',
                        fontWeight: '700'
                      }}>
                        {testimonial.name}
                      </h3>
                      
                      <p style={{ 
                        fontSize: '0.85rem', 
                        margin: '0 0 0.1rem 0',
                        color: index === currentIndex ? '#dc2626' : '#999',
                        fontWeight: '600'
                      }}>
                        {testimonial.role}
                      </p>
                      
                      <p style={{ 
                        fontSize: '0.75rem', 
                        margin: '0 0 0.8rem 0',
                        color: '#666'
                      }}>
                        {testimonial.company}
                      </p>

                      <p style={{ 
                        fontSize: '0.85rem', 
                        lineHeight: '1.5',
                        color: '#bbb',
                        margin: '0 0 0.6rem 0'
                      }}>
                        "{testimonial.content}"
                      </p>

                      <span style={{
                        fontSize: '0.7rem',
                        color: '#666'
                      }}>
                        {testimonial.date}
                      </span>
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