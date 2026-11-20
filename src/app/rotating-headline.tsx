"use client";

import { useEffect, useState } from "react";

const PAIRS = [
  {
    head: "An experience is more than a ticket.",
    sub: "There’s going. And there’s being part of everything that happens in between.",
  },
  {
    head: "An experience is more than lights, sound and faces.",
    sub: "EXPER lets you get more out of experiences while you are there.",
  },
];

const INTERVAL_MS = 5000;

export function RotatingHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % PAIRS.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  // Every pair is stacked in one grid cell so the hero keeps the height of the
  // tallest pair and nothing below it jumps when the copy changes.
  return (
    <h1 className="rotator">
      {PAIRS.map((p, i) => (
        <span key={p.head} className={i === index ? "rot-pair on" : "rot-pair"} aria-hidden={i !== index}>
          <span className="hero-h">{p.head}</span>
          <span className="hero-sub">{p.sub}</span>
        </span>
      ))}
    </h1>
  );
}
