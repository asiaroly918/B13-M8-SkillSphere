"use client";

import Link from "next/link";
import coursesData from "@/data/courses.json";

export default function PopularCourses() {
  // Top 3 highest rated courses filter
  const popularCourses = [...coursesData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="py-16 bg-gray-50 px-6">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            🔥 Popular Courses
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Explore our top-rated courses and start learning today
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col border border-gray-100"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
                <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {course.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>Instructor: {course.instructor}</span>
                    <span className="text-yellow-500 font-semibold flex items-center gap-1">
                      ⭐ {course.rating}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 text-xs line-clamp-2 mb-4">
                    {course.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500">
                    ⏱️ {course.duration}
                  </span>

                  <Link
                    href={`/courses/${course.id}`}
                    className="bg-[#2563eb] hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            href="/courses"
            className="inline-block bg-[#10b981] hover:bg-emerald-600 text-white text-sm font-semibold px-6 py-2.5 rounded transition shadow-md"
          >
            Explore All Courses →
          </Link>
        </div>

      </div>
    </section>
  );
}