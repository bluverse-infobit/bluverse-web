import React, { useEffect, useState } from "react";

const WORDS = [
  "Secure Digital Excellence",
  "Cyber Resilience Delivered",
  "Trusted UK Market Experts",
  "Smart AI Protection",
  "Global SaaS Enablement",
];

export function TypewriterHeading({
  prefix = "",
  suffix = "",
  words = WORDS,
  loop = true,
  speed = 55,
  pause = 1000,
  className = "",
}) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const longest = React.useMemo(
    () => words.reduce((a, b) => (a.length > b.length ? a : b), ""),
    [words]
  );

  useEffect(() => {
    let timer;
    const current = words[wordIndex];

    if (!deleting && letterIndex < current.length) {
      timer = setTimeout(() => setLetterIndex((l) => l + 1), speed);
      setDisplayed(current.slice(0, letterIndex + 1));
    } else if (!deleting && letterIndex === current.length) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && letterIndex > 0) {
      timer = setTimeout(() => setLetterIndex((l) => l - 1), speed / 2);
      setDisplayed(current.slice(0, letterIndex - 1));
    } else if (deleting && letterIndex === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timer);
  }, [letterIndex, deleting, wordIndex, words, speed, pause]);

  return (
    <h1
      className={`font-bold leading-tight relative min-h-[4.5rem] sm:min-h-[6.5rem] ${className}`}
      aria-live="polite"
      aria-atomic="true"
    >
      {prefix && <span className="gradient-text">{prefix}</span>}
      {prefix && <br />}
      {/* Reserve space using the longest phrase + "_" */}
      <span
        aria-hidden
        className="invisible select-none pointer-events-none"
        style={{ display: "inline-block", whiteSpace: "pre" }}
      >
        {longest + "_"}
      </span>
      {/* The actual typewriter phrase */}
      <span className="gradient-text absolute left-0 top-0 w-full">
        {displayed || "\u00A0"}
        <span
          className="text-accent"
          style={{ animation: "blink 1s steps(2, start) infinite" }}
        >
          _
        </span>
      </span>
      {suffix && (
        <>
          <br />
          <span className="text-accent">{suffix}</span>
        </>
      )}

      {/* Add blink animation if not already present in your CSS */}
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </h1>
  );
}
