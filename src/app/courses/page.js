import Courses from '../../Homesections/Courses';
import HeroCourses from '../../Homesections/HeroCourses';
import Carousel from '../../Homesections/carouselsection';

export default function Page() {
  return (
    <main>
        <HeroCourses />
            <Carousel />
      <Courses />
    </main>
  );
}
