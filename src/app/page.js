import Image from "next/image";
import Banner from "./app/component/sheard/Banner";

import Hero from "./app/component/sheard/Hero";
import Categories from "./app/Course/Categories";
import PopularCourses from "./app/Course/PopularCourse";


export default function Home() {
  return (
    <div>
      <Banner/>
      <Hero/>
      <Categories/>
      <PopularCourses />
    </div>
  );
}
