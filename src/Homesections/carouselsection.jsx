"use client";
import React from 'react';
import { Shield, Lock, Key, Fingerprint, Database, Eye, Wifi, Server, Terminal, Zap } from 'lucide-react';

const CybersecurityInfiniteCarousel = () => {
  const techStack = [
    { name: 'Metasploit', icon: Terminal },
    { name: 'Burp Suite', icon: Shield },
    { name: 'Wireshark', icon: Wifi },
    { name: 'Nmap', icon: Server },
    { name: 'Kali Linux', icon: Terminal },
    { name: 'OpenSSL', icon: Lock },
    { name: 'HashiCorp Vault', icon: Database },
    { name: 'Splunk', icon: Eye },
    { name: 'ELK Stack', icon: Database },
    { name: 'Snort', icon: Shield },
    { name: 'SIEM', icon: Eye },
    { name: 'Okta', icon: Key },
    { name: 'Auth0', icon: Lock },
    { name: 'Keycloak', icon: Key },
    { name: 'Zero Trust', icon: Shield },
    { name: 'Firewall', icon: Shield },
    { name: 'VPN', icon: Wifi },
    { name: 'Encryption', icon: Lock },
    { name: 'Penetration Testing', icon: Zap },
    { name: 'Threat Intel', icon: Eye },
    { name: 'SOC', icon: Server },
    { name: 'SOAR', icon: Zap },
    { name: 'EDR', icon: Shield },
    { name: 'XDR', icon: Shield },
    { name: 'WAF', icon: Shield },
    { name: 'IDS/IPS', icon: Eye },
    { name: 'DLP', icon: Database },
    { name: 'PKI', icon: Key },
    { name: 'MFA', icon: Fingerprint },
    { name: 'SSO', icon: Key }
  ];

  const duplicatedStack = [...techStack, ...techStack];

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 48s linear infinite;
              will-change: transform;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
            @media (min-width: 640px)  { .animate-scroll { animation-duration: 42s; } }
            @media (min-width: 1024px) { .animate-scroll { animation-duration: 36s; } }
            @media (min-width: 1280px) { .animate-scroll { animation-duration: 32s; } }
            .carousel-item:hover .carousel-icon { color: #dc2626; }
            .carousel-item:hover .carousel-text { color: #dc2626; }
            .carousel-icon { transition: color 0.3s ease; }
            .carousel-text { transition: color 0.3s ease; }
          `,
        }}
      />

      <div className="w-full bg-black overflow-hidden" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{ width: 'clamp(2rem, 5vw, 5rem)', background: 'linear-gradient(to right, #000, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{ width: 'clamp(2rem, 5vw, 5rem)', background: 'linear-gradient(to left, #000, transparent)' }} />

          {/* Scrolling row */}
          <div className="flex animate-scroll" style={{ width: 'max-content' }}>
            {duplicatedStack.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={`${item.name}-${index}`}
                  className="carousel-item flex items-center cursor-default select-none"
                  style={{
                    gap: 'clamp(6px, 1.2vw, 14px)',
                    paddingLeft: 'clamp(12px, 2.5vw, 36px)',
                    paddingRight: 'clamp(12px, 2.5vw, 36px)',
                  }}
                >
                  <IconComponent
                    className="carousel-icon text-red-600"
                    strokeWidth={2.2}
                    style={{
                      width: 'clamp(14px, 2vw, 24px)',
                      height: 'clamp(14px, 2vw, 24px)',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    className="carousel-text font-semibold text-white"
                    style={{
                      fontSize: 'clamp(0.75rem, 1.5vw, 1.2rem)',
                      whiteSpace: 'nowrap',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CybersecurityInfiniteCarousel;