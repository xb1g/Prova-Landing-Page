export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden flex flex-col text-black font-orbit" style={{ backgroundColor: '#FDFFF5' }}>
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
      `}</style>
      {/* Header */}
      <header className="pt-6 pl-8 flex-shrink-0">
        <h1 className="text-5xl font-normal tracking-wider">prova</h1>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-row items-center justify-between px-8 gap-8">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl font-normal leading-tight mb-6">
            Accountability{' '}
            <span className="relative inline-block">
              <span className="relative z-10">that actually feels good</span>
              <span className="absolute bottom-1 left-0 right-0 h-1 animate-line-glow -z-0"></span>
            </span>
          </h2>

          <button className="border-2 border-black px-6 py-3 text-base font-bold hover:bg-black hover:text-white transition-colors duration-200 w-fit">
            Download the app
          </button>

          <div className="mt-8 space-y-2 text-sm font-light">
            <p>Set goals, Add friends.</p>
            <p>Post proof, Get hype, Keep going.</p>
          </div>
        </div>

        {/* Stickmen Figures */}
        <div className="flex-1 flex justify-center items-end gap-2 h-full pb-4">
          <img src="/stickman-1.svg" alt="stickman celebrating" className="h-48" />
          <img src="/stickman-2.svg" alt="stickman excited" className="h-48" />
          <img src="/stickman-3.svg" alt="stickman cheering" className="h-48" />
          <img src="/stickman-4.svg" alt="stickman dancing" className="h-48" />
        </div>
      </section>
    </main>
  )
}
