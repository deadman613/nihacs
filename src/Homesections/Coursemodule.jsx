"use client";

import { useState } from "react";
import Link from "next/link";
import courseData from "../app/Data/CourseModulesection.json";
import { FormModal } from "../Homesections/form/page";

// ── JSON data map ──────────────────────────────────────────────
const courseModules = Object.fromEntries(
  courseData.courses.map((c) => [c.slug, c])
);

const imageMap = {
  "web-penetration-testing-bug-bounty-hunting": "/Courses/6.png",
  "basic-ethical-hacking": "/Courses/03.png",
  "bachelor-in-cybersecurity": "/Courses/3.png",
  "master-in-cybersecurity-ethical-hacking": "/Courses/2.png",
  "diploma-in-cybersecurity": "/Courses/12.png",
};

// ── Icons ──────────────────────────────────────────────────────
const StarIcon = ({ filled }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill={filled ? "#FF2020" : "none"} stroke="#FF2020" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FF2020" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const ArrowLeftIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
  </svg>
);
const UsersIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const BookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);
const CertIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);
const ShieldIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#FF2020" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const ChevronIcon = ({ open }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.25s ease", flexShrink: 0 }}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
const PlayIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const typeConfig = {
  video:   { label: "VIDEO",   color: "#dc2626", bg: "#dc262618", icon: <PlayIcon /> },
  lab:     { label: "LAB",     color: "#b91c1c", bg: "#b91c1c18", icon: "⚗" },
  quiz:    { label: "QUIZ",    color: "#7f1d1d", bg: "#7f1d1d18", icon: "✦" },
  project: { label: "PROJECT", color: "#991b1b", bg: "#991b1b18", icon: "◈" },
};

const levelColor = {
  Beginner:      { text: "text-green-400",  border: "border-green-400/40",  bg: "bg-green-400/10"  },
  Intermediate:  { text: "text-yellow-400", border: "border-yellow-400/40", bg: "bg-yellow-400/10" },
  Advanced:      { text: "text-red-500",    border: "border-red-500/40",    bg: "bg-red-500/10"    }
};

// ── Related Card ───────────────────────────────────────────────
function RelatedCard({ course }) {
  const lc = levelColor[course.level] || levelColor.Advanced;
  return (
    <Link href={`/courses/${course.slug}`}
      className="bg-[#0d0d0d] border border-gray-800 hover:border-red-600/50 rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1">
      <div className="h-40 relative overflow-hidden bg-black">
        <img src={imageMap[course.slug]} alt={course.title}
          className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <p className="text-white text-sm font-semibold mb-3 leading-snug flex-1">{course.title}</p>
        <div className="flex items-center gap-2 text-gray-500 text-xs font-mono">
          <ClockIcon /><span>{course.duration}</span>
        </div>
      </div>
    </Link>
  );
}

