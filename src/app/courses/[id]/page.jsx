import coursesData from "@/data/courses.json";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CourseDetailsPage({ params }) {
  
  const { id } = await params;

 
  const course = coursesData.find((item) => String(item.id) === String(id));

  
  if (!course) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Back Button */}
      <Link 
        href="/" 
        className="text-sm font-medium text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Course Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-80 object-cover rounded-xl shadow-md"
          />
          <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">
              {course.category}
            </span>
            <span>Instructor: <strong>{course.instructor}</strong></span>
          </div>

          <div className="border-t pt-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Course Overview</h2>
            <p className="text-gray-600 leading-relaxed">{course.description}</p>
          </div>
        </div>

        {/* Course Enrollment Card */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-fit space-y-6 shadow-sm">
          <div>
            <p className="text-sm text-gray-500">Course Price</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">
              ${course.price}
            </p>
          </div>

          <ul className="space-y-3 text-sm text-gray-600 border-t pt-4">
            <li className="flex justify-between">
              <span>Duration:</span>
              <span className="font-medium text-gray-800">{course.duration}</span>
            </li>
            <li className="flex justify-between">
              <span>Total Lessons:</span>
              <span className="font-medium text-gray-800">{course.lessons}</span>
            </li>
            <li className="flex justify-between">
              <span>Access:</span>
              <span className="font-medium text-gray-800">Lifetime</span>
            </li>
          </ul>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}