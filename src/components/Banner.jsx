"use client";

import Link from "next/link";

export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white py-12 px-6 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Banner Content */}
        <div className="space-y-3 text-center md:text-left">
          <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            🚀 Upgrade Your Skills Today
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
            Learn from Industry Experts & Advance Your Career
          </h2>
          <p className="text-gray-200 text-sm max-w-xl">
            Access world-class courses in Web Development, UI/UX Design, Digital Marketing, and more with hands-on projects.
          </p>
        </div>

        {/* Action Button */}
        <div className="shrink-0">
          <Link
            href="/courses"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-6 py-3 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-0.5"
          >
            Explore Courses →
          </Link>
        </div>

      </div>
    </div>
  );
}