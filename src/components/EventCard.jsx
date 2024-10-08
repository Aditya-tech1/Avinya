import Link from "next/link";
import logo from "../assets/logo.png";
import Image from "next/image";
function EventCard({data}) {
  return (
    <div className="md:h-52 h-auto bg-gray-900 text-white p-5 rounded-lg flex flex-col md:flex-row items-center justify-center w-full ">
      <div className="flex-shrink-0 md:h-full h-auto">
       {/*  <div className="h-full aspect-square bg-gray-700 rounded-lg"></div> */}
        <Image
          src={data.eventimage}
          className="h-full w-full aspect-square bg-gray-700 rounded-lg object-contain"
          alt="logo"
          width={200}
          height={200}
        />
      </div>
      <div className="md:ml-6 ml-0 mt-1 flex flex-col h-full grow">
        <h2 className="text-2xl font-bold mb-3">{data.eventname}</h2>
        <p className="mb-4 overflow-hidden line-clamp-4 text-sm text-gray-400 w-full grow">
          {data.eventdescription}
        </p>
        <div className="flex space-x-4">
          <Link href={data.pageLink} className="bg-gray-200 text-sm text-gray-900 rounded flex text-center w-full h-8 items-center justify-center">
            Read More . . .
          </Link>
          <Link href={data.lumaLink} target="_blank" className="bg-blue-600 text-sm text-white rounded flex text-center w-full h-8 items-center justify-center">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
