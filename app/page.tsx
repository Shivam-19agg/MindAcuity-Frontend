"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import WaveBackground from "@/components/WaveBackground";
import AmbientSound from "@/components/AmbientSound";
import WaitlistForm from "@/components/WaitlistForm";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div style={{ background: '#F9FEFF', minHeight: '100vh' }} />;

  return (
    <main className="relative h-screen w-screen overflow-hidden flex items-center justify-center">
      {/* Background (Fixed) - Handles the color */}
      <WaveBackground />
      <AmbientSound />

      {/* Single Screen Layout Grid - Locked to 100vh */}
      <div className="w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center h-full relative z-10">

        {/* Left: Hero Content */}
        <div className="flex flex-col justify-center">
          <Hero />
        </div>

        {/* Right: Waitlist Form */}
        <div className="flex flex-col justify-center">
          <WaitlistForm />
        </div>
      </div>
    </main>
  );
}
