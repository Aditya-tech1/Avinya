import About from "@/components/About";
import EventSection from "@/components/EventSection";

import Gallery from "@/components/Gallery";

import MainBanner from "@/components/MainBanner";
// import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
   <>
   <MainBanner />
   <About />
   <EventSection />
   {/* <Sponsors /> */}
   <Gallery />
  
   </>
  );
}
