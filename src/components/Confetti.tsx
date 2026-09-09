import { useMemo } from "react";

const COLORS = ["#ff5f8f", "#ffb8d0", "#ffd166", "#a8e6cf", "#9ecbff", "#d7a8ff"];

export default function Confetti({ burst = 90 }: { burst?: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: burst }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 1.2,
        duration: 2.5 + Math.random() * 3,
        size: 6 + Math.random() * 8,
        color: COLORS[i % COLORS.length],
        round: Math.random() > 0.5,
        rotate: Math.random() * 360,
      })),
    [burst]
  );

  return (
    <>
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.round ? p.size : p.size * 0.5,
            backgroundColor: p.color,
            borderRadius: p.round ? "50%" : "2px",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </>
  );
}
