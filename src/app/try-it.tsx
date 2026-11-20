"use client";

import { useState } from "react";

type Kind = "fire" | "love" | "spark" | "wave";
type Blob = { id: number; kind: Kind; x: number; y: number; r: number };

const REACTIONS: { kind: Kind; label: string; icon: string }[] = [
  { kind: "fire", label: "Fire", icon: "🔥" },
  { kind: "love", label: "Love", icon: "💗" },
  { kind: "spark", label: "Spark", icon: "✨" },
  { kind: "wave", label: "Wave", icon: "🌊" },
];

const COLOUR: Record<Kind, string> = {
  fire: "#e0562b",
  love: "#d94c8a",
  spark: "#d4f542",
  wave: "#2a7bd8",
};

const MAX_BLOBS = 80;
let nextId = 0;

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function makeBlob(kind: Kind): Blob {
  switch (kind) {
    case "fire":
      return { id: nextId++, kind, x: rand(15, 85), y: rand(50, 90), r: rand(9, 17) };
    case "love":
      return { id: nextId++, kind, x: rand(15, 85), y: rand(20, 80), r: rand(8, 14) };
    case "spark":
      return { id: nextId++, kind, x: rand(8, 92), y: rand(8, 92), r: rand(3, 6) };
    default:
      return { id: nextId++, kind, x: rand(10, 90), y: rand(30, 85), r: rand(10, 18) };
  }
}

export function TryIt() {
  const [blobs, setBlobs] = useState<Blob[]>([]);

  const add = (kind: Kind) => setBlobs((b) => [...b, makeBlob(kind)].slice(-MAX_BLOBS));
  const count = blobs.length;

  return (
    <div className="try-grid">
      <div className="try-copy">
        <span className="tag">Try it</span>
        <h2 className="h-lg">Tap. Watch your night take shape.</h2>
        <p className="muted">At a real event, your reactions build your artwork. Here&apos;s a taste.</p>
        <div className="reactions" role="group" aria-label="Reactions">
          {REACTIONS.map((r) => (
            <button key={r.kind} type="button" className="reaction" onClick={() => add(r.kind)}>
              <span aria-hidden="true">{r.icon}</span> {r.label}
            </button>
          ))}
        </div>
        <p className="tiny muted" aria-live="polite">
          {count === 0 ? "No reactions yet." : `${count} reaction${count === 1 ? "" : "s"}`}
        </p>
        <button type="button" className="link-btn" onClick={() => setBlobs([])} disabled={count === 0}>
          Start again
        </button>
      </div>
      <div className="canvas" role="img" aria-label="Artwork built from your reactions">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <g style={{ filter: "blur(4px)", mixBlendMode: "screen" }}>
            {blobs.map((b) =>
              b.kind === "wave" ? (
                <ellipse key={b.id} cx={b.x} cy={b.y} rx={b.r * 1.6} ry={b.r * 0.6} fill={COLOUR[b.kind]} opacity=".75" />
              ) : (
                <circle key={b.id} cx={b.x} cy={b.y} r={b.r} fill={COLOUR[b.kind]} opacity=".75" />
              ),
            )}
          </g>
        </svg>
      </div>
    </div>
  );
}
