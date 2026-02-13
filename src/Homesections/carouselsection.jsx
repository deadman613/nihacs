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

  // Duplicate for seamless infinite scroll
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

            /* Slightly faster on larger screens */
            @media (min-width: 640px)  { .animate-scroll { animation-duration: 42s; } }
            @media (min-width: 1024px) { .animate-scroll { animation-duration: 36s; } }
            @media (min-width: 1280px) { .animate-scroll { animation-duration: 32s; } }

            .group:hover .icon-hover { color: #dc2626 !important; }
            .group:hover .text-hover  { color: #dc2626 !important; }
          `,
        }}
      />

      <div className="w-full bg-black py-6 sm:py-8 md:py-5 lg:py-12 overflow-hidden">
        <div className="relative">
          {/* Fade edges - responsive width */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-28 lg:w-36 xl:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-28 lg:w-36 xl:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {duplicatedStack.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={`${item.name}-${index}`}
                  className="flex items-center gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 px-5 sm:px-7 md:px-9 lg:px-11 group cursor-default select-none"
                >
                  <IconComponent
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-red-600/90 group-hover:text-red-500 transition-colors duration-300 icon-hover"
                    strokeWidth={2.2}
                  />

                  <span
                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-tight text-white/95 group-hover:text-red-600 transition-colors duration-300 text-hover"
                  >
                    {item.name}
                  </span>

                  {/* Optional subtle separator (uncomment if desired) */}
                  {/* <div className="w-1.5 h-1.5 rounded-full bg-red-600/40 mx-4 sm:mx-5 lg:mx-6 group-hover:bg-red-500 transition-colors" /> */}
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