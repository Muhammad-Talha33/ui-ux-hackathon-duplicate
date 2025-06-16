import React from "react";

export default function Featured() {
  return (
    <div className="text-black w-full -my-10 md:my-20">
      <h3 className="font-semibold md:mx-20 md:text-[23px] text-2xl text-center md:text-left">Featured</h3>

      <div className="h-auto flex justify-center items-center">
        <img src="/images/featured.png" alt="" className="mt-5" />
      </div>

      <div className="text-center text-black my-10">
        <h1 className="md:text-[54px] text-2xl font-medium">STEP INTO WHAT FEELS GOOD</h1>
        <p className="text-[15px] my-4">
          Cause everyone should know the feeling of running in that perfect
          pair
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 -mt-2 md:-my-0">
        <a href="/snkrs" target="_blank">
        <button className="text-white bg-black b p-3 hover:bg-blue-500">Find Your Shoe</button>
        </a>

      </div>
    </div>
  );
}
