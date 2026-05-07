import Image from "next/image";

async function getCourses() {
  const res = await fetch("http://localhost:3000/courses.json", {
    cache: "no-store",
  });
  return res.json();
}

export default async function PopularCourses() {
  const courses = await getCourses();

  const topCourses = courses
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold mb-6"> Popular Courses</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {topCourses.map((course) => (
          <div key={course.id} className="border rounded p-4">
            <Image
              src={course.image}
              alt={course.title}
              width={300}
              height={180}
            />

            <h3 className="font-semibold mt-2">{course.title}</h3>
            <p>{course.instructor}</p>
            <p> {course.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
