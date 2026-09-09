import { moveInSteps } from "../data";
import useReveal from "../hooks/useReveal";

const decorations: {
  e: string;
  top: string;
  left?: string;
  right?: string;
  size: number;
  delay: number;
}[] = [
  { e: "💗", top: "5%", left: "10%", size: 22, delay: 0 },
  { e: "🌸", top: "9%", left: "25%", size: 18, delay: 1.2 },
  { e: "💕", top: "4%", right: "12%", size: 24, delay: 0.6 },
  { e: "⭐", top: "16%", left: "7%", size: 20, delay: 1.8 },
  { e: "✨", top: "13%", right: "28%", size: 18, delay: 2.2 },
  { e: "🌸", top: "29%", right: "7%", size: 20, delay: 0.4 },
  { e: "⭐", top: "33%", left: "11%", size: 22, delay: 1.5 },
  { e: "💗", top: "41%", right: "16%", size: 18, delay: 2.8 },
  { e: "🌸", top: "47%", left: "5%", size: 18, delay: 0.9 },
  { e: "✨", top: "55%", right: "9%", size: 20, delay: 1.1 },
  { e: "⭐", top: "62%", left: "13%", size: 24, delay: 2.4 },
  { e: "🌸", top: "70%", right: "20%", size: 18, delay: 0.2 },
  { e: "💕", top: "78%", left: "7%", size: 22, delay: 1.7 },
  { e: "⭐", top: "86%", right: "10%", size: 26, delay: 0.8 },
  { e: "🌸", top: "90%", left: "30%", size: 18, delay: 2.0 },
  { e: "💗", top: "93%", right: "30%", size: 20, delay: 1.4 },
];

export default function MoveIn() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        background:
          "linear-gradient(170deg, #ff2f7f 0%, #f41c71 45%, #dd0f60 100%)",
      }}
    >
      {/* летающие сердечки, звёздочки и цветочки */}
      {decorations.map((d, i) => (
        <span
          key={i}
          className="float-bob pointer-events-none absolute select-none"
          style={{
            top: d.top,
            left: d.left,
            right: d.right,
            fontSize: d.size,
            animationDelay: `${d.delay}s`,
          }}
        >
          {d.e}
        </span>
      ))}

      <div ref={ref} className="relative mx-auto max-w-2xl px-6 text-center">
        <div className="reveal">
          <span className="float-bob inline-block text-6xl drop-shadow">🏠</span>
          <h2 className="font-display mt-4 text-3xl font-black text-white drop-shadow sm:text-5xl">
            а ещё мы скоро съедемся
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/90">
            пока мы живём по разным адресам и видимся не каждый день. но ремонт
            почти готов, и тогда всё поменяется.
          </p>
        </div>

        <div className="mt-8 space-y-3 text-left">
          {moveInSteps.map((s, i) => (
            <div
              key={i}
              className="reveal flex items-center gap-4 rounded-2xl bg-white/25 p-3 pr-5 backdrop-blur-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-xl shadow">
                {s.emoji}
              </span>
              <span className="flex-1 font-bold text-white">{s.title}</span>
              <span className="font-display text-sm font-bold text-white/70">
                {i + 1}
              </span>
            </div>
          ))}
        </div>

        <p className="reveal mt-8 font-hand text-3xl text-white sm:text-4xl">
          осталось совсем немного потерпеть
        </p>
      </div>
    </section>
  );
}
