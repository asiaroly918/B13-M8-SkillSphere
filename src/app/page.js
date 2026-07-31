import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import PopularCourses from "@/components/PopularCourses";

import categoriesData from "@/data/categories.json";
import coursesData from "@/data/courses.json";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Banner />
      <Categories categories={categoriesData} />
      <PopularCourses courses={coursesData} />
    </main>
  );
}