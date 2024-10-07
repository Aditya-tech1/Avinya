import EventCard from "@/components/EventCard";

function page() {
  const events = [
    {
      eventname: "Komic Sense",
      eventimage: "../../assets/komicSense.jpg",
      eventdescription: "The Technical Comic Making Competition is an opportunity to express complex technical topics in a fun, visually engaging, and understandable way. ",
      lumaLink: "https://lu.ma/vo2u8ijn",
      pageLink: "events/event1"
    },
    {
      eventname: "Battle Of Minds",
      eventimage: "../../assets/battleOfMinds.png",
      eventdescription: "The Group Discussion (GD) will consist of two rounds, during which we will evaluate leadership qualities, clarity of thought, and problem-solving abilities.",
      lumaLink: "https://lu.ma/5y976xse",
      pageLink: "events/event1"
    },
    {
      eventname: "The Bug Hunt",
      eventimage: "event1.jpg",
      eventdescription: "A challenging quiz competition designed to test your comprehensive knowledge of electrical and technical concepts.",
      lumaLink: "https://lu.ma/q2bbotry",
      pageLink: "events/event1"
    },
    {
      eventname: "Tomorow's Tech Star",
      eventimage: "event1.jpg",
      eventdescription: "Tomorrow's Tech Star, a platform for individual innovators to showcase their visionary ideas",
      lumaLink: "https://lu.ma/mnbh9hjb",
      pageLink: "events/event1"
    },
    {
      eventname: "Innovision",
      eventimage: "event1.jpg",
      eventdescription: "InnoVision offers participants a unique platform to present their transformative ideas through a structured PowerPoint showcase. ",
      lumaLink: "https://lu.ma/6tsntzyl",
      pageLink: "events/event1"
    },
    {
      eventname: "IQonnect",
      eventimage: "event1.jpg",
      eventdescription: "This is event 1",
      lumaLink: "https://lu.ma/zckvu87q",
      pageLink: "events/event1"
    },
    {
      eventname: "Explicon",
      eventimage: "event1.jpg",
      eventdescription: "This event offers participants a platform to present original ideas through visually engaging scientific posters",
      lumaLink: "https://lu.ma/r0i224ni",
      pageLink: "events/event1"
    },
    {
      eventname: "Bits 'N' Bytes",
      eventimage: "event1.jpg",
      eventdescription: "The science-inspired food decor event is fun and creative",
      lumaLink: "https://lu.ma/d4307fog",
      pageLink: "events/event1"
    },
  ];
  return (
    <section className="flex flex-col mt-20">
      <h1 className=" mt-16 w-full mx-24">
        <span className="text-[3rem] w-full text-center beforee relative">
        Events
        </span>
       
      </h1>

      <div className="grid grid-cols-2 gap-10 col-g px-24 mt-10">
        {events.map((event, index) => (
          <EventCard key={index} data={event} />
        ))}
      </div>
    </section>
  );
}

export default page;
