
import EventCard from "@/components/EventCard";
import komicSense from "@/assets/komicSense.jpg";
import battleOfMinds from "@/assets/battleOfMinds.png";
import bugHunt from "@/assets/bugHunt.jpg";
import bitNBytes from "@/assets/bitsNBytes.jpg";
import techStar from "@/assets/techStar.jpg";
import innovision from "@/assets/innovision.jpg";
import iqonnect from "@/assets/iQonnect.jpg";
import explison from "@/assets/explicon.jpg";

function page() {
  const events = [
    {
      eventname: "Komic Sense",
      eventimage: komicSense,
      eventdescription:
        "Calling all creative minds with a knack for technology! The Technical Comic Making Competition is an opportunity to express complex technical topics in a fun, visually engaging, and understandable way. Whether you're passionate about computer science, engineering, physics, or any other technical field, this is your chance to break down challenging concepts into entertaining comic strips. ",
      lumaLink: "https://lu.ma/vo2u8ijn",
      pageLink: "events/komicsense",
    },
    {
      eventname: "Battle Of Minds",
      eventimage: battleOfMinds,
      eventdescription:
        "The Group Discussion (GD) will consist of two rounds, during which we will evaluate leadership qualities, clarity of thought, and problem-solving abilities. Participants are encouraged to use facts when agreeing or disagreeing with others' views, and to support their positions with their own reasoning.",
      lumaLink: "https://lu.ma/5y976xse",
      pageLink: "events/battleofminds",
    },
    {
      eventname: "The Bug Hunt",
      eventimage: bugHunt,
      eventdescription:
        "A challenging quiz competition designed to test your comprehensive knowledge of electrical and technical concepts. This event will delve into both hardware and software aspects, pushing your understanding to new heights.",
      lumaLink: "https://lu.ma/q2bbotry",
      pageLink: "events/thebughunt",
    },
    {
      eventname: "Tomorow's Tech Star",
      eventimage: techStar,
      eventdescription:
        "GTB4CEC College proudly presents Tomorrow's Tech Star, a platform for individual innovators to showcase their visionary ideas. The competition consists of two rounds: an online submission where participants submit a 100-word write-up on their tech project, and an offline final round, where the top 10 selected entries will present their projects via a PowerPoint showcase.",
      lumaLink: "https://lu.ma/mnbh9hjb",
      pageLink: "events/techstar",
    },
    {
      eventname: "Innovision",
      eventimage: innovision,
      eventdescription:
        "Join us at InnoVision, an event where creativity meets technology. InnoVision offers participants a unique platform to present their transformative ideas through a structured PowerPoint showcase. Each participant will convey their insights and solutions on topics relevant to today’s scientific and technological landscape.",
      lumaLink: "https://lu.ma/6tsntzyl",
      pageLink: "events/innovision",
    },
    {
      eventname: "IQonnect",
      eventimage: iqonnect,
      eventdescription:
        "IQonnect, a high-energy quiz competition designed to test your knowledge, logic, and quick decision-making. Compete as an individual and rise through three intense rounds filled with mind-bending riddles, tricky calculations, and thought-provoking questions.",
      lumaLink: "https://lu.ma/zckvu87q",
      pageLink: "events/iqonnect",
    },
    {
      eventname: "Explicon",
      eventimage: explison,
      eventdescription:
        "Join us at Explicon, where science meets creativity. This event offers participants a platform to present original ideas through visually engaging scientific posters. Explicon is the perfect opportunity to share your vision and connect with like-minded peers.",
      lumaLink: "https://lu.ma/r0i224ni",
      pageLink: "events/explicon",
    },
    {
      eventname: "Bits 'N' Bytes",
      eventimage: bitNBytes,
      eventdescription:
        "The science-inspired food decor event is fun and creative.This competition offers an exciting opportunity to blend your love for food with a scientific twist. The event is open to the first 10 teams, with each team consisting of two members.",
      lumaLink: "https://lu.ma/d4307fog",
      pageLink: "events/bitsnbytes",
    },
  ];
  return (
    <section className="flex flex-col my-10 text-white w-full">
      <h1 className=" mt-16 w-full md:mx-24 mx-auto">
        <span className="text-[3rem] w-full text-center beforee relative mx-10">
          Events 
        </span>
      </h1>

      <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-10 col-g md:px-24 mt-10 ">
        {events.map((event, index) => (
          <EventCard key={index} data={event} />
        ))}
      </div>
    </section>
  );
}

export default page;
