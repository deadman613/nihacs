"use client";
import { useState, useEffect, useRef } from "react";

const sections = [
  {
    id: "overview",
    label: "Overview",
    title: "Privacy Overview",
    content: [
      {
        type: "text",
        body: "At NIHACS, your privacy is not a formality — it's a commitment. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit nihacs.com or enroll in our cybersecurity training programs.",
      },
      {
        type: "text",
        body: "By accessing our platform, you agree to the terms described in this document. If you disagree with any part, please discontinue use of our services.",
      },
      {
        type: "highlight",
        body: "Last updated: January 15, 2025 · Effective immediately upon publication.",
      },
    ],
  },
  {
    id: "collection",
    label: "Data We Collect",
    title: "Information We Collect",
    content: [
      {
        type: "text",
        body: "We collect information you provide directly and data generated automatically through your use of our platform.",
      },
      {
        type: "list",
        heading: "Personal Information",
        items: [
          "Full name and email address upon registration",
          "Payment and billing information (processed via secure third-party gateways)",
          "Profile photo and biographical information (optional)",
          "Communication records when you contact our support team",
        ],
      },
      {
        type: "list",
        heading: "Automatically Collected Data",
        items: [
          "IP address, browser type, and operating system",
          "Pages visited, time spent, and navigation paths",
          "Device identifiers and cookie data",
          "Course progress, quiz scores, and lab activity",
        ],
      },
    ],
  },
  {
    id: "usage",
    label: "How We Use It",
    title: "How We Use Your Data",
    content: [
      {
        type: "text",
        body: "Your data helps us deliver, maintain, and continuously improve NIHACS's training experience. We never sell your personal information to third parties.",
      },
      {
        type: "list",
        heading: "Primary Uses",
        items: [
          "Processing enrollments, payments, and issuing certificates",
          "Personalizing your learning path and course recommendations",
          "Providing technical support and responding to inquiries",
          "Sending transactional emails and important platform updates",
          "Maintaining the security and integrity of our systems",
        ],
      },
      {
        type: "list",
        heading: "Secondary Uses (with consent)",
        items: [
          "Sending promotional content about new courses or events",
          "Aggregated analytics to improve curriculum and UX",
          "Research on cybersecurity education effectiveness",
        ],
      },
    ],
  },
  {
    id: "sharing",
    label: "Data Sharing",
    title: "Sharing & Disclosure",
    content: [
      {
        type: "text",
        body: "NIHACS shares data only when necessary to operate our services, comply with legal obligations, or protect our users. We maintain strict agreements with all third parties.",
      },
      {
        type: "list",
        heading: "We May Share With",
        items: [
          "Payment processors (Razorpay, Stripe) to complete transactions",
          "Cloud infrastructure providers (AWS, Vercel) for hosting",
          "Analytics services (Google Analytics) under data processing agreements",
          "Law enforcement or regulators when legally required",
          "Successor entities in the event of a merger or acquisition",
        ],
      },
      {
        type: "highlight",
        body: "We will never sell, rent, or trade your personal information to advertisers or data brokers — ever.",
      },
    ],
  },
  {
    id: "cookies",
    label: "Cookies",
    title: "Cookies & Tracking",
    content: [
      {
        type: "text",
        body: "We use cookies and similar tracking technologies to enhance your experience and gather usage analytics. You can control cookie preferences through your browser settings.",
      },
      {
        type: "list",
        heading: "Types of Cookies We Use",
        items: [
          "Essential cookies — required for login sessions and security",
          "Functional cookies — remember your preferences and settings",
          "Analytics cookies — understand how users navigate our platform",
          "Marketing cookies — only with your explicit consent",
        ],
      },
      {
        type: "text",
        body: "Disabling cookies may affect the functionality of certain features. Most browsers allow you to refuse cookies; consult your browser's help documentation for instructions.",
      },
    ],
  },
  {
    id: "security",
    label: "Security",
    title: "Data Security",
    content: [
      {
        type: "text",
        body: "As a cybersecurity education platform, we hold our own security to the highest standard. We implement industry-leading practices to protect your data.",
      },
      {
        type: "list",
        heading: "Security Measures",
        items: [
          "TLS 1.3 encryption for all data in transit",
          "AES-256 encryption for sensitive data at rest",
          "Regular third-party penetration testing",
          "Multi-factor authentication for administrative access",
          "Automated vulnerability scanning and intrusion detection",
          "SOC 2-aligned incident response procedures",
        ],
      },
      {
        type: "highlight",
        body: "Despite our best efforts, no method of transmission over the internet is 100% secure. We will notify affected users promptly in the event of a breach.",
      },
    ],
  },
  {
    id: "rights",
    label: "Your Rights",
    title: "Your Privacy Rights",
    content: [
      {
        type: "text",
        body: "You have meaningful control over your personal data. Depending on your jurisdiction, you may exercise the following rights at any time.",
      },
      {
        type: "list",
        heading: "Rights Available to You",
        items: [
          "Access — request a copy of all personal data we hold about you",
          "Rectification — correct inaccurate or incomplete data",
          "Erasure — request deletion of your account and associated data",
          "Portability — receive your data in a structured, machine-readable format",
          "Restriction — limit how we process your data in certain circumstances",
          "Objection — opt out of marketing communications at any time",
        ],
      },
      {
        type: "text",
        body: "To exercise any of these rights, contact us at privacy@nihacs.com. We will respond within 30 days.",
      },
    ],
  },
  {
    id: "retention",
    label: "Data Retention",
    title: "Retention Policy",
    content: [
      {
        type: "text",
        body: "We retain your data only as long as necessary to fulfill the purposes outlined in this policy or as required by law.",
      },
      {
        type: "list",
        heading: "Retention Periods",
        items: [
          "Active account data — retained for the duration of your account",
          "Course completion records — retained for 7 years for certification validity",
          "Payment records — retained for 5 years per financial regulations",
          "Support communications — retained for 2 years",
          "Analytics data — anonymized and retained indefinitely",
        ],
      },
      {
        type: "text",
        body: "Upon account deletion, personal data is removed within 30 days, except where legal obligations require longer retention.",
      },
    ],
  },
  {
    id: "contact",
    label: "Contact Us",
    title: "Contact & Grievances",
    content: [
      {
        type: "text",
        body: "For any privacy-related questions, requests, or concerns, please reach out to our dedicated privacy team.",
      },
      {
        type: "list",
        heading: "Contact Details",
        items: [
          "Email: privacy@nihacs.com",
          "General: contact@nihacs.com",
          "Website: nihacs.com/contact",
          "Response time: Within 2 business days",
        ],
      },
      {
        type: "highlight",
        body: "We take every privacy concern seriously. If you feel your concern has not been addressed, you have the right to lodge a complaint with your local data protection authority.",
      },
    ],
  },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0].id;
      for (const s of sections) {
        const el = sectionRefs.current[s.id];
        if (el && el.getBoundingClientRect().top <= 120) current = s.id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#050505] text-[#e8e8e8] font-['DM_Sans',_Segoe_UI,_sans-serif]">
      {/* Minimal custom CSS: fonts, scrollbar, animations only */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Bebas+Neue&family=JetBrains+Mono:wght@400;600&display=swap');
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #dc2626; border-radius: 2px; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.4s ease both; }
      `}</style>

      {/* ── Hero ── */}
      <div className="relative overflow-hidden pt-[clamp(3rem,6vw,5rem)] px-[clamp(1rem,4vw,3rem)] pb-[clamp(2rem,4vw,3rem)]">
        {/* Grid lines */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220,38,38,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220,38,38,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Radial gradient overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(220,38,38,0.06) 0%, transparent 70%)'
          }}
        />
        
        <div className="relative pt-15 md:pt-10 z-10 max-w-[900px] mx-auto text-center">
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[rgba(220,38,38,0.1)] border border-[rgba(220,38,38,0.2)] rounded-full text-[0.65rem] font-bold tracking-[0.1em] uppercase text-[#ef4444] font-['JetBrains_Mono',_monospace]">
              Legal Document
            </span>
          </div>
          <h1 className="font-['Bebas_Neue',_sans-serif] text-[clamp(3rem,8vw,6rem)] text-white tracking-[3px] leading-[0.95] mb-4">
            PRIVACY<br />
            <span className="text-[#dc2626]">POLICY</span>
          </h1>
          <p className="text-[#555] text-[0.9rem] leading-[1.8] max-w-[500px] mx-auto mb-6">
            How NIHACS collects, uses, and protects your personal information across all our cybersecurity training services.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            {["Effective: Jan 15, 2025", "nihacs.com", `${sections.length} Sections`].map((item, i) => (
              <span key={i} className="font-['JetBrains_Mono',_monospace] text-[0.7rem] text-[#333] tracking-[0.08em]">
                {i > 0 && <span className="mr-4 text-[#1e1e1e]">|</span>}
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Layout ── */}
      <div className="max-w-[1100px] mx-auto pt-0 px-[clamp(1rem,4vw,3rem)] pb-16 flex gap-12 items-start">
        
        {/* ── Sidebar TOC (Desktop) ── */}
        <aside className="sticky top-20 w-[220px] flex-shrink-0 h-fit max-[900px]:hidden">
          <div className="font-['JetBrains_Mono',_monospace] text-[0.62rem] text-[#333] tracking-[0.15em] uppercase mb-3 pl-[14px]">
            Contents
          </div>
          <div className="flex flex-col gap-0.5">
            {sections.map((s, i) => (
              <button
                key={s.id}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg cursor-pointer text-[0.78rem] font-medium tracking-[0.03em] text-[#555] transition-colors duration-200 border-none bg-transparent text-left w-full hover:text-[#ccc] hover:bg-[rgba(255,255,255,0.04)] ${activeSection === s.id ? 'text-[#dc2626] bg-[rgba(220,38,38,0.08)]' : ''}`}
                onClick={() => scrollTo(s.id)}
              >
                <span className={`w-1.25 h-1.25 rounded-full bg-[#333] flex-shrink-0 transition-colors duration-200 ${activeSection === s.id ? 'bg-[#dc2626]' : ''}`} />
                <span className="font-['JetBrains_Mono',_monospace] text-[0.62rem] text-inherit opacity-50">0{i + 1}</span>
                {s.label}
              </button>
            ))}
          </div>

          {/* Contact box */}
          <div className="mt-8 p-4 bg-[rgba(220,38,38,0.06)] border border-[rgba(220,38,38,0.15)] rounded-xl">
            <div className="font-['JetBrains_Mono',_monospace] text-[0.6rem] text-[#dc2626] tracking-[0.1em] uppercase mb-2">
              Questions?
            </div>
            <div className="text-[0.75rem] text-[#666] leading-[1.6]">
              Email us at<br />
              <a href="mailto:privacy@nihacs.com" className="text-[#dc2626] no-underline font-semibold">
                privacy@nihacs.com
              </a>
            </div>
          </div>
        </aside>

        {/* ── Content ── */}
        <main className="flex-1 min-w-0">
          {/* Mobile TOC toggle */}
          <button 
            className="max-[900px]:flex hidden items-center justify-between gap-2 px-4 py-2 bg-[#111] border border-[#1e1e1e] rounded-lg cursor-pointer text-[#ccc] text-[0.78rem] font-bold tracking-[0.05em] uppercase font-['JetBrains_Mono',_monospace] w-full mb-4"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span>Table of Contents</span>
            <span className="text-[#dc2626]">{menuOpen ? "▲" : "▼"}</span>
          </button>
          
          {/* Mobile menu */}
          <div className={`max-[900px]:flex hidden flex-col gap-0.5 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-1.5 mb-6 ${menuOpen ? '' : 'hidden'}`}>
            {sections.map((s, i) => (
              <button
                key={s.id}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg cursor-pointer text-[0.78rem] font-medium tracking-[0.03em] text-[#555] transition-colors duration-200 border-none bg-transparent text-left w-full hover:text-[#ccc] hover:bg-[rgba(255,255,255,0.04)] ${activeSection === s.id ? 'text-[#dc2626] bg-[rgba(220,38,38,0.08)]' : ''}`}
                onClick={() => scrollTo(s.id)}
              >
                <span className={`w-1.25 h-1.25 rounded-full bg-[#333] flex-shrink-0 transition-colors duration-200 ${activeSection === s.id ? 'bg-[#dc2626]' : ''}`} />
                <span className="font-['JetBrains_Mono',_monospace] text-[0.62rem] opacity-50">0{i + 1}</span>
                {s.label}
              </button>
            ))}
          </div>

          {sections.map((section, si) => (
            <div
              key={section.id}
              className="bg-[#0a0a0a] border border-[#141414] rounded-2xl p-[clamp(1.5rem,4vw,2.5rem)] mb-6 scroll-mt-[90px] transition-colors duration-300 hover:border-[#1e1e1e] animate-fade-up"
              style={{ animationDelay: `${si * 0.05}s` }}
              ref={el => sectionRefs.current[section.id] = el}
            >
              <div className="font-['JetBrains_Mono',_monospace] text-[0.65rem] text-[#dc2626] tracking-[0.15em] uppercase mb-2">
                SECTION {String(si + 1).padStart(2, "0")} — {section.label.toUpperCase()}
              </div>
              <div className="font-['Bebas_Neue',_sans-serif] text-[clamp(1.6rem,3vw,2.2rem)] text-white tracking-[1.5px] mb-5 pb-3.5 border-b border-[#161616]">
                {section.title}
              </div>

              {section.content.map((block, bi) => {
                if (block.type === "text") return (
                  <p key={bi} className="text-[0.9rem] leading-[1.8] text-[#888] mb-4">{block.body}</p>
                );
                if (block.type === "highlight") return (
                  <div key={bi} className="bg-[rgba(220,38,38,0.07)] border-l-[3px] border-[#dc2626] rounded-r-lg px-4 py-3.5 text-[0.84rem] leading-[1.7] text-[#aaa] my-4 font-['JetBrains_Mono',_monospace]">
                    {block.body}
                  </div>
                );
                if (block.type === "list") return (
                  <div key={bi}>
                    <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#dc2626] mt-5 mb-1.5 font-['JetBrains_Mono',_monospace]">
                      {block.heading}
                    </div>
                    <ul className="list-none flex flex-col gap-1">
                      {block.items.map((item, ii) => (
                        <li key={ii} className="flex items-start gap-2.5 text-[0.875rem] text-[#777] leading-[1.65] py-1.5 border-b border-[#111] last:border-b-0 relative pl-5">
                          <span className="absolute left-0 top-1.5 text-[#dc2626] font-['JetBrains_Mono',_monospace] text-[0.65rem] opacity-70">//</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
                return null;
              })}
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}