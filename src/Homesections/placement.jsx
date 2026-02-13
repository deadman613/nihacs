'use client';

import { useState } from 'react';

const StatCard = ({ number, label, description, delay }) => (
  <div 
    className="stat-card bg-black border border-neutral-800 p-4 sm:p-5 relative overflow-hidden transition-all duration-300 hover:border-red-600 hover:bg-neutral-950 hover:-translate-y-1 group"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
    <div className="text-3xl xs:text-4xl font-orbitron font-bold text-red-600 mb-1 tracking-tight">{number}</div>
    <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white mb-1">{label}</div>
    <div className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{description}</div>
  </div>
);

const CompanyCard = ({ icon, name, category }) => (
  <div className="company-card bg-black border border-neutral-800 p-3.5 sm:p-4 flex items-center gap-3 transition-all duration-300 hover:border-red-600 hover:bg-neutral-950 hover:translate-x-1 relative overflow-hidden group">
    <div className="absolute top-0 right-0 w-1 h-full bg-red-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-black border border-neutral-700 flex items-center justify-center font-orbitron text-base sm:text-lg font-bold text-white flex-shrink-0 group-hover:border-red-600 transition-colors duration-300">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <div className="text-sm sm:text-base font-semibold text-white mb-0.5 truncate">{name}</div>
      <div className="text-xs font-mono text-neutral-400 truncate">{category}</div>
    </div>
  </div>
);

export default function CyberPlacements() {
  const companies = [
    { icon: 'C', name: 'CrowdStrike', category: 'Endpoint Security' },
    { icon: 'P', name: 'Palo Alto Networks', category: 'Enterprise Firewall' },
    { icon: 'F', name: 'Fortinet', category: 'Network Security' },
    { icon: 'Z', name: 'Zscaler', category: 'Cloud Security' },
    { icon: 'R', name: 'Rapid7', category: 'Vulnerability Mgmt' },
    { icon: 'O', name: 'Okta', category: 'Identity & Access' },
    { icon: 'C', name: 'Cloudflare', category: 'DDoS Protection' },
    { icon: 'S', name: 'SentinelOne', category: 'AI Security' },
  ];

  const stats = [
    {
      number: '98%',
      label: 'Deployment Success',
      description: 'Security analysts securing positions within 90 days of program completion',
      delay: 0.4
    },
    {
      number: '150+',
      label: 'Security Firms',
      description: 'Fortune 500 companies, agencies, and startups actively recruiting our talent',
      delay: 0.5
    },
    {
      number: '₹12.5L',
      label: 'Average Package',
      description: 'Across penetration testing and security operations cohorts placed via our program',
      delay: 0.6
    },
    {
      number: '21 days',
      label: 'CTF to Interview',
      description: 'Typical timeline from final capture-the-flag to first technical security interview',
      delay: 0.7
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Animated Grid Background */}
      <div className="fixed top-0 left-0 w-full h-full z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Scanline Effect */}
      <div className="fixed top-0 left-0  w-full  bg-gradient-to-r from-transparent via-red-600 to-transparent z-10 animate-scan opacity-30" />

      
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto w-full">
        {/* Header Tag */}
        <button className="font-mono text-xs sm:text-sm px-2 py-[1.5] tracking-[3px] text-white bg-red-600 rounded-[2px] mb-6 uppercase animate-glitch-text">
          &lt; PLACEMENTS & THREAT INTEL &gt;
        </button>
        
        {/* Main Grid – stays lg:grid-cols-2, stacks vertically below lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Left Content */}
          <div>
            <h1 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5 sm:mb-6 uppercase tracking-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent">See Where Our Security Experts Are Deployed</span>
            </h1>
            <p 
              className="text-sm sm:text-base leading-relaxed text-white mb-8 sm:mb-10 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              We focus on real-world penetration, not just certification. Threat intelligence labs, red team operations, and SOC rotations help you convert offers faster.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-5">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>
          
          {/* Right Content - Companies */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="mb-6 sm:mb-8">
              <div className="font-mono text-xs sm:text-sm tracking-wider text-neutral-400 mb-2 uppercase">
                &gt;_ ALUMNI DEPLOYMENTS
              </div>
              <h2 className="font-orbitron text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                Where our security researchers now defend
              </h2>
              <div className="inline-block bg-neutral-900 border border-neutral-700 px-3 py-1.5 font-mono text-xs text-white tracking-wider">
                VERIFIED POSITIONS | 2024-25
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {companies.map((company, index) => (
                <CompanyCard key={index} {...company} />
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col xs:flex-row gap-4 sm:gap-6 animate-fade-in-up mt-12 sm:mt-16" style={{ animationDelay: '0.6s' }}>
          <button className="relative px-6 sm:px-8 py-3 sm:py-4 font-rajdhani text-sm sm:text-base font-semibold tracking-wider uppercase bg-red-600 text-white transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] overflow-hidden group">
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            <span className="relative">Initialize Security Brief</span>
          </button>
          <button className="px-6 sm:px-8 py-3 sm:py-4 font-rajdhani text-sm sm:text-base font-semibold tracking-wider uppercase bg-transparent text-white border border-neutral-700 transition-all duration-300 hover:border-red-600 hover:text-red-600 hover:bg-neutral-950">
            Access Live Deployments
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}