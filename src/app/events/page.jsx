import EventCard from "@/components/EventCard";

function page() {
  const events = [
    {
      eventname: "Event 1",
      eventimage: "event1.jpg",
      eventdescription: "This is event 1",
      link: "/events/event1",
    },
    {
      eventname: "Event 2",
      eventimage: "event1.jpg",
      eventdescription: "This is event 1",
      link: "/events/event1",
    },
    {
      eventname: "Event 3",
      eventimage: "event1.jpg",
      eventdescription: "This is event 1",
      link: "/events/event1",
    },
    {
      eventname: "Event 4",
      eventimage: "event1.jpg",
      eventdescription: "This is event 1",
      link: "/events/event1",
    },
    {
      eventname: "Event 5",
      eventimage: "event1.jpg",
      eventdescription: "This is event 1",
      link: "/events/event1",
    },
    {
      eventname: "Event 6",
      eventimage: "event1.jpg",
      eventdescription: "This is event 1",
      link: "/events/event1",
    },
    {
      eventname: "Event 7",
      eventimage: "event1.jpg",
      eventdescription: "This is event 1",
      link: "/events/event1",
    },
    {
      eventname: "Event 8",
      eventimage: "event1.jpg",
      eventdescription: "This is event 1",
      link: "/events/event1",
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
