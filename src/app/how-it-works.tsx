"use client";

import { useState } from "react";

const STEPS = [
  { name: "Discover", blurb: "Find the night that moves you." },
  { name: "Buy", blurb: "Tickets in a couple of taps." },
  { name: "Attend", blurb: "Walk in with your ticket on your phone." },
  { name: "Participate", blurb: "Prompts and missions in the room." },
  { name: "Generate", blurb: "Your reactions build your artwork." },
  { name: "Remember", blurb: "Keep more than the ticket." },
];

function Screen({ step }: { step: number }) {
  switch (step) {
    case 0:
      return (
        <>
          <small className="ps-label">Search</small>
          <b className="ps-title">What are you getting into?</b>
          <span className="ps-chips"><i className="on">Music</i><i>After dark</i></span>
          <span className="ps-card">
            <small>Sat 5 Dec · London</small>
            <b>Afterimage</b>
            <small>£28.00 + £2.80 fee</small>
          </span>
        </>
      );
    case 1:
      return (
        <>
          <small className="ps-label">Checkout</small>
          <b className="ps-title">Afterimage</b>
          <span className="ps-card">
            <small>1 × General admission</small>
            <b>£28.00</b>
            <small>Booking fee £2.80</small>
          </span>
          <span className="ps-row"><small>Total</small><b>£30.80</b></span>
          <span className="ps-btn">Pay</span>
        </>
      );
    case 2:
      return (
        <>
          <small className="ps-label">Your ticket</small>
          <b className="ps-title">Afterimage</b>
          <small className="ps-label">Sat 5 Dec · 19:00</small>
          <svg className="ps-code" viewBox="0 0 100 100" aria-hidden="true">
            <rect width="100" height="100" fill="#f2f2f2" />
            <g fill="none" stroke="#0b0b0b" strokeWidth="4">
              <rect x="12" y="12" width="26" height="26" rx="5" />
              <rect x="62" y="12" width="26" height="26" rx="5" />
              <rect x="12" y="62" width="26" height="26" rx="5" />
              <path d="M62 68h8M78 62v12M62 82h26" />
            </g>
          </svg>
          <small className="ps-label">Show at the door</small>
        </>
      );
    case 3:
      return (
        <>
          <small className="ps-label">In the room</small>
          <b className="ps-title">What&apos;s tonight&apos;s headline?</b>
          <span className="ps-opt">Sera Vale</span>
          <span className="ps-opt on">Onda Index</span>
          <span className="ps-opt">Low Assembly</span>
        </>
      );
    case 4:
      return (
        <>
          <small className="ps-label">Your artwork</small>
          <svg className="ps-art" viewBox="0 0 100 100" aria-hidden="true">
            <g style={{ filter: "blur(5px)" }}>
              <circle cx="35" cy="62" r="24" fill="#e0412b" />
              <circle cx="66" cy="40" r="20" fill="#d94c8a" />
              <circle cx="58" cy="70" r="15" fill="#2a7bd8" />
              <circle cx="40" cy="30" r="9" fill="#d4f542" />
            </g>
          </svg>
        </>
      );
    default:
      return (
        <>
          <small className="ps-label">Memories</small>
          <b className="ps-title">Afterimage</b>
          <small className="ps-label">Sat 5 Dec</small>
          <span className="ps-card">
            <b>You were in the picture.</b>
            <small>Your artwork and moments, kept.</small>
          </span>
        </>
      );
  }
}

export function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <div className="how-grid">
      <ol className="steps">
        {STEPS.map((s, i) => (
          <li key={s.name}>
            <button
              type="button"
              className={i === active ? "step on" : "step"}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
            >
              <span className="step-n">{i + 1}</span>
              <span className="step-name">{s.name}</span>
              {i === active && <span className="step-blurb">{s.blurb}</span>}
            </button>
          </li>
        ))}
      </ol>
      <div className="phone" aria-hidden="true">
        <div className="phone-notch" />
        <div className="phone-screen">
          <Screen step={active} />
        </div>
      </div>
    </div>
  );
}
