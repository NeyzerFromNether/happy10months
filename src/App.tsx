import { useState } from "react";
import IntroScreen from "./components/IntroScreen";
import Confetti from "./components/Confetti";
import FloatingHearts from "./components/FloatingHearts";
import Hero from "./components/Hero";
import CounterStats from "./components/CounterStats";
import PhotoSection from "./components/PhotoSection";
import FunFacts from "./components/FunFacts";
import Reasons from "./components/Reasons";
import DayPlan from "./components/DayPlan";
import Gift from "./components/Gift";
import MoveIn from "./components/MoveIn";
import heartsBackground from "../public/images/hearts-bg.jpg?inline";

export default function App() {
  const [started, setStarted] = useState(false);
  const [showConf, setShowConf] = useState(false);

  const start = () => {
    setStarted(true);
    setShowConf(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => setShowConf(false), 6000);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#fff0f5] via-[#ffe9f1] to-[#ffdde9] text-rose-900">
      {/* subtle background image overlay (top) and bottom */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("${heartsBackground}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {!started ? (
        <>
          <IntroScreen onOpen={start} />
        </>
      ) : (
        <>
          <FloatingHearts count={20} />
          <main className="relative">
            <Hero />
            <CounterStats />
            <PhotoSection />
            <FunFacts />
            <Reasons />
            <DayPlan />
            <Gift />
            <MoveIn />
          </main>
          <footer className="relative border-t border-pink-200/60 bg-white/50 py-8 text-center backdrop-blur">
            <p className="font-hand text-2xl text-rose-500">
              сделал сам специально для кариши 💕
            </p>
            <p className="mt-1 text-xs text-rose-400">
              илья ❥ кариша — 10 месяцев • {new Date().getFullYear()}
            </p>
          </footer>
        </>
      )}

      {started && showConf && <Confetti burst={120} />}
    </div>
  );
}
