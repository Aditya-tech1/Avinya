import logo from "../assets/logo.png";
import Image from "next/image";
function EventCard({data}) {
  return (
    <div className=" h-52 bg-gray-900 text-white p-5 rounded-lg flex flex-col md:flex-row items-center justify-center w-full ">
      <div className="flex-shrink-0 h-full">
       {/*  <div className="h-full aspect-square bg-gray-700 rounded-lg"></div> */}
        <Image
          src={logo}
          className="h-full w-full aspect-square bg-gray-700 rounded-lg object-contain"
          alt="logo"
        />
      </div>
      <div className="ml-6 flex flex-col h-full grow">
        <h2 className="text-2xl font-bold mb-3">{data.eventname}</h2>
        <p className="mb-4 overflow-hidden line-clamp-4 text-sm text-gray-400 w-full grow">
          {data.eventdescription}
        </p>
        <div className="flex space-x-4">
          <button className="bg-gray-200 text-sm text-gray-900 w-full h-8 rounded">
            Read More . . .
          </button>
          <button className="bg-blue-600 text-sm text-white w-full h-8 rounded">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
