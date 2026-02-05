"use client";
import { useState, useEffect, useCallback, useRef } from "react";

/* ────────── CONFIG ────────── */
const GRAY_WORDS  = ["SECURE",  "PROTECT", "DEFEND"];
const WHITE_WORDS = ["STUFF",   "DATA",    "SYSTEMS"];
const STAGGER   = 68;
const SQUISH_MS = 130;
const PAUSE_MS  = 2600;



function LetterSlot({ current, next, phase, onExitEnd, onEnterEnd }) {
  let scaleVal, trans;
  switch (phase) {
    case "exit":         scaleVal = 0; trans = true;  break;
    case "enter_start":  scaleVal = 0; trans = false; break;
    case "enter":        scaleVal = 1; trans = true;  break;
    default:             scaleVal = 1; trans = false; break;
  }

  const char = (phase === "enter_start" || phase === "enter") ? next : current;

  return (
    <span
      style={{
        display:         "inline-block",
        transform:       `scaleX(${scaleVal})`,
        transition:      trans ? `transform ${SQUISH_MS}ms cubic-bezier(0.4,0,0.2,1)` : "none",
        transformOrigin: "center",
        willChange:      "transform",
      }}
      onTransitionEnd={() => {
        if (phase === "exit")  onExitEnd();
        if (phase === "enter") onEnterEnd();
      }}
    >
      {char || "\u00A0"}
    </span>
  );
}

/* ─── row ─── */
function FlipRow({ word, nextWord, flipKey, onDone }) {
  const maxLen = nextWord
    ? Math.max(word.length, nextWord.length)
    : word.length;

  const [slots, setSlots] = useState(() =>
    Array.from({ length: maxLen }, (_, i) => ({ char: word[i] || "", phase: "idle" }))
  );
  const doneCount = useRef(0);
  const timers    = useRef([]);
  const rafs      = useRef([]);

  /* reset on base word change */
  useEffect(() => {
    setSlots(Array.from({ length: word.length }, (_, i) => ({ char: word[i] || "", phase: "idle" })));
  }, [word]);

  /* kick off exit animations */
  useEffect(() => {
    if (!nextWord || flipKey === 0) return;
    doneCount.current = 0;
    timers.current.forEach(clearTimeout);
    timers.current = [];

    const len = Math.max(word.length, nextWord.length);

    setSlots(prev => {
      const n = [...prev];
      while (n.length < len) n.push({ char: "", phase: "idle" });
      return n;
    });

    for (let i = 0; i < len; i++) {
      timers.current.push(
        setTimeout(() => {
          setSlots(prev => {
            const n = [...prev];
            n[i] = { char: n[i]?.char || "", phase: "exit" };
            return n;
          });
        }, i * STAGGER)
      );
    }
    return () => {
      timers.current.forEach(clearTimeout);
      rafs.current.forEach(cancelAnimationFrame);
    };
  }, [flipKey]);

  const onExitEnd = (i) => {
    setSlots(prev => {
      const n = [...prev];
      n[i] = { char: nextWord[i] || "", phase: "enter_start" };
      return n;
    });
    rafs.current.push(
      requestAnimationFrame(() => {
        rafs.current.push(
          requestAnimationFrame(() => {
            setSlots(prev => {
              const n = [...prev];
              if (n[i]?.phase === "enter_start") {
                n[i] = { ...n[i], phase: "enter" };
              }
              return n;
            });
          })
        );
      })
    );
  };

  const onEnterEnd = (i) => {
    setSlots(prev => {
      const n = [...prev];
      n[i] = { ...n[i], phase: "idle" };
      return n;
    });
    doneCount.current += 1;
    if (doneCount.current >= Math.max(word.length, nextWord ? nextWord.length : 0)) {
      onDone();
    }
  };

  return (
    <>
      {slots.map((slot, i) => (
        <LetterSlot
          key={i}
          current={slot.char}
          next={nextWord ? (nextWord[i] || "") : ""}
          phase={slot.phase}
          onExitEnd={() => onExitEnd(i)}
          onEnterEnd={() => onEnterEnd(i)}
        />
      ))}
    </>
  );
}

