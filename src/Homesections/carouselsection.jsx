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

  // Duplicate the array for seamless infinite scroll
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />
      
      <div className="w-full bg-black py-8 overflow-hidden" style={{ fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, sans-serif" }}>
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {duplicatedStack.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 px-8 whitespace-nowrap group cursor-pointer"
                >
                  {/* Icon */}
                  <IconComponent 
                    className="w-6 h-6 text-red-600 group-hover:text-red-500 transition-colors duration-300" 
                    strokeWidth={2}
                  />
                  
                  {/* Text */}
                  <span className="text-white text-2xl font-semibold tracking-tight group-hover:text-red-600 transition-colors duration-300">
                    {item.name}
                  </span>

                  {/* Separator Dot
                  <div className="w-2 h-2 rounded-full bg-red-600 ml-5 group-hover:scale-125 transition-transform duration-300"></div> */}
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