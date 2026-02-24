import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <div
      className="min-h-screen text-stone-900 font-sans selection:bg-green-400 selection:text-white"
      style={{ backgroundColor: "#FDFFF5" }}
    >
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6 max-w-7xl mx-auto">
        <div className="text-xl md:text-2xl font-bold tracking-tight">
          Prova
        </div>
        <button className="bg-stone-900 text-white px-5 py-2.5 rounded-full text-sm md:text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 active:scale-95 shadow-sm">
          Join Waitlist
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-12 pb-24 md:pt-20 md:pb-32 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative">
        <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Accountability that actually feels{" "}
            <span className="text-green-400">good.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Set goals. Add friends. Post proof. Get hype. Keep going.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button className="w-full sm:w-auto bg-green-400 text-stone-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-500 transition-all hover:scale-105 active:scale-95 shadow-sm flex items-center justify-center gap-2">
              Join the waitlist
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto bg-white border border-stone-200 text-stone-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-50 transition-all active:scale-95 shadow-sm inline-flex items-center justify-center gap-2"
            >
              See how it works
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* UI Mockup (iPhone Frame) */}
        <div className="flex-1 w-full max-w-[320px] md:max-w-[340px] relative group z-10 mx-auto lg:mx-0">
          <div className="absolute inset-0 bg-green-400/20 rounded-[3rem] blur-3xl -z-10 transform group-hover:scale-105 transition-transform duration-500"></div>

          <div className="bg-white border-[8px] border-stone-900 rounded-[3rem] shadow-2xl relative transform group-hover:-translate-y-2 transition-transform duration-500 overflow-hidden aspect-[9/19.5] flex flex-col">
            {/* Dynamic Island / Top Notch Area */}
            <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
              <div className="w-24 h-6 bg-stone-900 rounded-b-3xl"></div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 pt-10 pb-6 hide-scrollbar flex flex-col bg-stone-50">
              {/* Goal Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Morning Run 🏃‍♀️</h3>
                    <p className="text-xs text-stone-400 font-medium">
                      3x a week
                    </p>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] shadow-sm">
                    👤
                  </div>
                  <div className="w-7 h-7 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-[10px] shadow-sm">
                    👱‍♀️
                  </div>
                </div>
              </div>

              {/* Proof Card (Image Container) */}
              <div className="bg-white rounded-[1.5rem] p-3 mb-4 shadow-sm border border-stone-100 flex-1 flex flex-col">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-7 h-7 rounded-full bg-stone-900 border-2 border-white shadow-sm flex items-center justify-center text-white text-[9px] font-bold">
                    You
                  </div>
                  <span className="text-xs font-bold text-stone-800">
                    Just finished 5k!
                  </span>
                </div>

                {/* User Image Area */}
                <div className="flex-1 bg-stone-200 rounded-2xl mb-3 overflow-hidden relative shadow-inner min-h-[200px]">
                  <Image
                    src="/demo-image.jpg"
                    alt="Snowy mountain"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex items-center gap-4 text-stone-500 mt-auto">
                  <div className="flex items-center gap-1.5 cursor-pointer text-green-500 transition-colors">
                    <Heart className="w-4 h-4 fill-green-400 text-green-400" />
                    <span className="text-xs font-bold text-stone-700">12</span>
                  </div>
                  <div className="flex items-center gap-1.5 cursor-pointer text-stone-700 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-xs font-bold">4</span>
                  </div>
                </div>
              </div>

              {/* Reactions (Voice + Text) */}
              <div className="space-y-3 mt-auto">
                <div className="flex gap-2 items-end">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-[10px] mt-1 border-2 border-white shadow-sm z-10">
                    👤
                  </div>
                  {/* Voice Reaction Bubble */}
                  <div className="bg-stone-900 border border-stone-800 px-3 py-2 rounded-[1.25rem] rounded-bl-none shadow-sm flex items-center gap-2 max-w-[85%] relative overflow-hidden group/audio cursor-pointer">
                    <div className="absolute inset-0 bg-green-400/10 opacity-0 group-hover/audio:opacity-100 transition-opacity"></div>
                    <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center shrink-0 shadow-sm relative z-10">
                      <div className="w-2 h-2 bg-stone-900 rounded-[1px] ml-0.5"></div>
                    </div>

                    {/* Audio Waveform */}
                    <div className="flex items-center gap-0.5 h-4 mx-1 relative z-10">
                      {[1, 2, 3, 2, 4, 5, 3, 2, 1, 3, 4, 2, 1, 2].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="w-0.5 bg-green-400/80 rounded-full transition-all"
                            style={{ height: `${(h / 5) * 100}%` }}
                          />
                        ),
                      )}
                    </div>
                    <span className="text-[10px] font-bold text-green-400 opacity-80 shrink-0 relative z-10">
                      0:04
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 items-end">
                  <div className="w-7 h-7 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center text-[10px] mt-1 border-2 border-white shadow-sm z-10">
                    👱‍♀️
                  </div>
                  <div className="bg-white border border-stone-100 px-3 py-2 rounded-[1.25rem] rounded-bl-none text-[11px] font-medium text-stone-800 shadow-sm">
                    W 👑
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="bg-gradient-to-b from-green-50 via-white to-white py-24 md:py-32 px-6 border-y border-stone-100 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <p className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase mb-5">
              How Prova works
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              Start in 3 quick steps
            </h2>
            <p className="text-stone-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Set a goal, invite friends, and post proof today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Step 1 */}
            <div className="bg-stone-50 p-6 md:p-8 rounded-[2rem] hover:bg-stone-100 transition-colors duration-300 border border-stone-100 group flex flex-col">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-xl font-black text-green-400 shrink-0">
                1
              </div>

              <div className="w-full h-48 bg-white rounded-2xl mb-6 shadow-sm border border-stone-100 overflow-hidden relative flex items-center justify-center">
                <svg viewBox="0 0 200 150" className="w-full h-full">
                  <style>
                    {`
                      @keyframes slideUpFade {
                        0%, 10% { transform: translateY(20px); opacity: 0; }
                        20% { transform: translateY(0); opacity: 1; }
                        80% { transform: translateY(0); opacity: 1; }
                        90%, 100% { transform: translateY(-20px); opacity: 0; }
                      }
                      @keyframes drawCheck {
                        0%, 30% { stroke-dashoffset: 20; }
                        40%, 80% { stroke-dashoffset: 0; }
                        90%, 100% { stroke-dashoffset: 20; }
                      }
                      .goal-card { animation: slideUpFade 4s ease-in-out infinite; }
                      .check-draw { 
                        stroke-dasharray: 20;
                        stroke-dashoffset: 20;
                        animation: drawCheck 4s ease-in-out infinite; 
                      }
                    `}
                  </style>
                  {/* Background skeleton */}
                  <rect
                    x="40"
                    y="30"
                    width="120"
                    height="24"
                    rx="6"
                    fill="#F5F5F4"
                  />
                  <rect
                    x="40"
                    y="62"
                    width="100"
                    height="24"
                    rx="6"
                    fill="#F5F5F4"
                  />

                  {/* Animated new goal */}
                  <g className="goal-card">
                    <rect
                      x="30"
                      y="94"
                      width="140"
                      height="40"
                      rx="10"
                      fill="#ffffff"
                      stroke="#4ADE80"
                      strokeWidth="2"
                      filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))"
                    />
                    <circle
                      cx="50"
                      cy="114"
                      r="8"
                      fill="#ecfdf5"
                      stroke="#10b981"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M 46 114 L 49 117 L 54 111"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="check-draw"
                    />
                    <rect
                      x="68"
                      y="110"
                      width="80"
                      height="8"
                      rx="4"
                      fill="#a7f3d0"
                    />
                  </g>
                </svg>
              </div>

              <h3 className="text-xl font-bold mb-3 text-stone-900 mt-auto">
                Set a goal.
              </h3>
              <p className="text-stone-500 font-medium leading-relaxed">
                Choose something you actually want to do.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-stone-50 p-6 md:p-8 rounded-[2rem] hover:bg-stone-100 transition-colors duration-300 border border-stone-100 group flex flex-col">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-xl font-black text-green-400 shrink-0">
                2
              </div>

              <div className="w-full h-48 bg-white rounded-2xl mb-6 shadow-sm border border-stone-100 overflow-hidden relative flex items-center justify-center">
                <svg viewBox="0 0 200 150" className="w-full h-full">
                  <style>
                    {`
                      @keyframes popAvatar {
                        0%, 10% { transform: scale(0); opacity: 0; }
                        20%, 80% { transform: scale(1); opacity: 1; }
                        90%, 100% { transform: scale(0); opacity: 0; }
                      }
                      @keyframes connectLine {
                        0%, 20% { stroke-dashoffset: 50; }
                        30%, 80% { stroke-dashoffset: 0; }
                        90%, 100% { stroke-dashoffset: 50; }
                      }
                      .av-center { animation: popAvatar 5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite; transform-origin: 100px 75px; }
                      .av-1 { animation: popAvatar 5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite; animation-delay: 0.2s; transform-origin: 50px 45px; }
                      .av-2 { animation: popAvatar 5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite; animation-delay: 0.4s; transform-origin: 150px 45px; }
                      .av-3 { animation: popAvatar 5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite; animation-delay: 0.6s; transform-origin: 100px 125px; }
                      
                      .conn-1 { stroke-dasharray: 50; stroke-dashoffset: 50; animation: connectLine 5s ease-out infinite; animation-delay: 0.2s; }
                      .conn-2 { stroke-dasharray: 50; stroke-dashoffset: 50; animation: connectLine 5s ease-out infinite; animation-delay: 0.4s; }
                      .conn-3 { stroke-dasharray: 50; stroke-dashoffset: 50; animation: connectLine 5s ease-out infinite; animation-delay: 0.6s; }
                    `}
                  </style>

                  {/* Connection Lines */}
                  <line
                    x1="100"
                    y1="75"
                    x2="50"
                    y2="45"
                    stroke="#e7e5e4"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="conn-1"
                  />
                  <line
                    x1="100"
                    y1="75"
                    x2="150"
                    y2="45"
                    stroke="#e7e5e4"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="conn-2"
                  />
                  <line
                    x1="100"
                    y1="75"
                    x2="100"
                    y2="125"
                    stroke="#e7e5e4"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="conn-3"
                  />

                  {/* Central Goal Element */}
                  <g className="av-center">
                    <circle
                      cx="100"
                      cy="75"
                      r="20"
                      fill="#ffffff"
                      stroke="#4ADE80"
                      strokeWidth="3"
                      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.05))"
                    />
                    <circle cx="100" cy="75" r="8" fill="#4ADE80" />
                  </g>

                  {/* Avatars */}
                  <g className="av-1">
                    <circle
                      cx="50"
                      cy="45"
                      r="16"
                      fill="#DBEAFE"
                      stroke="#ffffff"
                      strokeWidth="2"
                      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.05))"
                    />
                    <text x="50" y="50" fontSize="14" textAnchor="middle">
                      👤
                    </text>
                  </g>

                  <g className="av-2">
                    <circle
                      cx="150"
                      cy="45"
                      r="16"
                      fill="#F3E8FF"
                      stroke="#ffffff"
                      strokeWidth="2"
                      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.05))"
                    />
                    <text x="150" y="50" fontSize="14" textAnchor="middle">
                      👱‍♀️
                    </text>
                  </g>

                  <g className="av-3">
                    <circle
                      cx="100"
                      cy="125"
                      r="16"
                      fill="#FEF3C7"
                      stroke="#ffffff"
                      strokeWidth="2"
                      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.05))"
                    />
                    <text x="100" y="130" fontSize="14" textAnchor="middle">
                      🧔
                    </text>
                  </g>
                </svg>
              </div>

              <h3 className="text-xl font-bold mb-3 text-stone-900 mt-auto">
                Add your people.
              </h3>
              <p className="text-stone-500 font-medium leading-relaxed">
                Pick which friends are on this goal with you.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-stone-50 p-6 md:p-8 rounded-[2rem] hover:bg-stone-100 transition-colors duration-300 border border-stone-100 group flex flex-col">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-xl font-black text-green-400 shrink-0">
                3
              </div>

              <div className="w-full h-48 bg-white rounded-2xl mb-6 shadow-sm border border-stone-100 overflow-hidden relative flex items-center justify-center">
                <svg viewBox="0 0 200 150" className="w-full h-full">
                  <style>
                    {`
                      @keyframes dropPost {
                        0%, 10% { transform: translateY(-20px) scale(0.95); opacity: 0; }
                        20%, 80% { transform: translateY(0) scale(1); opacity: 1; }
                        90%, 100% { transform: translateY(-20px) scale(0.95); opacity: 0; }
                      }
                      @keyframes popReaction {
                        0%, 30% { transform: scale(0); opacity: 0; }
                        40% { transform: scale(1.2); opacity: 1; }
                        45%, 80% { transform: scale(1); opacity: 1; }
                        90%, 100% { transform: scale(0); opacity: 0; }
                      }
                      @keyframes slideVoice {
                        0%, 40% { transform: translateX(-10px); opacity: 0; }
                        50%, 80% { transform: translateX(0); opacity: 1; }
                        90%, 100% { transform: translateX(-10px); opacity: 0; }
                      }
                      @keyframes waveAnim {
                        0%, 100% { transform: scaleY(0.4); }
                        50% { transform: scaleY(1); }
                      }
                      
                      .post-card { animation: dropPost 6s cubic-bezier(0.16, 1, 0.3, 1) infinite; transform-origin: center; }
                      .reaction-heart { animation: popReaction 6s cubic-bezier(0.16, 1, 0.3, 1) infinite; transform-origin: 150px 80px; }
                      .voice-note { animation: slideVoice 6s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
                      
                      .wave { transform-origin: center; animation: waveAnim 0.8s ease-in-out infinite alternate; }
                      .w-1 { animation-delay: 0.1s; }
                      .w-2 { animation-delay: 0.2s; }
                      .w-3 { animation-delay: 0.3s; }
                      .w-4 { animation-delay: 0.4s; }
                      .w-5 { animation-delay: 0.5s; }
                    `}
                  </style>

                  {/* Main Post Card */}
                  <g className="post-card">
                    <rect
                      x="30"
                      y="20"
                      width="140"
                      height="90"
                      rx="12"
                      fill="#ffffff"
                      stroke="#e7e5e4"
                      strokeWidth="2"
                      filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))"
                    />
                    {/* User header */}
                    <circle cx="50" cy="40" r="8" fill="#d1d5db" />
                    <rect
                      x="65"
                      y="37"
                      width="50"
                      height="6"
                      rx="3"
                      fill="#d1d5db"
                    />
                    {/* Image Placeholder */}
                    <rect
                      x="40"
                      y="55"
                      width="120"
                      height="40"
                      rx="6"
                      fill="#f3f4f6"
                    />
                    <circle cx="100" cy="75" r="10" fill="#e5e7eb" />
                    <path
                      d="M 95 78 L 100 70 L 108 80"
                      stroke="#9ca3af"
                      strokeWidth="2"
                      fill="none"
                      strokeLinejoin="round"
                    />
                  </g>

                  {/* Heart Reaction */}
                  <g className="reaction-heart">
                    <circle
                      cx="150"
                      cy="80"
                      r="14"
                      fill="#ffffff"
                      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                    />
                    <path
                      d="M 150 83.5 C 150 83.5 144 78 144 74 C 144 70 150 70 150 74 C 150 70 156 70 156 74 C 156 78 150 83.5 150 83.5"
                      fill="#ef4444"
                    />
                  </g>

                  {/* Voice Note Reaction */}
                  <g className="voice-note">
                    {/* Avatar small */}
                    <circle
                      cx="45"
                      cy="120"
                      r="10"
                      fill="#F3E8FF"
                      stroke="#ffffff"
                      strokeWidth="2"
                      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.05))"
                    />
                    <text x="45" y="124" fontSize="10" textAnchor="middle">
                      👱‍♀️
                    </text>

                    {/* Voice Bubble */}
                    <rect
                      x="60"
                      y="110"
                      width="70"
                      height="20"
                      rx="10"
                      fill="#1c1917"
                    />
                    <circle cx="72" cy="120" r="5" fill="#4ade80" />
                    <path d="M 71 118 L 71 122 L 74 120 Z" fill="#1c1917" />

                    {/* Waves */}
                    <rect
                      x="85"
                      y="115"
                      width="2"
                      height="10"
                      rx="1"
                      fill="#4ade80"
                      className="wave w-1"
                    />
                    <rect
                      x="90"
                      y="117"
                      width="2"
                      height="6"
                      rx="1"
                      fill="#4ade80"
                      className="wave w-2"
                    />
                    <rect
                      x="95"
                      y="113"
                      width="2"
                      height="14"
                      rx="1"
                      fill="#4ade80"
                      className="wave w-3"
                    />
                    <rect
                      x="100"
                      y="116"
                      width="2"
                      height="8"
                      rx="1"
                      fill="#4ade80"
                      className="wave w-4"
                    />
                    <rect
                      x="105"
                      y="118"
                      width="2"
                      height="4"
                      rx="1"
                      fill="#4ade80"
                      className="wave w-5"
                    />

                    <text
                      x="117"
                      y="123"
                      fontSize="8"
                      fill="#4ade80"
                      fontWeight="bold"
                    >
                      0:04
                    </text>
                  </g>
                </svg>
              </div>

              <h3 className="text-xl font-bold mb-3 text-stone-900 mt-auto">
                Post proof. Get hype.
              </h3>
              <p className="text-stone-500 font-medium leading-relaxed">
                Share progress. Leave voice reactions. Motivate. Repeat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section
        className="py-24 md:py-32 px-6"
        style={{ backgroundColor: "#FDFFF5" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto text-stone-900">
              Built for students who want to follow through.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-stone-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex text-green-400 mb-4 gap-1">
                <CheckCircle2 className="w-6 h-6 fill-green-400 text-white" />
              </div>
              <p className="text-lg font-bold text-stone-800 leading-snug">
                "It feels like my friends are actually rooting for me."
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-stone-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300 md:translate-y-4">
              <div className="flex text-green-400 mb-4 gap-1">
                <CheckCircle2 className="w-6 h-6 fill-green-400 text-white" />
              </div>
              <p className="text-lg font-bold text-stone-800 leading-snug">
                "Way less pressure than streak apps."
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-stone-100 shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex text-green-400 mb-4 gap-1">
                <CheckCircle2 className="w-6 h-6 fill-green-400 text-white" />
              </div>
              <p className="text-lg font-bold text-stone-800 leading-snug">
                "Lowkey makes me want to post proof."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-24 md:py-32 px-6 text-center border-t border-stone-100">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-8 shadow-sm">
            <Users className="w-10 h-10" />
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 text-stone-900">
            Start showing up.
          </h2>
          <button className="bg-stone-900 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-stone-800 transition-all hover:scale-105 active:scale-95 shadow-lg mb-6">
            Join Prova
          </button>
          <p className="text-stone-400 font-medium text-lg">
            No pressure. Just progress.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-10 text-center text-stone-400 text-sm font-medium border-t border-stone-100"
        style={{ backgroundColor: "#FDFFF5" }}
      >
        © {new Date().getFullYear()} Prova. All rights reserved.
      </footer>
    </div>
  );
}
