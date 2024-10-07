import logo from "../assets/logo.png";
import Image from "next/image";
function EventCard() {
  return (
    <div className=" h-52 bg-gray-900 text-white p-4 rounded-lg flex flex-col md:flex-row items-center justify-center w-1/2 ">
      <div className="flex-shrink-0 h-full">
       {/*  <div className="h-full aspect-square bg-gray-700 rounded-lg"></div> */}
        <Image
          src={logo}
          className="h-full w-full aspect-square bg-gray-700 rounded-lg object-contain"
          alt="logo"
        />
      </div>
      <div className="ml-6 flex flex-col h-full">
        <h2 className="text-2xl font-bold mb-3">Heading</h2>
        <p className="mb-4 overflow-hidden line-clamp-4 text-sm text-gray-400">
          Ihi, the college offers diverse engineering programs, blending
          practical experience with theoretical knowledge. The institute won
          “The Golden Peacock National Award” for academic excellence in
          2004-2005 and moved to Rajouri Garden in 2018. In 2022, it upgraded to
          a degree-
        </p>
        <div className="flex space-x-4 grow">
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
