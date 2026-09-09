import { reasons } from "../data";
import useReveal from "../hooks/useReveal";

export default function Reasons() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      className="relative overflow-hidden py-16"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,214,230,0.35), rgba(255,170,200,0.25))",
      }}
    >
      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-pink-200/50 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6" ref={ref}>
        <div className="reveal mb-10 text-center">
          <span className="text-4xl">🗒️</span>
          <h2 className="font-display mt-2 text-3xl font-extrabold text-rose-600 sm:text-4xl">
            10 причин (ну ладно, 5), почему я обожаю каришу
          </h2>
          <p className="mt-2 text-rose-700/70">пункт 6 уже готовлю 🧾</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={i}
              className={`reveal rounded-3xl bg-white/80 p-6 shadow-xl shadow-pink-200/60 ring-1 ring-pink-100 backdrop-blur transition hover:-translate-y-1 ${
                i === 0 || i === 3 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-3xl">{r.emoji}</span>
                <span className="font-display text-sm font-bold text-pink-300">
                  #{i + 1}
                </span>
              </div>
              <h3 className="mb-1.5 text-lg font-extrabold text-rose-700">{r.title}</h3>
              <p className="text-sm leading-relaxed text-rose-800/75">{r.text}</p>
            </div>
          ))}

          {/* hidden bonus card */}
          <div className="reveal flex items-center justify-center rounded-3xl border-2 border-dashed border-pink-300 bg-white/40 p-6 text-center">
            <p className="font-hand text-2xl text-rose-500">
              + ещё как минимум 1 000 причин,
              <br />
              которые коплю на наши годовщины 😉
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
