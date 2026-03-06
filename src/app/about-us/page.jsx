"use client";
import { useState, useEffect, useRef } from "react";
// import Choose from "../../Homesections/Choose.jsx";

function useCounter(target, duration = 2200, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(ease(progress) * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function StatCard({ value, suffix, label, sub, delay, inView }) {
  const count = useCounter(value, 2200, inView);
  return (
    <div
      style={{
        background: "#0a0a0a",
        border: "1px solid #1a1a1a",
        borderTop: "2px solid #dc2626",
        borderRadius: 2,
        padding: "24px 20px",
        animation: inView ? `fadeUp 0.6s ease ${delay}ms both` : "none",
        transition: "border-color 0.25s, background 0.25s",
      }}
      onMouseEnter={e => { e.currentTarget.style.background = "rgba(220,38,38,0.03)"; e.currentTarget.style.borderColor = "#dc2626"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "#0a0a0a"; e.currentTarget.style.borderColor = "#1a1a1a"; }}
    >
      <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#dc2626", lineHeight: 1, margin: 0 }}>
        {count.toLocaleString()}{suffix}
      </p>
      <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", color: "#fff", letterSpacing: 1, margin: "6px 0 4px" }}>
        {label}
      </p>
      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#444", letterSpacing: 1, lineHeight: 1.7, margin: 0 }}>
        {sub}
      </p>
    </div>
  );
}

const stats = [
  { value: 12400, suffix: "+", label: "Students Trained",    sub: "Across India & abroad",           delay: 0   },
  { value: 98,    suffix: "%", label: "Placement Rate",      sub: "Industry-leading success rate",    delay: 100 },
  { value: 10,    suffix: "+", label: "Years of Excellence", sub: "Established since 2014",           delay: 200 },
  { value: 200,   suffix: "+", label: "Hiring Partners",     sub: "MNCs, startups & govt. agencies",  delay: 300 },
  { value: 50,    suffix: "+", label: "Expert Instructors",  sub: "Certified security professionals", delay: 400 },
  { value: 6,     suffix: "",  label: "Govt. Recognitions",  sub: "Skill India, NSDC & more",         delay: 500 },
];

const timeline = [
  { year: "2014", title: "Foundation",        desc: "nihacs.com established as a cybersecurity training center with a mission to democratize security education across India." },
  { year: "2017", title: "Govt. Recognition", desc: "Awarded Skill India & NSDC certification, becoming one of the first officially recognized ethical hacking institutes in the country." },
  { year: "2019", title: "5,000 Milestone",   desc: "Crossed 5,000 trained professionals. Expanded curriculum to include cloud security, forensics, and AI-driven threat intelligence." },
  { year: "2022", title: "Global Alumni",     desc: "nihacs.com alumni now working across 30+ countries, at companies including Deloitte, IBM, CrowdStrike, and government agencies." },
  { year: "2025", title: "12,400+ & Growing", desc: "Recognized as India's #1 ethical hacking institute. Launched advanced Master's and Bachelor's programs in Cybersecurity." },
];

const W = { maxWidth: 780, margin: "0 auto" };

export default function AboutPage() {
  const [statsRef, statsInView] = useInView();
  const [storyRef, storyInView] = useInView();

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFade {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .red-divider {
          height: 1px; margin: 14px 0 20px;
          background: linear-gradient(90deg, #dc2626 0%, transparent 65%);
        }
        .section-label {
          font-family: 'Space Mono', monospace;
          font-size: 10px; color: #dc2626;
          letter-spacing: 3px; text-transform: uppercase;
          margin-bottom: 8px; display: block;
        }
        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.2rem, 6vw, 4rem);
          color: #fff; letter-spacing: 1px; line-height: 1; margin: 0;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        @media (max-width: 600px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 360px) { .stats-grid { grid-template-columns: 1fr; } }
        .tl-item { display: flex; gap: 14px; position: relative; padding-bottom: 22px; }
        .tl-item:last-child { padding-bottom: 0; }
        .tl-line { position: absolute; left: 34px; top: 32px; bottom: 0; width: 1px; background: linear-gradient(to bottom, #dc2626, #222); }
        .tl-item:last-child .tl-line { display: none; }
        .tl-dot { width: 8px; height: 8px; border-radius: 50%; background: #dc2626; box-shadow: 0 0 7px rgba(220,38,38,0.5); flex-shrink: 0; margin-top: 4px; }
        .tl-year { font-family: 'Bebas Neue', sans-serif; font-size: 1.15rem; color: #dc2626; width: 44px; flex-shrink: 0; line-height: 1; padding-top: 1px; }
        .tl-card { flex: 1; background: #0a0a0a; border: 1px solid #1a1a1a; border-radius: 2px; padding: 12px 16px; transition: border-color 0.2s, background 0.2s; }
        .tl-card:hover { border-color: #dc2626; background: rgba(220,38,38,0.03); }
        .btn-primary {
          font-family: 'Bebas Neue', sans-serif; font-size: 15px; letter-spacing: 2px;
          background: #dc2626; color: #fff; padding: 11px 28px; border-radius: 9999px;
          text-decoration: none; box-shadow: 0 4px 18px rgba(220,38,38,0.4);
          transition: background 0.2s, transform 0.15s; display: inline-block;
        }
        .btn-primary:hover { background: #b91c1c; transform: translateY(-2px); }
        .btn-secondary {
          font-family: 'Bebas Neue', sans-serif; font-size: 15px; letter-spacing: 2px;
          background: transparent; color: #fff; padding: 11px 28px; border-radius: 9999px;
          border: 1px solid #2a2a2a; text-decoration: none;
          transition: border-color 0.2s, color 0.2s; display: inline-block;
        }
        .btn-secondary:hover { border-color: #dc2626; color: #dc2626; }
      `}</style>

      {/* ══ HERO ══ */}
      <section style={{ padding: "100px clamp(1rem,5vw,4rem) 64px", position: "relative", overflow: "hidden", borderBottom: "1px solid #111" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(220,38,38,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.025) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "10%", right: "5%", width: 360, height: 360, background: "radial-gradient(circle, rgba(220,38,38,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div style={{ ...W, display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ animation: "heroFade 0.5s ease 0s both" }}>nihacs.com &nbsp;/&nbsp; about us</span>

          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3.5rem, 10vw, 7rem)",
            color: "#fff", lineHeight: 0.92, letterSpacing: 5,
            margin: "0 0 22px",
            animation: "heroFade 0.6s ease 0.1s both",
          }}>
            Shaping India's<br />
            <span style={{ color: "#dc2626" }}>Cyber</span> <span> </span>
            Defenders
          </h1>

          <p style={{
            fontFamily: "'Space Mono', monospace", color: "#555",
            fontSize: "clamp(0.7rem, 1.3vw, 0.82rem)", lineHeight: 2,
            maxWidth: 560, margin: "0 0 22px",
            animation: "heroFade 0.6s ease 0.2s both",
          }}>
            India's most trusted cybersecurity training institution — government recognized, industry approved, and committed to producing world-class ethical hackers and security professionals since 2014.
          </p>

          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.2)",
            borderRadius: 9999, padding: "8px 16px", marginBottom: 26, alignSelf: "flex-start",
            animation: "heroFade 0.6s ease 0.3s both",
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#dc2626" }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "#dc2626", letterSpacing: 2, textTransform: "uppercase" }}>
              Skill India &amp; NSDC Recognized Institute
            </span>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", animation: "heroFade 0.6s ease 0.4s both" }}>
            <a href="/courses" className="btn-primary">Our Courses</a>
            <a href="/contact" className="btn-secondary">Contact Us</a>
          </div>

          {/* Mission card below */}
          <div style={{
            marginTop: 40,
            background: "#0a0a0a", border: "1px solid #1a1a1a",
            borderTop: "3px solid #dc2626", borderRadius: 2, padding: "26px 24px",
            animation: "heroFade 0.7s ease 0.5s both", position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: 160, height: 160, background: "radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
            <span className="section-label">Our Mission</span>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#fff", fontSize: "clamp(1.3rem, 3vw, 1.7rem)", letterSpacing: 1, margin: "0 0 10px", lineHeight: 1.1 }}>
              Making Cybersecurity Education Accessible to Every Indian
            </h3>
            <div className="red-divider" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px 24px" }}>
              {[
                "Practical, hands-on curriculum designed with industry experts",
                "Government-recognized credentials accepted nationwide",
                "Placement support with 200+ hiring partners",
                "Lifetime alumni community and content access",
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#dc2626", flexShrink: 0, marginTop: 5 }} />
                  <p style={{ fontFamily: "'Space Mono', monospace", color: "#555", fontSize: 11, lineHeight: 1.8, margin: 0 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section ref={statsRef} style={{ padding: "64px clamp(1rem,5vw,4rem)", background: "#050505", borderBottom: "1px solid #111" }}>
        <div style={W}>
          <span className="section-label">By the numbers</span>
          <h2 className="section-title">Our Impact <span style={{ color: "#dc2626" }}>In Numbers</span></h2>
          <p style={{ fontFamily: "'Space Mono', monospace", color: "#444", fontSize: 11, lineHeight: 1.8, margin: "8px 0 0" }}>
            Over a decade of measurable results — real students, real careers, real impact.
          </p>
          <div className="red-divider" />
          <div className="stats-grid">
            {stats.map((s, i) => <StatCard key={i} {...s} inView={statsInView} />)}
          </div>
        </div>
      </section>

      {/* ══ OUR STORY ══ */}
      <section ref={storyRef} style={{ padding: "64px clamp(1rem,5vw,4rem)", borderBottom: "1px solid #111" }}>
        <div style={W}>
          <span className="section-label">Our Journey</span>
          <h2 className="section-title">A Decade of <span style={{ color: "#dc2626" }}>Excellence</span></h2>
          <div className="red-divider" />

          <div style={{ animation: storyInView ? "fadeUp 0.7s ease 0s both" : "none" }}>
            <p style={{ fontFamily: "'Space Mono', monospace", color: "#555", fontSize: 12, lineHeight: 2, marginBottom: 14 }}>
              nihacs.com was founded in 2014 with a singular vision — to bridge the massive gap between demand for cybersecurity professionals and quality education in India.
            </p>
            <p style={{ fontFamily: "'Space Mono', monospace", color: "#555", fontSize: 12, lineHeight: 2, marginBottom: 14 }}>
              Our commitment to practical, industry-aligned training earned us recognition from Skill India and NSDC — making us one of the most credible cybersecurity institutes in the country.
            </p>
            <p style={{ fontFamily: "'Space Mono', monospace", color: "#555", fontSize: 12, lineHeight: 2, marginBottom: 24 }}>
              Today, our alumni are securing networks at Fortune 500 companies, government agencies, and top MNCs across 30+ countries.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
              {["Skill India Certified", "NSDC Approved", "ISO Recognized", "Industry Aligned"].map(b => (
                <span key={b} style={{
                  fontFamily: "'Space Mono', monospace", fontSize: 9, color: "#dc2626",
                  letterSpacing: 1.5, background: "rgba(220,38,38,0.08)",
                  border: "1px solid rgba(220,38,38,0.2)", borderRadius: 2,
                  padding: "4px 10px", textTransform: "uppercase",
                }}>{b}</span>
              ))}
            </div>

            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#fff", fontSize: "1.2rem", letterSpacing: 1, margin: "0 0 18px" }}>Key Milestones</h3>
            {timeline.map((item, i) => (
              <div key={i} className="tl-item" style={{ animation: storyInView ? `fadeUp 0.6s ease ${i * 80}ms both` : "none" }}>
                <div className="tl-line" />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, flexShrink: 0, width: 44 }}>
                  <span className="tl-year">{item.year}</span>
                  <div className="tl-dot" />
                </div>
                <div className="tl-card">
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#fff", fontSize: "0.92rem", letterSpacing: 1, margin: "0 0 4px" }}>{item.title}</p>
                  <p style={{ fontFamily: "'Space Mono', monospace", color: "#444", fontSize: 10, margin: 0, lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Choose /> */}

      {/* ══ CTA ══ */}
      <section style={{ padding: "64px clamp(1rem,5vw,4rem)" }}>
        <div style={W}>
          <div style={{
            background: "#0a0a0a", border: "1px solid #1a1a1a",
            borderTop: "3px solid #dc2626", borderRadius: 2,
            padding: "clamp(1.5rem,4vw,2.5rem)", position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: "linear-gradient(to bottom, #dc2626, transparent)" }} />
            <div style={{ position: "absolute", right: 0, bottom: 0, width: 200, height: 200, background: "radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <span className="section-label">Begin Your Journey</span>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#fff", fontSize: "clamp(1.6rem,4vw,2.6rem)", letterSpacing: 1, margin: "0 0 8px", lineHeight: 1.1 }}>
                Your Cybersecurity Career Starts Here
              </h2>
              <p style={{ fontFamily: "'Space Mono', monospace", color: "#444", fontSize: 11, margin: "0 0 24px", lineHeight: 1.8 }}>
                Join 12,400+ professionals who chose nihacs.com to build their career in cybersecurity.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="/courses" className="btn-primary">Enroll Now</a>
                <a href="/contact-us" className="btn-secondary">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}