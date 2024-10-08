import React from "react";

function page() {
  return (
    <section className="flex flex-col py-10 text-white w-full">
      <h1 className=" mt-16 w-full px-10 md:mx-24 mx-auto">
        <span className="text-[3rem] w-full text-center beforee relative">
          Contacts
        </span>
      </h1>

      <div className="w-full flex flex-col items-center md:px-24 px-10 mt-10">
        <div className="my-6">For more Queries, contact</div>
        <div className=" flex flex-wrap gap-4 justify-center">
          <div className="flex flex-col items-center h-64 aspect-square border justify-center rounded-lg">
            <span>Lipika Sharma</span>
            <span>9953483222</span>
          </div>
          <div className="flex flex-col items-center h-64 aspect-square border justify-center rounded-lg">
            <span>Praneya Arora</span>
            <span>7678623184</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
