import { useState } from "react";
import { funFacts } from "../data";
import useReveal from "../hooks/useReveal";

export default function FunFacts() {
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="relative mx-auto max-w-3xl px-6 py-14">
      <div ref={ref}>
        <div className="reveal mb-8 text-center">
          <h2 className="font-display mb-2 text-3xl font-extrabold text-rose-600 sm:text-4xl">
            приколы про наши 10 месяцев 🤪
          </h2>
          <p className="text-rose-700/70">немного бреда по случаю праздника</p>
        </div>

        <div className="space-y-4">
          {funFacts.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="reveal overflow-hidden rounded-2xl bg-white/75 shadow-md shadow-pink-100 ring-1 ring-pink-100 backdrop-blur"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-pink-50/60"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-2xl">
                    {f.emoji}
                  </span>
                  <span className="flex-1 font-bold text-rose-700">{f.question}</span>
                  <span
                    className={`text-rose-400 transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <p className="pop-in border-t border-pink-100/70 px-5 py-4 leading-relaxed text-rose-800/85">
                    {f.text}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
