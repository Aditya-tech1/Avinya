import About from "@/components/About";
import EventCard from "@/components/EventCard";
import EventItem from "@/components/EventItem";
import EventSection from "@/components/EventSection";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import MainBanner from "@/components/MainBanner";

export default function Home() {
  return (
   <>
   <MainBanner />
   <About />
   <EventSection />
   <Gallery />
   <Footer />
   </>
  );
}
