"use client";
import React, { useState } from "react";
import Link from "next/link";

const sampleCourses = [
  {
    id: 1,
    title: "Web Penetration Testing And Bug Bounty Hunting",
    slug: "web-penetration-testing-bug-bounty-hunting",
    description: "Hands-on labs covering pen-testing, recon, and exploitation.",
    duration: "6 Months",
    level: "Advanced",
    image: "/Courses/6.png",
    badge: "Bestseller",
    rating: 4.8,
    reviews: 2100,
    price: 55000,
    originalPrice: 60000,
    emi: "9,167",
    sectionLabel: "Advanced",
    sectionId: "advanced",
    topics: ["Reconnaissance & OSINT", "Vulnerability Scanning", "Exploitation Techniques", "Bug Bounty Platforms", "Report Writing"],
  },
  {
    id: 2,
    title: "Basic Ethical Hacking",
    slug: "basic-ethical-hacking",
    description: "Core security concepts, network defense, and incident response.",
    duration: "3 Months",
    level: "Beginner",
    image: "/Courses/03.png",
    badge: null,
    rating: 4.5,
    reviews: 870,
    price: 18000,
    originalPrice: 22000,
    emi: "6,000",
    sectionLabel: "Certification",
    sectionId: "certification",
    topics: ["Networking Basics", "Linux Essentials", "Password Attacks", "MITM Attacks", "Incident Response"],
  },
  {
    id: 3,
    title: "Bachelor in Cybersecurity",
    slug: "bachelor-in-cybersecurity",
    description: "OWASP top 10, secure coding and real-world exploit labs.",
    duration: "3 Years",
    level: "Undergraduate",
    image: "/Courses/3.png",
    badge: "Popular",
    rating: 4.7,
    reviews: 1540,
    price: 300000,
    originalPrice: 360000,
    emi: "8,334",
    sectionLabel: "Degree",
    sectionId: "degree",
    topics: ["OWASP Top 10", "Secure Coding", "Cryptography", "Network Security", "Digital Forensics"],
  },
  {
    id: 4,
    title: "Master in Cybersecurity And Ethical Hacking",
    slug: "master-in-cybersecurity-ethical-hacking",
    description: "Secure architectures, IAM, and cloud incident response.",
    duration: "2 Years",
    level: "Postgraduate",
    image: "/Courses/2.png",
    badge: "Bestseller",
    rating: 4.9,
    reviews: 980,
    price: 240000,
    originalPrice: 280000,
    emi: "10,000",
    sectionLabel: "Degree",
    sectionId: "degree",
    topics: ["Zero Trust Architecture", "Cloud Security", "IAM & PAM", "Threat Intelligence", "Red Team Ops"],
  },
  {
    id: 5,
    title: "Diploma in Cybersecurity",
    slug: "diploma-in-cybersecurity",
    description: "Python and tooling for automation, analysis, and tooling.",
    duration: "12 Months",
    level: "Intermediate",
    image: "/Courses/12.png",
    badge: null,
    rating: 4.7,
    reviews: 3120,
    price: 110000,
    originalPrice: 120000,
    emi: "9,167",
    sectionLabel: "Diploma",
    sectionId: "diploma",
    topics: ["Threat Hunting", "SIEM & SOC", "Digital Forensics", "Incident Response", "Compliance & GRC"],
  },
];

