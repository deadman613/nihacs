"use client";
import React from "react";

export default function HeroCourses() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left: Heading */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Learn from Industry Experts</h1>
            <p className="text-gray-300 mb-6">Our courses are taught by experienced professionals — hands-on training, real-world projects, and career mentorship to get you job-ready.</p>

            <ul className="space-y-3 text-gray-400 mb-6">
              <li>Practical labs and project-based learning</li>
              <li>Placement assistance and portfolio guidance</li>
              <li>Flexible schedules with weekend batches</li>
            </ul>

            <a href="/courses" className="inline-block bg-[#ff1e00] text-white font-semibold px-5 py-3 rounded-full">View Courses</a>
          </div>

          {/* Right: Trainer profiles */}
          <div className="space-y-6">
            <article className="flex bg-[#0b0b0b] rounded-xl p-4 items-center gap-4 shadow-lg">
              <img src="/trainers/varnit.jpeg" alt="Varnit" className="w-38 h-38  object-cover " />
              <div>
                <h3 className="text-lg font-semibold">Varnit Kumar</h3>
                <p className="text-sm text-gray-300">Lead Trainer — Ethical Hacking & Penetration Testing</p>
                <p className="text-sm text-gray-400 mt-2">10+ years experience in cybersecurity, red-team engagements, and incident response. Mentor to thousands of learners with practical, lab-driven teaching.</p>
              </div>
            </article>

            <article className="flex bg-[#0b0b0b] rounded-xl p-4 items-center gap-4 shadow-lg">
              <img src="/trainers/kunal.jpeg" alt="Kunal" className="w-38 h-38  object-cover " />
              <div>
                <h3 className="text-lg font-semibold">Kunal Sharma</h3>
                <p className="text-sm text-gray-300">Senior Instructor — Web & Cloud Security</p>
                <p className="text-sm text-gray-400 mt-2">8+ years building secure systems, conducting security audits, and teaching secure development practices with real-world case studies.</p>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}
