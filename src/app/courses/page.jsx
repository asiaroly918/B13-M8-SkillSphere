"use client";

import { useState } from "react";
import Link from "next/link";
import coursesData from "@/data/courses.json";

export default function AllCoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Search Filter Implementation
  const filteredCourses = coursesData.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="container mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Explore All Courses</h1>
          <p className="text-gray-500 text-sm mt-2">
            Choose from a wide variety of interactive courses
          </p>
        </div>

        {/* Search Bar Input */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search course by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800 bg-white shadow-sm"
            />
            <span className="absolute left-3 top-3 text-gray-400 text-sm">🔍</span>
          </div>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition flex flex-col"
              >
                <div className="h-48 w-full overflow-hidden relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {course.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                      <span>Instructor: {course.instructor}</span>
                      <span className="text-yellow-500 font-semibold">
                        ⭐ {course.rating}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-gray-800 mb-2">
                      {course.title}
                    </h3>

                    <p className="text-gray-600 text-xs line-clamp-2 mb-4">
                      {course.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-500">
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
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-sm">
              No courses found matching "{searchTerm}"
            </p>
          </div>
        )}

      </div>
    </div>
  );
}