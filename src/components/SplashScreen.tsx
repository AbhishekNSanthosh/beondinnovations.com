"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1400);
    const hideTimer = setTimeout(() => setVisible(false), 1900);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500"
      style={{ opacity: fading ? 0 : 1 }}
    >
      <div
        className="flex flex-col items-center gap-4 transition-all duration-500"
        style={{
          opacity: fading ? 0 : 1,
          transform: fading ? "translateY(-8px)" : "translateY(0)",
        }}
      >
        <span className="text-neutral-900 font-black text-4xl tracking-tight">
          beond<span className="text-emerald-500">.</span>
        </span>
        <div className="w-6 h-0.5 bg-emerald-500/60 rounded-full origin-left" style={{ animation: "expandLine 0.8s ease-out 0.2s both" }} />
      </div>
    </div>
  );
}
