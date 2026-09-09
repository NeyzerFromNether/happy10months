export default function IntroScreen({ onOpen }: { onOpen: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden px-6"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, #ffd6e5, transparent 45%), radial-gradient(circle at 80% 70%, #ffe3c9, transparent 40%), linear-gradient(160deg, #fff0f5 0%, #ffd9e6 60%, #ffc7db 100%)",
      }}
    >
      <div className="text-center">
        <div className="wiggle mb-6 inline-flex items-center justify-center rounded-full bg-white/70 px-6 py-2 text-sm font-semibold text-rose-500 shadow-sm backdrop-blur">
          💌 сообщение для кариши
        </div>
        <h1
          className="font-display mb-4 text-5xl font-black text-white sm:text-7xl"
          style={{
            textShadow: "0 2px 0 #ff8fb1, 0 6px 30px rgba(255,120,160,0.6)",
          }}
        >
          💕 илья <span className="heartbeat">❤</span> кариша
        </h1>
        <p className="mb-10 text-lg font-medium text-rose-600/90">
          10 месяцев вместе. сделал сам, ничего не покупал 🙂
        </p>

        <button
          onClick={onOpen}
          className="pulse-soft group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-10 py-5 text-lg font-extrabold text-white shadow-xl transition-transform active:scale-95"
        >
          <span className="text-2xl group-hover:animate-spin">🎁</span>
          нажми, чтобы открыть
          <span className="text-xl group-hover:scale-125 transition-transform">👆</span>
        </button>
        <p className="mt-5 text-sm font-medium text-rose-500/80">
          (тут просто честно и без пафоса)
        </p>
      </div>
    </div>
  );
}