// ── Module Accordion ───────────────────────────────────────────
function ModuleAccordion({ modules }) {
  const [openModule, setOpenModule] = useState(0);

  return (
    <div className="flex flex-col" style={{ gap: "2px" }}>
      {modules.map((mod) => {
        const isOpen = openModule === mod.moduleNumber;
        return (
          <div key={mod.moduleNumber} style={{
            background: isOpen ? "#0d0000" : "#080808",
            border: isOpen ? "1px solid #dc262650" : "1px solid #161616",
            borderRadius: "6px",
            overflow: "hidden",
            transition: "all 0.2s ease",
          }}>
            {/* Module header */}
            <button
              onClick={() => setOpenModule(isOpen ? null : mod.moduleNumber)}
              className="w-full text-left flex items-center gap-3 transition-colors hover:bg-white/[0.015]"
              style={{ padding: "14px 18px" }}>
              {/* Number badge */}
              <div style={{
                width: "32px", height: "32px", flexShrink: 0,
                background: isOpen ? "#dc2626" : "#111",
                border: isOpen ? "none" : "1px solid #222",
                borderRadius: "4px",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.2s",
              }}>
                <span style={{ color: isOpen ? "#fff" : "#555", fontSize: "11px", fontWeight: 900, fontFamily: "monospace" }}>
                  {String(mod.moduleNumber).padStart(2, "0")}
                </span>
              </div>

              {/* Title + meta */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  color: isOpen ? "#fff" : "#888",
                  fontSize: "13px", fontWeight: 700,
                  whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                  transition: "color 0.2s",
                }}>
                  {mod.title}
                </div>
                <div style={{ display: "flex", gap: "14px", marginTop: "2px" }}>
                  <span style={{ color: "#333", fontSize: "11px", fontFamily: "monospace" }}>⏱ {mod.duration}</span>
                  <span style={{ color: "#333", fontSize: "11px", fontFamily: "monospace" }}>◉ {mod.lessons.length} lessons</span>
                </div>
              </div>

              <ChevronIcon open={isOpen} />
            </button>

            {/* Lessons */}
            {isOpen && (
              <div style={{ borderTop: "1px solid #1a0000" }}>
                {mod.lessons.map((lesson, idx) => {
                  const tc = typeConfig[lesson.type] || typeConfig.video;
                  return (
                    <div key={lesson.id} style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      padding: "10px 14px",
                      background: idx % 2 === 0 ? "#080808" : "#060606",
                      borderBottom: idx < mod.lessons.length - 1 ? "1px solid #0f0f0f" : "none",
                    }}>
                      {/* type icon */}
                      <div style={{
                        width: "26px", height: "26px", flexShrink: 0,
                        background: "#0f0f0f", border: `1px solid ${tc.color}28`,
                        borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <span style={{ color: tc.color, fontSize: "10px" }}>{tc.icon}</span>
                      </div>

                      {/* lesson title */}
                      <span style={{ flex: 1, color: "#bbb", fontSize: "12px", lineHeight: "1.4", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{lesson.title}</span>

                      {/* badge + duration */}
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
                        <span className="hidden sm:inline" style={{
                          background: tc.bg, color: tc.color,
                          fontSize: "9px", fontWeight: 800, letterSpacing: "1px",
                          padding: "2px 5px", fontFamily: "monospace",
                        }}>{tc.label}</span>
                        <span style={{ color: "#333", fontSize: "11px", fontFamily: "monospace", minWidth: "44px", textAlign: "right" }}>
                          {lesson.duration}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────
export default function CourseDetailClient({ course, related = [] }) {
  const [activeTab, setActiveTab] = useState("overview");
  const tabs = ["overview", "curriculum", "instructor", "reviews"];

  const discount   = Math.round((1 - course.price / course.originalPrice) * 100);
  const lc         = levelColor[course.level] || levelColor.Advanced;
  const courseData = courseModules[course.slug];
  const courseImg  = imageMap[course.slug];

  const learnItems = [
    ...course.topics,
    "Real-world lab environments",
    "Industry-recognized certification",
    "Career guidance & placement",
    "Live mentorship sessions",
  ];

  return (
    <>
      <style>{`
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }

        /* Horizontal-scroll tabs, no scrollbar */
        .course-tabs {
          border-bottom: 1px solid #161616;
          display: flex;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .course-tabs::-webkit-scrollbar { display: none; }

        /* Stats: 2-col mobile → 4-col sm */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
        }
        @media (min-width: 640px) {
          .stats-grid { grid-template-columns: repeat(4, 1fr); }
        }

        /* Learn grid: 1-col mobile → auto on sm */
        .learn-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }
        @media (min-width: 480px) {
          .learn-grid { grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); }
        }

        /* Curriculum legend hidden on mobile */
        .curriculum-legend { display: none; }
        @media (min-width: 640px) {
          .curriculum-legend { display: flex; }
        }

        /* Related grid */
        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 14px;
          margin-bottom: 28px;
        }
        @media (max-width: 480px) {
          .related-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 360px) {
          .related-grid { grid-template-columns: 1fr; }
        }

        /* Enroll card: static on mobile, sticky on lg */
        .enroll-card {
          background: #0a0a0a;
          border: 1px solid #dc262640;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 0 40px rgba(220,38,38,0.08);
          position: static;
        }
        @media (min-width: 1024px) {
          .enroll-card { position: sticky; top: 24px; }
        }

        /* Enroll thumb height */
        .enroll-thumb {
          position: relative;
          height: 180px;
          overflow: hidden;
          background: #050505;
        }
        @media (min-width: 640px) {
          .enroll-thumb { height: 250px; }
        }
      `}</style>

      <div className="min-h-screen bg-black text-white">

        {/* ── MAIN LAYOUT ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 pt-20 md:pt-26">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* ════ LEFT COLUMN ════ */}
            <div className="lg:col-span-2 flex flex-col gap-6 sm:gap-8">

              {/* Course banner */}
              <div style={{
                borderRadius: "12px", overflow: "hidden",
                border: "1px solid #dc262630",
                position: "relative", aspectRatio: "16/9",
                background: "#0a0a0a",
              }}>
                <img src={courseImg} alt={course.title} className="w-full h-full object-cover" />
              </div>

              {/* Quick stats */}
              <div className="stats-grid">
                {[
                  ["MODULES",  courseData?.totalModules  ?? "—"],
                  ["LESSONS",  courseData?.totalLessons  ?? "—"],
                  ["CONTENT",  courseData?.totalHours    ?? "—"],
                  ["DURATION", course.duration],
                ].map(([label, val]) => (
                  <div key={label} style={{
                    background: "#0a0a0a", border: "1px solid #161616",
                    padding: "14px", textAlign: "center",
                  }}>
                    <div style={{ color: "#dc2626", fontSize: "clamp(15px,3vw,20px)", fontWeight: 900, fontFamily: "monospace" }}>{val}</div>
                    <div style={{ color: "#444", fontSize: "10px", letterSpacing: "1.5px", marginTop: "2px" }}>{label}</div>
                  </div>
                ))}
              </div>

              {/* Tabs */}
              <div className="course-tabs">
                {tabs.map(tab => (
                  <button key={tab} onClick={() => setActiveTab(tab)} style={{
                    padding: "12px 16px",
                    fontSize: "10px", fontFamily: "monospace", fontWeight: 700,
                    letterSpacing: "1.5px", textTransform: "uppercase",
                    background: "none", border: "none", cursor: "pointer",
                    whiteSpace: "nowrap",
                    color: activeTab === tab ? "#dc2626" : "#555",
                    borderBottom: activeTab === tab ? "2px solid #dc2626" : "2px solid transparent",
                    transition: "all 0.2s",
                  }}>
                    {tab}
                  </button>
                ))}
              </div>

              {/* ── OVERVIEW ── */}
              {activeTab === "overview" && (
                <div className="space-y-8 sm:space-y-10" style={{ animation: "fadeUp 0.3s ease" }}>
                  <div>
                    <h2 style={{ color: "#fff", fontSize: "clamp(18px,4vw,22px)", fontWeight: 800, marginBottom: "16px" }}>What You'll Learn</h2>
                    <div className="learn-grid">
                      {learnItems.map(t => (
                        <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: "10px", background: "#0a0a0a", border: "1px solid #161616", borderRadius: "8px", padding: "12px 14px" }}>
                          <span style={{ marginTop: "1px", flexShrink: 0 }}><CheckIcon /></span>
                          <span style={{ color: "#ccc", fontSize: "12px", lineHeight: 1.5 }}>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 style={{ color: "#fff", fontSize: "clamp(18px,4vw,22px)", fontWeight: 800, marginBottom: "16px" }}>Requirements</h2>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {["Basic computer knowledge and internet access","Laptop or desktop with 8GB+ RAM recommended","No prior cybersecurity experience required for beginner levels","Willingness to practice in live labs consistently"].map(r => (
                        <li key={r} style={{ display: "flex", gap: "12px", color: "#888", fontSize: "13px" }}>
                          <span style={{ color: "#dc2626", fontFamily: "monospace", marginTop: "1px", flexShrink: 0 }}>—</span>{r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 style={{ color: "#fff", fontSize: "clamp(18px,4vw,22px)", fontWeight: 800, marginBottom: "16px" }}>Who Is This For</h2>
                    <div className="learn-grid">
                      {["Aspiring cybersecurity professionals","IT students and graduates","Network & system administrators","Developers wanting security skills","Bug bounty hunters","Career changers entering tech"].map(w => (
                        <div key={w} style={{ display: "flex", alignItems: "center", gap: "10px", background: "#0a0a0a", border: "1px solid #161616", borderRadius: "8px", padding: "12px 14px" }}>
                          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#dc2626", flexShrink: 0, boxShadow: "0 0 8px #ff2020" }} />
                          <span style={{ color: "#ccc", fontSize: "12px" }}>{w}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ── CURRICULUM ── */}
              {activeTab === "curriculum" && (
                <div style={{ animation: "fadeUp 0.3s ease" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
                    <div style={{ width: "4px", height: "36px", background: "#dc2626", flexShrink: 0, borderRadius: "2px" }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ color: "#dc2626", fontSize: "10px", fontFamily: "monospace", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "2px" }}>COURSE CURRICULUM</div>
                      <h2 style={{ color: "#fff", fontSize: "clamp(14px,3vw,20px)", fontWeight: 800 }}>
                        {courseData?.totalModules} Modules · {courseData?.totalLessons} Lessons · {courseData?.totalHours}
                      </h2>
                    </div>
                    <div style={{ flex: 1, height: "1px", background: "#111", marginLeft: "8px", minWidth: "20px" }} />
                    <div className="curriculum-legend" style={{ gap: "10px", fontSize: "10px", fontFamily: "monospace", color: "#dc2626", flexShrink: 0 }}>
                      <span>▶ VIDEO</span><span>⚗ LAB</span><span>✦ QUIZ</span><span>◈ PROJECT</span>
                    </div>
                  </div>

                  {courseData ? (
                    <ModuleAccordion modules={courseData.modules} />
                  ) : (
                    <div style={{ color: "#333", textAlign: "center", padding: "60px", fontFamily: "monospace", fontSize: "13px" }}>
                      No curriculum data found.
                    </div>
                  )}
                </div>
              )}

              {/* ── INSTRUCTOR ── */}
              {activeTab === "instructor" && (
                <div style={{ animation: "fadeUp 0.3s ease" }}>
                  <h2 style={{ color: "#fff", fontSize: "clamp(18px,4vw,22px)", fontWeight: 800, marginBottom: "20px" }}>Your Instructor</h2>
                  <div style={{ background: "#0a0a0a", border: "1px solid #161616", borderRadius: "12px", padding: "24px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
                    <div style={{ width: "72px", height: "72px", flexShrink: 0, background: "#0d0d0d", border: "1px solid #dc262640", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <ShieldIcon size={36} />
                    </div>
                    <div style={{ flex: 1, minWidth: "200px" }}>
                      <h3 style={{ color: "#fff", fontSize: "18px", fontWeight: 800, marginBottom: "4px" }}>NIHACS Academy</h3>
                      <p style={{ color: "#dc2626", fontSize: "11px", fontFamily: "monospace", letterSpacing: "1px", marginBottom: "14px" }}>
                        Senior Cybersecurity Trainer · {course.sectionLabel} Specialist
                      </p>
                      <div style={{ display: "flex", gap: "16px", marginBottom: "14px", flexWrap: "wrap" }}>
                        {[["⭐", `${course.rating} Rating`],["👥", `${(course.reviews*3).toLocaleString()} Students`],["📚", "10+ Courses"]].map(([icon, txt]) => (
                          <span key={txt} style={{ color: "#666", fontSize: "12px" }}>{icon} {txt}</span>
                        ))}
                      </div>
                      <p style={{ color: "#777", fontSize: "13px", lineHeight: 1.7 }}>
                        Our instructors are active security researchers and ethical hackers with years of industry experience.
                        Each course is built from real-world engagements — you learn exactly what's used on the job.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ── REVIEWS ── */}
              {activeTab === "reviews" && (
                <div style={{ animation: "fadeUp 0.3s ease" }}>
                  <h2 style={{ color: "#fff", fontSize: "clamp(18px,4vw,22px)", fontWeight: 800, marginBottom: "20px" }}>Student Reviews</h2>
                  <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap", background: "#0a0a0a", border: "1px solid #161616", borderRadius: "12px", padding: "20px 24px", marginBottom: "12px" }}>
                    <span style={{ fontSize: "clamp(48px,10vw,64px)", fontWeight: 900, color: "#dc2626", fontFamily: "monospace", lineHeight: 1 }}>{course.rating}</span>
                    <div>
                      <div style={{ display: "flex", gap: "3px", marginBottom: "8px" }}>{[1,2,3,4,5].map(i=><StarIcon key={i} filled={i<=Math.round(course.rating)}/>)}</div>
                      <p style={{ color: "#444", fontSize: "11px", fontFamily: "monospace" }}>Based on {course.reviews.toLocaleString()} reviews</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {[
                      { name: "Arjun S.",  date: "Jan 2026", text: "Extremely practical course. The lab setup was seamless and instructors respond fast.", rating: 5 },
                      { name: "Priya M.",  date: "Dec 2025", text: "Best cybersecurity course I've done. Got my first bug bounty within 2 months of completing.", rating: 5 },
                      { name: "Rahul K.",  date: "Nov 2025", text: "Very in-depth content. Some advanced sections were challenging but worth it.", rating: 4 },
                    ].map(r => (
                      <div key={r.name} style={{ background: "#0a0a0a", border: "1px solid #161616", borderRadius: "10px", padding: "18px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#1a0000", border: "1px solid #dc262640", display: "flex", alignItems: "center", justifyContent: "center", color: "#dc2626", fontFamily: "monospace", fontWeight: 800, flexShrink: 0 }}>
                            {r.name[0]}
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ color: "#fff", fontSize: "13px", fontWeight: 700 }}>{r.name}</div>
                            <div style={{ color: "#444", fontSize: "11px", fontFamily: "monospace" }}>{r.date}</div>
                          </div>
                          <div style={{ display: "flex", gap: "2px", flexShrink: 0 }}>{[1,2,3,4,5].map(i=><StarIcon key={i} filled={i<=r.rating}/>)}</div>
                        </div>
                        <p style={{ color: "#777", fontSize: "13px", lineHeight: 1.6 }}>{r.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ════ RIGHT COLUMN — Enroll Card ════ */}
            <div className="lg:col-span-1">
              <div className="enroll-card">
                {/* Thumb */}
                <div className="enroll-thumb">
                  <img src={courseImg} alt={course.title} className="w-full h-full object-cover" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,#0a0a0a 0%,transparent 60%)" }} />
                  {course.badge && (
                    <div style={{ position: "absolute", top: "12px", right: "25px", background: "#dc2626", color: "#fff", fontSize: "9px", fontWeight: 800, letterSpacing: "2px", padding: "3px 8px", fontFamily: "monospace" }}>
                      {course.badge.toUpperCase()}
                    </div>
                  )}
                </div>

                <div style={{ padding: "20px 22px" }}>
                  <h3 style={{ color: "#fff", fontSize: "15px", fontWeight: 800, lineHeight: 1.3, marginBottom: "16px" }}>
                    {course.title}
                  </h3>

                  {/* Meta */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "18px", borderBottom: "1px solid #111", paddingBottom: "18px" }}>
                    {[
                      ["Duration",    course.duration],
                      ["Level",       course.level],
                      ["Rating",      `${course.rating} (${course.reviews.toLocaleString()} reviews)`],
                    ].map(([label, val]) => (
                      <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                        <span style={{ color: "#555", fontSize: "12px", fontFamily: "monospace", flexShrink: 0 }}>{label}</span>
                        <span style={{ color: "#ccc", fontSize: "12px", fontWeight: 700, textAlign: "right" }}>{val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <Link href="/contact-us"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                      width: "100%", background: "#dc2626",
                      color: "#fff", fontWeight: 800, fontSize: "14px", letterSpacing: "1px",
                      padding: "14px", borderRadius: "8px", marginTop: "14px",
                      transition: "background 0.2s", textDecoration: "none",
                    }}>
                    Enroll Now <ArrowRightIcon />
                  </Link>

                  <Link href="/contact-us"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      width: "100%", border: "1px solid #222",
                      color: "#666", fontWeight: 600, fontSize: "13px",
                      padding: "12px", borderRadius: "8px", marginTop: "8px",
                      transition: "all 0.2s", textDecoration: "none",
                    }}>
                    Start 7-Day Free Trial
                  </Link>

                  {/* Features */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #111" }}>
                    {[
                      [<ClockIcon />, `${course.duration} program`],
                      [<BookIcon />,  "Lifetime access"],
                      [<CertIcon />,  "Industry certificate"],
                      [<UsersIcon />, "1:1 mentor support"],
                    ].map(([icon, text]) => (
                      <div key={text} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#666", fontSize: "12px" }}>
                        <span style={{ color: "#dc2626" }}>{icon}</span>{text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── RELATED COURSES ── */}
        {related.length > 0 && (
          <section style={{ background: "#060606", borderTop: "1px solid #111", padding: "40px 0" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div style={{ marginBottom: "28px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", color: "#dc2626", fontSize: "10px", fontFamily: "monospace", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "8px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#dc2626" }} />
                  More {course.sectionLabel} Courses
                </span>
                <h2 style={{ color: "#fff", fontSize: "clamp(20px,4vw,26px)", fontWeight: 800 }}>You Might Also Like</h2>
              </div>
              <div className="related-grid">
                {related.map(c => <RelatedCard key={c.id} course={c} />)}
              </div>
              <div style={{ textAlign: "center" }}>
                <Link href="/courses" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  border: "1px solid #dc262650", color: "#dc2626",
                  padding: "12px 28px", borderRadius: "8px", fontSize: "13px", fontWeight: 600,
                  transition: "all 0.2s", textDecoration: "none",
                }}>
                  <ArrowLeftIcon /> Back to All Courses
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}