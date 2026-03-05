"use client";
import { useState, useEffect, useRef } from "react";
import Carouselcourses from "../Homesections/carouselcourses";
import { FormModal } from "../Homesections/form/page";

/* ────────── CONFIG ────────── */
const GRAY_WORDS  = ["SECURE",  "PROTECT", "DEFEND"];
const WHITE_WORDS = ["STUFF",   "DATA",    "SYSTEMS"];
const STAGGER_MS  = 60;   // delay between each letter starting its flip
const FLIP_MS     = 120;  // duration of each half of the flip (squish / unsquish)
const PAUSE_MS    = 2800;

/* ─── Single letter flip ───────────────────────────────────────────────────
   Uses scaleY (top-to-bottom fold) so the character never appears upside-down.
   Phase: idle → squish (scaleY 1→0) → swap char → unsquish (scaleY 0→1) → idle
*/
function Letter({ char, nextChar, shouldFlip, delay }) {
  const [scaleY, setScaleY]     = useState(1);
  const [displayed, setDisplayed] = useState(char);
  const phaseRef                  = useRef("idle"); // "idle" | "squishing" | "unsquishing"

  useEffect(() => {
    if (!shouldFlip) {
      setDisplayed(char);
      setScaleY(1);
      phaseRef.current = "idle";
      return;
    }

    // Reset then kick off squish after staggered delay
    phaseRef.current = "idle";
    setDisplayed(char);
    setScaleY(1);

    const t = setTimeout(() => {
      phaseRef.current = "squishing";
      setScaleY(0);
    }, delay);

    return () => clearTimeout(t);
  }, [shouldFlip, char, nextChar, delay]);

  const handleTransitionEnd = () => {
    if (phaseRef.current === "squishing") {
      // Mid-flip: swap to new character
      phaseRef.current = "unsquishing";
      setDisplayed(nextChar ?? " ");
      // rAF double-pump ensures browser registers the scaleY:0 state before reversing
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setScaleY(1))
      );
    } else if (phaseRef.current === "unsquishing") {
      phaseRef.current = "idle";
    }
  };

  return (
    <span
      style={{
        display:         "inline-block",
        transform:       `scaleY(${scaleY})`,
        transition:      `transform ${FLIP_MS}ms cubic-bezier(0.4, 0, 0.6, 1)`,
        transformOrigin: "50% 50%",
        whiteSpace:      "pre",
        minWidth:        displayed === " " ? "0.3em" : undefined,
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      {displayed || "\u00A0"}
    </span>
  );
}

/* ─── A full word row ──────────────────────────────────────────────────────
   Manages an array of <Letter> slots, padding shorter words with spaces
   so letters always have a stable slot to animate in/out of.
*/
function FlipRow({ word, color, style = {} }) {
  const [fromWord, setFromWord] = useState(word);
  const [toWord,   setToWord]   = useState(word);
  const [flipping, setFlipping] = useState(false);
  const pendingRef               = useRef(null);

  useEffect(() => {
    if (word === toWord) return;

    // If already flipping, queue the next word
    if (flipping) {
      pendingRef.current = word;
      return;
    }

    triggerFlip(toWord, word);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word]);

  function triggerFlip(from, to) {
    setFromWord(from);
    setToWord(to);
    setFlipping(true);

    const maxLen      = Math.max(from.length, to.length);
    const totalMs     = maxLen * STAGGER_MS + FLIP_MS * 2 + 40; // small buffer

    setTimeout(() => {
      setFromWord(to);
      setFlipping(false);

      // Process any queued word
      if (pendingRef.current && pendingRef.current !== to) {
        const next = pendingRef.current;
        pendingRef.current = null;
        triggerFlip(to, next);
      }
    }, totalMs);
  }

  const maxLen      = Math.max(fromWord.length, toWord.length);
  const paddedFrom  = fromWord.padEnd(maxLen, " ");
  const paddedTo    = toWord.padEnd(maxLen, " ");

  return (
    <div style={{ display: "inline-block", color, ...style }}>
      {Array.from({ length: maxLen }, (_, i) => (
        <Letter
          key={i}
          char={paddedFrom[i]}
          nextChar={paddedTo[i]}
          shouldFlip={flipping && paddedFrom[i] !== paddedTo[i]}
          delay={i * STAGGER_MS}
        />
      ))}
    </div>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────────────── */
export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      setIdx(i => (i + 1) % GRAY_WORDS.length);
    }, PAUSE_MS);
    return () => clearTimeout(t);
  }, [idx]);

  const curGray  = GRAY_WORDS[idx];
  const curWhite = WHITE_WORDS[idx];

  const bigType = {
    fontSize:      "clamp(2.8rem, 9vw, 9.5rem)",
    fontWeight:    900,
    letterSpacing: "clamp(-0.04em, -0.055em, -0.03em)",
    lineHeight:    0.92,
    margin:        0,
    fontFamily:    '"Arial Black", "Helvetica Neue", Arial, sans-serif',
  };

  return (
    <section
      style={{
        background:     "black",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        padding:        "clamp(5.5rem, 6vw, 4rem) clamp(1rem, 4vw, 2rem)",
        position:       "relative",
        overflow:       "hidden",
        fontFamily:     '"Arial Black", "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* grain overlay */}
      <div
        style={{
          position:        "absolute",
          inset:           0,
          opacity:         0.028,
          pointerEvents:   "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize:  "200px 200px",
        }}
      />

      <div
        style={{
          position:  "relative",
          zIndex:    1,
          textAlign: "center",
          width:     "100%",
          maxWidth:  "clamp(320px, 92%, 1100px)",
        }}
      >
        {/* LET'S */}
        <div
          style={{
            ...bigType,
            color:         "rgba(255,255,255,0.13)",
            fontSize:      "clamp(3.2rem, 7vw, 7rem)",
            paddingBottom: "clamp(0.04em, 0.8vw, 0.12em)",
          }}
        >
          LET&apos;S
        </div>

        {/* GRAY flipping word */}
        <div
          style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            gap:            "clamp(0.15em, 0.7vw, 0.28em)",
            flexWrap:       "wrap",
            minHeight:      "1.15em",
          }}
        >
          <FlipRow
            word={curGray}
            color="rgba(150,156,168,0.88)"
            style={bigType}
          />
        </div>

        {/* WHITE flipping word */}
        <div style={{ minHeight: "1.15em", paddingTop: "clamp(0.04em, 0.6vw, 0.1em)" }}>
          <FlipRow
            word={curWhite}
            color="#ffffff"
            style={bigType}
          />
        </div>

        {/* description */}
        <p
          style={{
            marginTop:   "clamp(1rem, 3.5vw, 2rem)",
            color:       "rgba(255,255,255,0.45)",
            fontSize:    "clamp(0.9rem, 2.2vw, 1.25rem)",
            lineHeight:  1.65,
            maxWidth:    "clamp(300px, 88%, 540px)",
            marginLeft:  "auto",
            marginRight: "auto",
            fontFamily:  '"Helvetica Neue", Arial, sans-serif',
            fontWeight:  400,
          }}
        >
          Master the Art of Defense. Empowering the next generation of Cybersecurity and Development experts.
        </p>

        {/* Course tags */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap:                 "12px",
            marginTop:           "1.5rem",
            maxWidth:            "750px",
            marginInline:        "auto",
          }}
        >
          <Carouselcourses />
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <FormModal label="Start Hacking" />

          <a
            href="/courses"
            style={{
              display:        "inline-block",
              marginTop:      "clamp(1.2rem, 4vw, 2rem)",
              background:     "#ffffff",
              color:          "black",
              fontWeight:     800,
              fontSize:       "clamp(0.9rem, 2.2vw, 1.1rem)",
              padding:        "clamp(0.75rem, 2vw, 1rem) clamp(1.6rem, 5vw, 2.4rem)",
              borderRadius:   9999,
              textDecoration: "none",
              fontFamily:     '"Helvetica Neue", Arial, sans-serif',
              transition:     "transform .25s ease, box-shadow .25s ease",
              boxShadow:      "0 3px 16px rgba(255,30,0,0.6)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform  = "scale(1.07)";
              e.currentTarget.style.boxShadow  = "0 6px 28px rgba(255,30,0,0.75)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform  = "scale(1)";
              e.currentTarget.style.boxShadow  = "0 3px 16px rgba(255,30,0,0.6)";
            }}
          >
            Explore Courses
          </a>
        </div>
      </div>
    </section>
  );
}