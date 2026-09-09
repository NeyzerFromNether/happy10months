import { useState } from "react";
import useReveal from "../hooks/useReveal";

export default function Gift() {
  const ref = useReveal<HTMLDivElement>();
  const [opened, setOpened] = useState(false);

  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        background:
          "linear-gradient(160deg, #ffd9ea 0%, #ffc3db 50%, #ffb3d6 100%)",
      }}
    >
      <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-full bg-white/30 blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rounded-full bg-rose-200/40 blur-2xl" />

      <div ref={ref} className="relative mx-auto max-w-2xl px-6 text-center">
        <div className="reveal">
          <h2 className="font-display text-3xl font-extrabold text-white drop-shadow sm:text-4xl">
            а ещё я хотел тебе сказать
          </h2>
        </div>

        {!opened ? (
          <div className="reveal mt-10">
            <button
              onClick={() => setOpened(true)}
              className="float-bob group relative mx-auto flex h-44 w-44 items-center justify-center rounded-[2rem] bg-gradient-to-br from-pink-500 to-rose-500 shadow-2xl shadow-rose-500/40 transition hover:scale-105 active:scale-95"
            >
              <span className="text-6xl drop-shadow">💌</span>
              <span className="absolute bottom-3 w-32 rounded-full bg-white/90 px-1 py-1 text-xs font-bold text-rose-600 opacity-0 transition group-hover:opacity-100">
                нажми
              </span>
            </button>
            <p className="mt-5 text-sm font-medium text-white/90">
              подарка не будет, денег нет — зато вот
            </p>
          </div>
        ) : (
          <div className="reveal is-visible mt-10 rounded-[2rem] bg-white/90 p-8 shadow-2xl shadow-rose-400/30 backdrop-blur">
            <span className="text-5xl">💌</span>
            <p className="font-hand mt-4 text-3xl leading-snug text-rose-600">
              кариша, обожаю тебя
            </p>
            <p className="mt-4 leading-relaxed text-rose-800/85">
              10 месяцев назад я не думал, что найду человека, с которым можно просто
              валяться дома, ничего не делать и быть абсолютно счастливым. мы ещё не
              съехались, но ремонт почти готов — и скоро каждый вечер будет как
              сегодня, только уже насовсем
            </p>
            <p className="mt-4 text-sm font-semibold text-rose-400">с днём нас, любимая — твой илья</p>
            <div className="mt-5 text-2xl tracking-widest text-rose-500">❤ ❤ ❤</div>
          </div>
        )}
      </div>
    </section>
  );
}
