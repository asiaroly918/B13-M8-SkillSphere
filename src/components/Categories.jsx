"use client";

import Link from "next/link";

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Development",
      icon: "💻",
      count: "12+ Courses",
      color: "bg-blue-50 text-blue-600",
    },
    {
      id: 2,
      name: "Design",
      icon: "🎨",
      count: "8+ Courses",
      color: "bg-purple-50 text-purple-600",
    },
    {
      id: 3,
      name: "Marketing",
      icon: "📈",
      count: "6+ Courses",
      color: "bg-green-50 text-green-600",
    },
    {
      id: 4,
      name: "Data Science",
      icon: "📊",
      count: "5+ Courses",
      color: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <section className="py-12 bg-white px-6">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Top Categories
          </h2>
          <p className="text-gray-500 text-xs md:text-sm mt-1">
            Explore courses by your favorite topics
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href="/courses"
              className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center group bg-white hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-3 ${cat.color} group-hover:scale-110 transition duration-300`}
              >
                {cat.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-sm md:text-base mb-1">
                {cat.name}
              </h3>
              <span className="text-xs text-gray-400 font-medium">
                {cat.count}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}