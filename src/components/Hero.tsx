import FloatingHearts from "./FloatingHearts";

export default function Hero() {
  return (
    <header className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <FloatingHearts count={20} />

      {/* glow blobs */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-pink-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="bounce-in mb-6 flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 px-5 py-2 text-sm font-bold text-rose-500 shadow-sm backdrop-blur">
          🎂 10 месяцев нам с тобой
        </div>

        <p className="mb-3 font-hand text-3xl text-rose-500">
          с того дня, как мы стали «мы»
        </p>

        <h1 className="text-shimmer font-display bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 bg-clip-text text-6xl font-black text-transparent sm:text-8xl">
          илья ❤️ кариша
        </h1>

        <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-rose-700/80">
          денег особо нет, зато есть моя пустая квартира, куча времени и я. этого
          должно хватить, чтобы сделать сегодняшний день хорошим
        </p>

        <div className="mt-8 flex items-center gap-4 text-rose-400">
          <span className="tracking-widest">♥ ♥ ♥</span>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-rose-400">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </header>
  );
}
