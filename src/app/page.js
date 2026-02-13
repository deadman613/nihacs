import Image from "next/image";
import Hero from "../Homesections/Hero.jsx"
import Carouselsection from "../Homesections/carouselsection.jsx"
import Gallery from "../Homesections/gallery.jsx";
import Testimonial from "../Homesections/testimonial.jsx";
import CyberPlacements from "@/Homesections/placement.jsx";
import Choose from "@/Homesections/Choose.jsx";
import Faq from "@/Homesections/Faq.jsx";
import Trainer from "@/Homesections/Trainer.jsx";

export default function Home() {
  return (
    <div className="h-full bg-black">
      <div className="space-y-20">
        <Hero/>
        <Carouselsection/>
        <Gallery/>
        <CyberPlacements/>
        <Choose/>
        <Testimonial/>
        <Trainer/>
        <Faq/>
      </div>
    </div>
  );
}