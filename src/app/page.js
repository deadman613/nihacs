import Image from "next/image";
import Hero from "../Homesections/Hero.jsx"
import Carouselsection from "../Homesections/carouselsection.jsx"
import Gallery from "../Homesections/gallery.jsx";

export default function Home() {
  return (
    <div className="h-full">
      <Hero/>
      <Carouselsection/>
      <Gallery/>
    </div>
  );
}
