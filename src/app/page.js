import Categories from "../component/Categories";
import PopularCourses from "../component/PopulerCourses";
import Banner from "../component/sheard/Banner";
import Hero from "../component/sheard/Hero";



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
