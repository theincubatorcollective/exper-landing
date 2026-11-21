"use client";

import { useEffect, useState } from "react";

const TITLES = [
  "An experience is more than a ticket.",
  "An experience is more than lights, sound and faces.",
];

const SUBS = [
  "There’s going. And there’s being part of everything that happens in between",
  "There’s going. Then there’s being there.",
  "EXPER lets you get more out of experiences while you are there.",
];

// The loop, in order. `t` and `s` index into TITLES and SUBS. A line only fades
// when its own index changes, so the title stays put while the subtitle swaps.
const STATES = [
  { t: 0, s: 0 },
  { t: 0, s: 1 },
  { t: 1, s: 2 },
];

const INTERVAL_MS = 4500;

export function RotatingHeadline() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setStep((i) => (i + 1) % STATES.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const { t, s } = STATES[step];

  // Titles share one grid cell, as do subtitles, so the hero keeps the height of
  // the longest line and nothing below it jumps when the copy changes.
  return (
    <div className="rotator">
      <h1 className="rot-stack">
        {TITLES.map((line, i) => (
          <span key={line} className={i === t ? "hero-h on" : "hero-h"} aria-hidden={i !== t}>
            {line}
          </span>
        ))}
      </h1>
      <div className="rot-stack">
        {SUBS.map((line, i) => (
          <p key={line} className={i === s ? "hero-sub on" : "hero-sub"} aria-hidden={i !== s}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
