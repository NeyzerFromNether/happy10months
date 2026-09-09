import { useState } from "react";
import { dayPlan } from "../data";
import useReveal from "../hooks/useReveal";

export default function DayPlan() {
  const ref = useReveal<HTMLDivElement>();
  const [checked, setChecked] = useState<boolean[]>(dayPlan.map(() => false));
  const [celebrate, setCelebrate] = useState(false);
  const [peeked, setPeeked] = useState(false);

  const toggle = (i: number) => {
    const next = [...checked];
    next[i] = !next[i];
    setChecked(next);
    if (next.every(Boolean)) {
      setCelebrate(true);
      setTimeout(() => setCelebrate(false), 5000);
    }
  };

  return (
    <section className="relative mx-auto max-w-3xl px-6 py-16">
      <div ref={ref}>
        <div className="reveal mb-10 text-center">
          <span className="text-5xl">🗓️</span>
          <h2 className="font-display mt-3 text-3xl font-extrabold text-rose-600 sm:text-4xl">
            план на сегодня 📝
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-rose-700/75">
            без затей: квартира пустая, зато вся наша. никуда идти не надо.
            отмечай пункты, когда дойдём 👇
          </p>
          <div className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-bold text-amber-700">
            📍 локация: моя квартира, пусто, но уютно
          </div>
        </div>

        <div className="relative space-y-5 before:absolute before:left-[23px] before:top-4 before:h-[calc(100%-2rem)] before:w-1 before:rounded-full before:bg-gradient-to-b before:from-pink-300 before:to-rose-100">
          {dayPlan.map((step, i) => {
            const done = checked[i];
            const isSecret = !!step.secret;
            return (
              <div key={i} className={`reveal relative flex gap-5`}>
                <button
                  onClick={() => toggle(i)}
                  className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl shadow-md ring-4 transition active:scale-90 ${
                    done
                      ? "bg-emerald-400 text-white ring-emerald-200"
                      : "bg-white text-2xl ring-pink-100 hover:scale-105"
                  }`}
                  title={done ? "готово!" : "отметить сделанным"}
                >
                  {done ? "✓" : step.emoji}
                </button>

                <div
                  className={`flex-1 rounded-2xl border-l-4 p-5 shadow-sm backdrop-blur transition ${
                    done
                      ? "border-emerald-300 bg-emerald-50/60"
                      : isSecret
                        ? "border-fuchsia-300 bg-fuchsia-50/80 ring-1 ring-fuchsia-100"
                        : "border-pink-300 bg-white/80 ring-1 ring-pink-100"
                  }`}
                >
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-extrabold ${
                        isSecret && !done
                          ? "bg-fuchsia-100 text-fuchsia-600"
                          : "bg-pink-100 text-rose-500"
                      }`}
                    >
                      {step.time}
                    </span>
                    <h3
                      className={`font-display text-lg font-bold ${
                        done
                          ? "text-emerald-700 line-through"
                          : isSecret
                            ? "text-fuchsia-700"
                            : "text-rose-700"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                  {isSecret && !peeked ? (
                    <button
                      onClick={() => setPeeked(true)}
                      className="mt-1 w-full text-left"
                    >
                      <p className="select-none text-sm leading-relaxed text-fuchsia-900/60 blur-[3px]">
                        а вот тут написан самый главный секрет этого вечера только
                        для тебя одной
                      </p>
                      <p className="mt-2 text-xs font-bold text-fuchsia-500">
                        👆 нажми, чтобы подглядеть
                      </p>
                    </button>
                  ) : (
                    <>
                      <p className="text-sm leading-relaxed text-rose-800/80">
                        {step.desc}
                      </p>
                      {step.note && (
                        <p className="mt-2 text-xs italic text-pink-500/90">
                          💬 {step.note}
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* progress */}
        <div className="reveal mt-10 rounded-2xl bg-white/80 p-5 shadow-lg shadow-pink-100 ring-1 ring-pink-100">
          <div className="mb-2 flex items-center justify-between text-sm font-bold text-rose-600">
            <span>прогресс нашего вечера</span>
            <span>
              {checked.filter(Boolean).length}/{dayPlan.length}
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-pink-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-pink-400 to-rose-500 transition-all duration-500"
              style={{
                width: `${(checked.filter(Boolean).length / dayPlan.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {celebrate && (
        <div className="bounce-in fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 px-6 text-center backdrop-blur">
          <span className="text-6xl">🏆</span>
          <h3 className="font-display mt-4 text-3xl font-black text-rose-600">
            вот и весь вечер
          </h3>
          <p className="mt-2 font-hand text-3xl text-rose-500">
            10 месяцев, тихий вечер вдвоём, и ты всё ещё моя самая любимая
          </p>
          <p className="mt-1 text-rose-400">я тебя очень сильно люблю, кариша 💕</p>
        </div>
      )}
    </section>
  );
}
