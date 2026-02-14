"use client";

import { useState, useRef, useCallback, useEffect } from "react";

export default function Home() {
  const [hypeActive, setHypeActive] = useState(false);
  const [spotlightColor, setSpotlightColor] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const colors = [
    { r: 255, g: 230, b: 0 }, // yellow
    { r: 255, g: 100, b: 200 }, // pink
    { r: 100, g: 200, b: 255 }, // cyan
    { r: 180, g: 100, b: 255 }, // purple
    { r: 100, g: 255, b: 150 }, // green
    { r: 255, g: 150, b: 50 }, // orange
  ];

  const playHypeSound = useCallback(() => {
    const ctx = new AudioContext();

    // Quick ascending "hype" tone burst
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "square";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.08, now + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.15);
      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.15);
    });

    // Crowd cheer noise burst
    const bufferSize = ctx.sampleRate * 0.6;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 1.5);
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "bandpass";
    noiseFilter.frequency.value = 2000;
    noiseFilter.Q.value = 0.5;
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.12, now + 0.1);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start(now + 0.1);
  }, []);

  const handleHypeClick = useCallback(() => {
    playHypeSound();
    setHypeActive(true);
    setSpotlightColor(0);

    // Clear any existing timers
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Cycle through colors
    let colorIdx = 0;
    intervalRef.current = setInterval(() => {
      colorIdx = (colorIdx + 1) % colors.length;
      setSpotlightColor(colorIdx);
    }, 200);

    // Stop after 2.5 seconds
    timeoutRef.current = setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setHypeActive(false);
      setSpotlightColor(0);
    }, 2500);
  }, [playHypeSound, colors.length]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const c = colors[spotlightColor];
  const spotlightBg = hypeActive
    ? `radial-gradient(ellipse 60% 80% at 50% 20%, rgba(${c.r}, ${c.g}, ${c.b}, 0.55) 0%, rgba(${c.r}, ${c.g}, ${c.b}, 0.3) 25%, rgba(${c.r}, ${c.g}, ${c.b}, 0.1) 55%, transparent 80%)`
    : "radial-gradient(ellipse 60% 80% at 50% 20%, rgba(255, 230, 0, 0.45) 0%, rgba(255, 230, 0, 0.25) 25%, rgba(255, 230, 0, 0.08) 55%, transparent 80%)";

  return (
    <main
      className="min-h-screen w-screen overflow-x-hidden flex flex-col text-black font-orbit"
      style={{ backgroundColor: "#FDFFF5" }}
    >
      <style>{`
        @keyframes lineGlow {
          0%, 100% {
            background-color: #BFFF00;
            box-shadow: 0 0 8px rgba(191, 255, 0, 0.6);
          }
          50% {
            background-color: #9FE800;
            box-shadow: 0 0 12px rgba(159, 232, 0, 0.8);
          }
        }
        .animate-line-glow {
          animation: lineGlow 2s ease-in-out infinite;
        }
        @keyframes spotlightPulse {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 1; }
          50% { transform: translateX(-50%) scale(1.15); opacity: 0.85; }
        }
        .spotlight-animate {
          animation: spotlightPulse 0.4s ease-in-out infinite;
        }
        .hype-text {
          cursor: pointer;
          transition: all 0.15s ease;
          font-weight: inherit;
        }
        .hype-text:hover {
          color: #BFFF00;
          text-shadow: 0 0 8px rgba(191, 255, 0, 0.6);
        }
        .hype-text:active {
          transform: scale(1.1);
        }
      `}</style>
      {/* Header */}
      <header className="pt-6 pl-6 md:pt-6 md:pl-8 flex-shrink-0">
        <h1 className="text-3xl md:text-5xl font-normal tracking-wider">
          prova
        </h1>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-between px-6 md:px-8 gap-6 md:gap-8 mt-6 md:mt-0">
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight mb-4 md:mb-6">
            Accountability that actually feels{" "}
            <span className="relative inline-block">
              <span className="relative z-10">good</span>
              <span className="absolute bottom-0.5 sm:bottom-1 left-0 right-0 h-[3px] sm:h-1 animate-line-glow -z-0 rounded-full"></span>
            </span>
          </h2>

          <button className="border-2 border-black px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base font-bold hover:bg-black hover:text-white transition-colors duration-200 w-fit">
            Download the app
          </button>

          <div className="mt-4 md:mt-8 space-y-1 md:space-y-2 text-xs md:text-sm font-light">
            <p>Set goals, Add friends.</p>
            <p>
              Post proof, Get{" "}
              <span className="hype-text" onClick={handleHypeClick}>
                hype
              </span>
              , Keep going.
            </p>
          </div>
        </div>

        {/* Stickmen Figures */}
        <div className="flex-1 flex justify-center items-end gap-1 sm:gap-2 h-full pb-4">
          <img
            src="/stickman-1.svg"
            alt="stickman celebrating"
            className="h-28 sm:h-36 md:h-48"
          />
          <img
            src="/stickman-2.svg"
            alt="stickman excited"
            className="h-28 sm:h-36 md:h-48"
          />
          <div className="relative flex items-end">
            {/* Spotlight glow behind stickman-3 */}
            <div
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none w-[120px] h-[180px] sm:w-[150px] sm:h-[220px] md:w-[180px] md:h-[260px] transition-all duration-200 ${hypeActive ? "spotlight-animate" : ""}`}
              style={{
                background: spotlightBg,
                clipPath: "polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)",
              }}
            />
            <img
              src="/stickman-3.svg"
              alt="stickman cheering"
              className="h-28 sm:h-36 md:h-48 relative z-10"
            />
          </div>
          <img
            src="/stickman-4.svg"
            alt="stickman dancing"
            className="h-28 sm:h-36 md:h-48"
          />
        </div>
      </section>
    </main>
  );
}
