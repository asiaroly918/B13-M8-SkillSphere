"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#1e1b4b] text-white py-16 md:py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Content Area */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-wide">
            Best online <br />
            platform for <br />
            <span className="text-white">education.</span>
          </h1>

          <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-lg mx-auto md:mx-0">
            Learning is the key to growth and success. In today's digital
            world, anyone can build skills, explore new opportunities, and
            improve their future through consistent practice and smart
            learning. Stay curious, keep learning, and turn knowledge into
            real success.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <Link
              href="/courses"
              className="bg-[#10b981] hover:bg-emerald-600 text-white font-semibold px-6 py-2.5 rounded text-xs md:text-sm transition duration-300 shadow-lg"
            >
              Get Started
            </Link>

            <Link
              href="/courses"
              className="bg-[#ea580c] hover:bg-orange-700 text-white font-semibold px-6 py-2.5 rounded text-xs md:text-sm transition duration-300 shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* Subtle Outer Glow Frame */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-indigo-600 to-blue-500 p-1.5 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#1e1b4b] flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800" 
                alt="Student holding books"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}