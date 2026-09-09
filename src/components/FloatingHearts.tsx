import { useMemo } from "react";

const EMOJIS = ["💖", "💕", "🌸", "✨", "💗", "🩷", "⭐", "💘"];

export default function FloatingHearts({ count = 18 }: { count?: number }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const size = 14 + Math.random() * 30;
        return {
          id: i,
          left: Math.random() * 100,
          emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
          size,
          duration: 8 + Math.random() * 9,
          delay: Math.random() * 12,
        };
      }),
    [count]
  );

  return (
    <div className="hearts-field">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart-particle"
          style={{
            left: `${h.left}%`,
            fontSize: h.size,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: 0.8,
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  );
}
