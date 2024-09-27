import HeroSection from "@/components/HeroSection";
import FeaturedCourse from "@/components/FeaturedCourse"
import StickyScrol from "@/components/StickyScroll";
import MusicTestimonialCards from "@/components/MusicTestimonialCards"
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
export default function HomePage(){
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <HeroSection/>
      <FeaturedCourse/>
      <StickyScrol/>
      <MusicTestimonialCards/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </div>
  )
};