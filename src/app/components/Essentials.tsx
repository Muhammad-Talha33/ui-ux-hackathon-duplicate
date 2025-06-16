import React from "react";

export default function Essentials() {
  return (
    <div className="text-black w-full my-20">
      <h3 className="font-semibold md:mx-28 text-center text-2xl md:text-[23px]">Don&apos;t Miss</h3>

      <div className=" flex justify-center items-center">
        <img src="/images/dont-miss.png" alt="" className="mt-5" />
      </div>

      <div className="text-center text-black my-10">
        <h1 className="md:text-[52px] text-2xl font-medium">FLIGHT ESSENTIALS</h1>
        <p className="text-[15px] font-normal my-4 mx-2">
          Your built-to-last, all-week wears—but with style only Jordan Brand
          can deliver.
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 md:-mt-0 -mt-6">
        <a href="/products" target="_blank">
        <button className="text-white bg-black b px-6 py-3 hover:bg-blue-500">Shop</button>
        </a>
      </div>

      {/* <div className="my-16"> */}
        {/* <h3 className="font-semibold lg:mx-[140px] mx-[70px]  text-[23px]">
          The Essentials
        </h3> */}

        {/* <div className="flex justify-center items-center flex-wrap "> */}
          {/* <!-- Card Component 1 --> */}
          {/* <div className="relative flex flex-col my-6 bg-white shadow-sm  rounded-lg w-[440px]">
            <div className="relative p-2.5 h-[540px] overflow-hidden rounded-xl bg-clip-border">
              <img
                src="/images/essentials (1).png"
                alt="card-image"
                className="h-[540px] w-[440px] object-cover rounded-md hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
              />
            </div>
          </div> */}

          {/* <!-- Card Component 2 --> */}
{/*        
           <div className="relative flex flex-col my-6 bg-white shadow-sm  rounded-lg w-[440px]">
            <div className="relative p-2.5 h-[540px] overflow-hidden rounded-xl bg-clip-border">
              <img
                src="/images/essentials (2).png"
                alt="card-image"
                className="h-[540px] w-[440px] object-cover rounded-md hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
              />
            </div>
          </div> */}

          {/* <!-- Card Component 3 --> */}
            
             {/* <div className="relative flex flex-col my-6 bg-white shadow-sm  rounded-lg w-[440px]">
            <div className="relative p-2.5 h-[540px] overflow-hidden rounded-xl bg-clip-border">
              <img
                src="/images/essentials (3).png"
                alt="card-image"
                className="h-[540px] w-[440px] object-cover rounded-md hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
              />
            </div>
          </div> */}

          {/* <!-- Add more card components here --> */}
        {/* </div> */}
      {/* </div> */}
    </div>
  );
}
