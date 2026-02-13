"use client";

const FeatureItem = ({ icon, title, description, position }) => {
  const positions = {
    "top-left": "lg:absolute lg:top-0 lg:left-0",
    "top-right": "lg:absolute lg:top-0 lg:right-0",
    "bottom-left": "lg:absolute lg:bottom-0 lg:left-0",
    "bottom-right": "lg:absolute lg:bottom-0 lg:right-0",
    "top-center": "lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2",
    "bottom-center": "lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2",
    "left-center": "lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2",
    "right-center": "lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2",
  };

  return (
    <div className={`group ${positions[position]}`}>
      <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-red-600 transition-all duration-300 hover:bg-neutral-900 max-w-sm">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/20 transition-colors duration-300">
            {icon}
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-bold text-base text-white mb-1">{title}</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Choose() {
  const features = [
    {
      position: "top-left",
      icon: (
        <svg
          className="w-6 h-6 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Industry-Led Training",
      description:
        "Learn from professionals working in Fortune 500 companies and leading security firms with real-world experience and cutting-edge methodologies.",
    },
    {
      position: "top-right",
      icon: (
        <svg
          className="w-6 h-6 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      title: "98% Placement Success",
      description:
        "Join elite graduates securing positions within 90 days at top security firms with our proven track record and dedicated placement assistance.",
    },
    {
      position: "bottom-left",
      icon: (
        <svg
          className="w-6 h-6 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "State-of-the-Art Labs",
      description:
        "Advanced cybersecurity labs with real attack scenarios and live threat simulations to master defensive and offensive security techniques.",
    },
    {
      position: "bottom-right",
      icon: (
        <svg
          className="w-6 h-6 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "150+ Industry Partners",
      description:
        "Direct connections with CrowdStrike, Palo Alto Networks, Fortinet and more for internships, mentorship, and guaranteed job opportunities.",
    },
    {
      position: "top-center",
      icon: (
        <svg
          className="w-6 h-6 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      title: "Hands-On Practical Training",
      description:
        "80% practical, 20% theory approach with live projects, capture-the-flag competitions, and real-world penetration testing scenarios.",
    },
    {
      position: "bottom-center",
      icon: (
        <svg
          className="w-6 h-6 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "24/7 Career Support",
      description:
        "Lifetime career guidance, resume building, interview preparation, and job search assistance even after graduation to ensure your success.",
    },
    {
      position: "left-center",
      icon: (
        <svg
          className="w-6 h-6 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Certification Programs",
      description:
        "Industry-recognized certifications including OSCP, CEH, CISSP, and CompTIA Security+ included in curriculum with exam preparation.",
    },
    {
      position: "right-center",
      icon: (
        <svg
          className="w-6 h-6 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Flexible Learning Options",
      description:
        "Choose from full-time, part-time, or self-paced online courses with weekend batches and evening classes to fit your schedule and commitments.",
    },
  ];

  return (
    <section className="relative bg-black py-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-xs tracking-[3px] text-red-600 mb-3 uppercase">
            &lt; WHY CHOOSE NIHACS &gt;
          </div>
          <h2 className="font-orbitron text-4xl lg:text-5xl font-black uppercase tracking-tight">
            <span className="text-white bg-clip-text ">
              Why Choose Us?
            </span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4" />
        </div>

        {/* Main Layout - Mobile: Stack, Desktop: Circle with items around */}
        <div className="relative">
          {/* Mobile Layout - Simple Stack */}
          <div className="lg:hidden space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-black  rounded-2xl p-6 hover:border-red-600 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout - Circle in Center with Items Around */}
          <div className="hidden lg:block">
            <div className="relative min-h-[900px]">
              {/* Center Circle with GIF */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-full bg-red-600 blur-3xl opacity-20 scale-110" />

                  {/* Main circle container with fallback background */}
                  <div className="relative w-80 h-80 rounded-full border-4 border-red-600 overflow-hidden shadow-2xl shadow-red-600/30 bg-gradient-to-br from-neutral-900 to-red-900/20 flex items-center justify-center">
                    {/* GIF with fallback content */}
                    <div className="relative w-full h-full">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                        onError={(e) => console.error("video load error", e)}
                      >
                        <source src="/gif/gif1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                       {/* Fallback content - shows if GIF fails */}
                       <div
                         className="absolute inset-0 bg-neutral-900 hidden flex-col items-center justify-center p-4 text-center"
                         aria-hidden="true"
                       >
                         <div className="w-16 h-16 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
                           <svg
                             className="w-8 h-8 text-red-500"
                             fill="none"
                             stroke="currentColor"
                             viewBox="0 0 24 24"
                           >
                             <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               strokeWidth={2}
                               d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                             />
                             <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               strokeWidth={2}
                               d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                             />
                           </svg>
                         </div>
                         <p className="text-xs text-neutral-400 max-w-[80%]">
                           Real-world cybersecurity training environment
                         </p>
                       </div>
                    </div>

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Rotating border animation */}
                  <div
                    className="absolute inset-0 rounded-full border-2 border-transparent border-t-red-500 animate-spin"
                    style={{ animationDuration: "6s" }}
                  />
                  <div
                    className="absolute inset-0 rounded-full border-2 border-transparent border-b-red-600 animate-spin-reverse"
                    style={{ animationDuration: "8s" }}
                  />
                </div>
              </div>

              {/* Feature Items Around Circle */}
              {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}

              {/* Connecting lines (decorative) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
                style={{ zIndex: 1 }}
              >
                {/* Top Left Line */}
                <line
                  x1="20%"
                  y1="15%"
                  x2="50%"
                  y2="50%"
                  stroke="url(#gradient-top-left)"
                  strokeWidth="1.5"
                  strokeDasharray="8,4"
                />
                {/* Top Right Line */}
                <line
                  x1="80%"
                  y1="15%"
                  x2="50%"
                  y2="50%"
                  stroke="url(#gradient-top-right)"
                  strokeWidth="1.5"
                  strokeDasharray="8,4"
                />
                {/* Bottom Left Line */}
                <line
                  x1="20%"
                  y1="85%"
                  x2="50%"
                  y2="50%"
                  stroke="url(#gradient-bottom-left)"
                  strokeWidth="1.5"
                  strokeDasharray="8,4"
                />
                {/* Bottom Right Line */}
                <line
                  x1="80%"
                  y1="85%"
                  x2="50%"
                  y2="50%"
                  stroke="url(#gradient-bottom-right)"
                  strokeWidth="1.5"
                  strokeDasharray="8,4"
                />
                {/* Top Center Line */}
                <line
                  x1="50%"
                  y1="15%"
                  x2="50%"
                  y2="50%"
                  stroke="url(#gradient-top-center)"
                  strokeWidth="1.5"
                  strokeDasharray="8,4"
                />
                {/* Bottom Center Line */}
                <line
                  x1="50%"
                  y1="85%"
                  x2="50%"
                  y2="50%"
                  stroke="url(#gradient-bottom-center)"
                  strokeWidth="1.5"
                  strokeDasharray="8,4"
                />
                {/* Left Center Line */}
                <line
                  x1="15%"
                  y1="50%"
                  x2="50%"
                  y2="50%"
                  stroke="url(#gradient-left-center)"
                  strokeWidth="1.5"
                  strokeDasharray="8,4"
                />
                {/* Right Center Line */}
                <line
                  x1="85%"
                  y1="50%"
                  x2="50%"
                  y2="50%"
                  stroke="url(#gradient-right-center)"
                  strokeWidth="1.5"
                  strokeDasharray="8,4"
                />

                {/* Gradients for lines */}
                <defs>
                  <linearGradient
                    id="gradient-top-left"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#dc2626" stopOpacity="0" />
                    <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient
                    id="gradient-top-right"
                    x1="100%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#dc2626" stopOpacity="0" />
                    <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient
                    id="gradient-bottom-left"
                    x1="0%"
                    y1="100%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#dc2626" stopOpacity="0" />
                    <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient
                    id="gradient-bottom-right"
                    x1="100%"
                    y1="100%"
                    x2="0%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#dc2626" stopOpacity="0" />
                    <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient
                    id="gradient-top-center"
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#dc2626" stopOpacity="0" />
                    <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient
                    id="gradient-bottom-center"
                    x1="50%"
                    y1="100%"
                    x2="50%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#dc2626" stopOpacity="0" />
                    <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient
                    id="gradient-left-center"
                    x1="0%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                  >
                    <stop offset="0%" stopColor="#dc2626" stopOpacity="0" />
                    <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient
                    id="gradient-right-center"
                    x1="100%"
                    y1="50%"
                    x2="0%"
                    y2="50%"
                  >
                    <stop offset="0%" stopColor="#dc2626" stopOpacity="0" />
                    <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}