const levelColor = {
  Beginner: "#4ADE80",
  Intermediate: "#FACC15",
  Advanced: "#FF2020",
  Undergraduate: "#60A5FA",
  Postgraduate: "#C084FC",
};

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#FF2020" stroke="#FF2020" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [durationFilter, setDurationFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [typeFilter, setTypeFilter] = useState("All Types");

  const filteredCourses = sampleCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDuration =
      durationFilter === "all" || course.duration === durationFilter;
    const matchesType =
      typeFilter === "All Types" ||
      course.sectionLabel.toLowerCase().includes(typeFilter.toLowerCase()) ||
      course.level.toLowerCase().includes(typeFilter.toLowerCase()) ||
      course.title.toLowerCase().includes(typeFilter.toLowerCase());
    return matchesSearch && matchesDuration && matchesType;
  });

  const uniqueDurations = ["all", ...new Set(sampleCourses.map((c) => c.duration))];

  return (
    <section id="courses" className="bg-black text-white md:pt-30 py-20">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Our <span className="text-red-600">Courses</span></h2>
          <p className="text-gray-300">
            Explore our hands-on courses designed to build job-ready skills in cybersecurity and development.
          </p>
        </div>

        {/* Sticky Filter Bar */}
        <div className="sticky top-20 bg-black/95 backdrop-blur-sm z-40 py-4 px-4 rounded-lg border border-gray-800 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
            {/* Search */}
            <div className="relative md:col-span-1">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#0b0b0b] text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-[#ff1e00] focus:outline-none"
              />
              <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(true)}
              className="w-full bg-[#ff1e00] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#ff3333] transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
            </button>
          </div>

          {(searchTerm || durationFilter !== "all") && (
            <div className="mt-3 text-sm text-gray-400">
              Found{" "}
              <span className="text-[#ff1e00] font-semibold">{filteredCourses.length}</span>{" "}
              course{filteredCourses.length !== 1 ? "s" : ""}
            </div>
          )}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((c) => (
              <article
                key={c.id}
                className="bg-[#0b0b0b] rounded-xl overflow-hidden shadow-lg flex flex-col border border-gray-800 hover:border-[#ff1e00]/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Thumbnail */}
                <div className="relative h-48 bg-gray-900 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge */}
                  {c.badge && (
                    <span className="absolute top-3 left-3 bg-[#ff1e00] text-white text-xs font-bold px-2 py-1 rounded">
                      {c.badge}
                    </span>
                  )}
                  {/* Level */}
                  <span
                    className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded border"
                    style={{
                      color: levelColor[c.level] || "#fff",
                      borderColor: (levelColor[c.level] || "#fff") + "60",
                      background: "rgba(0,0,0,0.7)",
                    }}
                  >
                    {c.level}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    <StarIcon />
                    <span className="text-xs text-[#ff1e00] font-semibold">{c.rating}</span>
                    <span className="text-xs text-gray-500">({c.reviews.toLocaleString()})</span>
                  </div>

                  {/* Title — clicking this navigates to the dynamic page */}
                  <Link
                    href={`/courses/${c.slug}`}
                    className="text-lg font-semibold text-white mb-2 hover:text-[#ff1e00] transition-colors leading-snug"
                  >
                    {c.title}
                  </Link>

                  <p className="text-gray-400 text-sm mb-4 flex-1">{c.description}</p>

                  {/* Topics preview */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {c.topics.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-[#ff1e00]/10 border border-[#ff1e00]/20 text-gray-400 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                    {c.topics.length > 3 && (
                      <span className="text-xs text-gray-500">+{c.topics.length - 3} more</span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="border-t border-gray-800 pt-4 flex items-center justify-between">
                    {/* <div>
                      <div className="text-white font-bold text-base">₹{c.price.toLocaleString()}</div>
                      <div className="text-gray-500 text-xs line-through">₹{c.originalPrice.toLocaleString()}</div>
                    </div> */}
                    <Link
                      href={`/courses/${c.slug}`}
                      className="bg-[#ff1e00] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#ff3333] transition-colors flex items-center gap-1"
                    >
                      View Course
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">No courses found. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>

      {/* Filter Modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            className="bg-black border border-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`.hide-sb::-webkit-scrollbar{display:none}`}</style>

            {/* Modal Header */}
            <div className="sticky top-0 bg-black border-b border-gray-800 p-6 flex items-center justify-between z-10">
              <h3 className="text-2xl font-extrabold text-white">Filters</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">

              {/* Duration */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Duration</h4>
                <div className="space-y-2">
                  {uniqueDurations.map((duration) => (
                    <label key={duration} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="duration"
                        value={duration}
                        checked={durationFilter === duration}
                        onChange={(e) => setDurationFilter(e.target.value)}
                        className="w-4 h-4 accent-[#ff1e00]"
                      />
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {duration === "all" ? "All Durations" : duration}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Course Type */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Course Type</h4>
                <div className="space-y-2">
                  {["All Types", "Certification", "Diploma", "Degree", "Advanced"].map((type) => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="type"
                        value={type}
                        checked={typeFilter === type}
                        onChange={(e) => setTypeFilter(e.target.value)}
                        className="w-4 h-4 accent-[#ff1e00]"
                      />
                      <span className="text-gray-300 group-hover:text-white transition-colors">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-black border-t border-gray-800 p-6 flex gap-4">
              <button
                onClick={() => {
                  setSearchTerm("");
                  setDurationFilter("all");
                  setTypeFilter("All Types");
                }}
                className="flex-1 bg-black border-2 border-white text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
              >
                Clear All
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="flex-1 bg-[#ff1e00] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#ff3333] transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}