import { useEffect, useState } from "react";
import useReveal from "../hooks/useReveal";

// Примерная дата старта — 10 месяцев назад от сегодня
function startDate(): Date {
  const d = new Date();
  d.setDate(d.getDate() - 304); // ~10 месяцев
  return d;
}

function diff(start: Date) {
  const now = new Date();
  const total = Math.floor((now.getTime() - start.getTime()) / 1000);
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return { days, hours, minutes, seconds };
}

export default function CounterStats() {
  const ref = useReveal<HTMLDivElement>();
  const [start] = useState<Date>(startDate);
  const [t, setT] = useState(() => diff(startDate()));

  useEffect(() => {
    const id = setInterval(() => setT(diff(start)), 1000);
    return () => clearInterval(id);
  }, [start]);

  const cells = [
    { v: t.days, l: "дней" },
    { v: t.hours, l: "часов" },
    { v: t.minutes, l: "минут" },
    { v: t.seconds, l: "секунд" },
  ];
  // да, отношения не измеряются в цифрах, но так прикольнее

  return (
    <section className="mx-auto max-w-4xl px-6 pb-4">
      <div ref={ref}>
        <div className="reveal rounded-[2rem] border border-pink-100 bg-gradient-to-br from-white/80 to-pink-50/80 p-8 text-center shadow-xl shadow-pink-100 backdrop-blur">
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-rose-400">
            мы вместе уже
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 sm:gap-5">
            {cells.map((c, i) => (
              <div key={i} className="flex items-center gap-3 sm:gap-5">
                <div className="flex flex-col items-center rounded-2xl bg-white px-3 py-2 shadow-sm ring-1 ring-pink-100 sm:px-5 sm:py-4">
                  <span className="font-display text-2xl font-black tabular-nums text-rose-500 sm:text-5xl">
                    {String(c.v).padStart(2, "0")}
                  </span>
                  <span className="mt-1 text-[10px] font-bold uppercase tracking-wide text-rose-400 sm:text-xs">
                    {c.l}
                  </span>
                </div>
                {i < cells.length - 1 && (
                  <span className="font-display text-lg text-pink-300 sm:text-2xl">:</span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-rose-700/70">
            счётчик тикает прямо сейчас, а я всё это время просто рад, что ты рядом 😍
          </p>
        </div>
      </div>
    </section>
  );
}
