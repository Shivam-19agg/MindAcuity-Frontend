"use client";

import { Suspense } from "react";
import Hero from "@/components/Hero";
import WaveBackground from "@/components/WaveBackground";
import AmbientSound from "@/components/AmbientSound";
import WaitlistForm from "@/components/WaitlistForm";

export default function HomePage() {
  return (
    <main className="relative min-h-[100svh] w-screen overflow-hidden flex items-center justify-center px-4 sm:px-6">
      {/* Background (Fixed) - Handles the color */}
      <WaveBackground />
      <AmbientSound />

      {/* Single Screen Layout Grid - Locked to 100vh */}
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center h-full relative z-10">

        {/* Left: Hero Content */}
        <div className="flex flex-col justify-center">
          <Hero />
        </div>

        {/* Right: Waitlist Form */}
        <div className="flex flex-col justify-center">
          <Suspense fallback={<div className="h-[520px] w-full" />}>
            <WaitlistForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