/* ────────── HERO ────────── */
export default function Hero() {
  const [idx, setIdx]               = useState(0);
  const [nextIdx, setNextIdx]       = useState(null);
  const [grayFlipKey,  setGrayFlipKey]  = useState(0);
  const [whiteFlipKey, setWhiteFlipKey] = useState(0);

  const grayDone  = useRef(false);
  const whiteDone = useRef(false);
  const pauseTimer = useRef(null);

  /* schedule next flip after a pause */
  const scheduleNext = useCallback(() => {
    pauseTimer.current = setTimeout(() => {
      const n = (idx + 1) % GRAY_WORDS.length;
      setNextIdx(n);
      grayDone.current  = false;
      whiteDone.current = false;
      setGrayFlipKey(k  => k + 1);
      setWhiteFlipKey(k => k + 1);
    }, PAUSE_MS);
  }, [idx]);

  useEffect(() => {
    scheduleNext();
    return () => clearTimeout(pauseTimer.current);
  }, [idx, scheduleNext]);

  /* gray row done */
  const onGrayDone = () => {
    setIdx(nextIdx);          // commit new index
    grayDone.current = true;
    if (whiteDone.current) scheduleNext();
  };

  /* white row done */
  const onWhiteDone = () => {
    whiteDone.current = true;
    if (grayDone.current) scheduleNext();
  };

  /* derived */
  const curGray  = GRAY_WORDS[idx];
  const curWhite = WHITE_WORDS[idx];
  const nxtGray  = nextIdx !== null ? GRAY_WORDS[nextIdx]  : null;
  const nxtWhite = nextIdx !== null ? WHITE_WORDS[nextIdx] : null;

  /* shared heading style */
  const bigType = {
    fontSize:      "clamp(3rem, 8.5vw, 10rem)",
    fontWeight:    900,
    letterSpacing: "-0.03em",
    lineHeight:    1,
    margin:        0,
  };

  return (
    <section style={{
      minHeight: "100vh",
      background: "black",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "6rem 1.5rem",
      position: "relative", overflow: "hidden",
      fontFamily: '"Arial Black", "Helvetica Neue", Arial, sans-serif',
    }}>

      {/* grain */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.028, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px",
      }}/>

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", width: "100%", maxWidth: 950 }}>

        {/* LET'S ── static ghost */}
        <div style={{ ...bigType, color: "rgba(255,255,255,0.13)", paddingBottom: "0.05em" }}>
          LET'S
        </div>

        {/* ── GRAY flipping word + dashes ── */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "0.22em",
        }}>
          <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "clamp(1.5rem,4vw,4.5rem)", letterSpacing: "-0.1em", lineHeight: 1 }}>——</span>

          <div style={{ ...bigType, color: "rgba(150,156,168,0.88)", minHeight: "1em" }}>
            <FlipRow word={curGray} nextWord={nxtGray} flipKey={grayFlipKey} onDone={onGrayDone} />
          </div>

          <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "clamp(1.5rem,4vw,4.5rem)", letterSpacing: "-0.1em", lineHeight: 1 }}>——</span>
        </div>

        {/* ── WHITE flipping word ── */}
        <div style={{ ...bigType, color: "#ffffff", paddingTop: "0.05em", minHeight: "1em" }}>
          <FlipRow word={curWhite} nextWord={nxtWhite} flipKey={whiteFlipKey} onDone={onWhiteDone} />
        </div>

        {/* description */}
        <p style={{
          marginTop: "2.4rem",
          color: "rgba(255,255,255,0.42)",
          fontSize: "clamp(0.95rem, 1.9vw, 1.2rem)",
          lineHeight: 1.7,
          maxWidth: 480, marginLeft: "auto", marginRight: "auto",
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
          fontWeight: 400,
        }}>
          <strong style={{ color: "#fff", fontWeight: 600 }}>Nihacs</strong>, a{" "}
          <span style={{ color: "#ff1e00", fontWeight: 600 }}>Cybersecurity</span> and{" "}
          <span style={{ color: "#ff1e00", fontWeight: 600 }}>Programming</span> platform
          with expertise in{" "}
          <span style={{ color: "#ff1e00", fontWeight: 600 }}>Ethical Hacking</span> and{" "}
          <span style={{ color: "#ff1e00", fontWeight: 600 }}>Development</span>.
        </p>

        {/* CTA */}
        <a
          href="#courses"
          style={{
            display: "inline-block", marginTop: "1.8rem",
            background: "#ff1e00", color: "white", fontWeight: 800,
            fontSize: "clamp(0.88rem, 1.7vw, 1rem)",
            padding: "0.9rem 2.2rem", borderRadius: 9999, textDecoration: "none",
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            transition: "transform .2s, box-shadow .2s",
            boxShadow: "0 2px 14px rgb(255, 30, 0)",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform="scale(1.06)"; e.currentTarget.style.boxShadow="0 4px 22px rgb(255, 30, 0)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform="scale(1)";   e.currentTarget.style.boxShadow="0 2px 14px rgb(255, 30, 0)"; }}
        >
          Let's work together!
        </a>
      </div>
    </section>
  );
}