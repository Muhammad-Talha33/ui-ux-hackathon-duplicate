import React, { Suspense } from "react";
import Products from "../components/Products";

export default function Women() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading products...</div>}>
    {/* <section className="text-gray-400 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className='text-3xl text-gray-600 font-semibold mb-7'>Women (11)</h1>
        <div className="flex flex-wrap m-4 lg:-m-4">
          <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
            <a className="block relative h-[348px] rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                src="/images/Rectangle3.png" />
            </a>
            <div className="mt-4">
              <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                Just In
              </h3>
              <h2 className="text-black title-font text-lg font-medium">
                Nike Air Force 1 PLT.AF.ORM
              </h2>
              <p className="mt-1">Women&apos;s Shoes</p>
              <p className="mt-1">1 Colour</p>
              <p className="mt-1 text-[#111111] text-[15px] font-medium">
                MRP : ₹ 8 695.00
              </p>
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
            <a className="block relative h-[348px] rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                src="/images/Rectangle5.png" />
            </a>
            <div className="mt-4">
              <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                Promo Exclusion
              </h3>
              <h2 className="text-black title-font text-lg font-medium">
                Air Jordan 1 Elevate Low
              </h2>
              <p className="mt-1">Women&apos;s Shoes</p>
              <p className="mt-1">1 Colour</p>
              <p className="mt-1 text-[#111111] text-[15px] font-medium">
                MRP : ₹ 11 895.00
              </p>
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
            <a className="block relative h-[348px] rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                src="/images/Rectangle6.png" />
            </a>
            <div className="mt-4">
              <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                Just In
              </h3>
              <h2 className="text-black title-font text-lg font-medium">
                Nike Standard Issue
              </h2>
              <p className="mt-1">Women&apos;s Basketball Jersey</p>
              <p className="mt-1">1 Colour</p>
              <p className="mt-1 text-[#111111] text-[15px] font-medium">
                MRP : ₹ 2 895.00
              </p>
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
            <a className="block relative h-[348px] rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                src="/images/Rectangle11.png" />
            </a>
            <div className="mt-4">
              <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                Just In
              </h3>
              <h2 className="text-black title-font text-lg font-medium">
                Nike One Leak Protection: Period
              </h2>
              <p className="mt-1">
                Women&apos;s Mid-Rise 18cm (approx.) Biker Shorts
              </p>
              <p className="mt-1">2 Colours</p>
              <p className="mt-1 text-[#111111] text-[15px] font-medium">
                MRP : ₹ 3 395.00
              </p>
            </div>
          </div>



          <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
            <a className="block relative h-[348px] rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                src="/images/Rectangle13.png" />
            </a>
            <div className="mt-4">
              <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                Just In
              </h3>
              <h2 className="text-black title-font text-lg font-medium">
                Nike Blazer Low Platform
              </h2>
              <p className="mt-1">Women&apos;s Shoes</p>
              <p className="mt-1">1 Colour</p>
              <p className="mt-1 text-[#111111] text-[15px] font-medium">
                MRP : ₹ 8 195.00
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
            <a className="block relative h-[348px] rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                src="/images/Rectangle14.png" />
            </a>
            <div className="mt-4">
              <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                Just In
              </h3>
              <h2 className="text-black title-font text-lg font-medium">
                Nike Air Force 1 &apos;07
              </h2>
              <p className="mt-1">Women&apos;s Shoe</p>
              <p className="mt-1">2 Colours</p>
              <p className="mt-1 text-[#111111] text-[15px] font-medium">
                MRP : ₹ 8 195.00
              </p>
            </div>
          </div>



          <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
            <a className="block relative h-[348px] rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                src="/images/Rectangle17.png" />
            </a>
            <div className="mt-4">
              <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                Just In
              </h3>
              <h2 className="text-black title-font text-lg font-medium">
                Nike Air Max SC
              </h2>
              <p className="mt-1">Women&apos;s Shoes</p>
              <p className="mt-1">2 Colours</p>
              <p className="mt-1 text-[#111111] text-[15px] font-medium">
                MRP : ₹ 5 995.00
              </p>
            </div>
          </div>




          <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
            <a className="block relative h-[348px] rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                src="/images/Rectangle20.png" />
            </a>
            <div className="mt-4">
              <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                Just In
              </h3>
              <h2 className="text-black title-font text-lg font-medium">
                Nike Alate All U
              </h2>
              <p className="mt-1">
                Women&apos;s Light-Support Lightly Lined U-Neck Printed Sports Bra
              </p>
              <p className="mt-1">1 Colour</p>
              <p className="mt-1 text-[#111111] text-[15px] font-medium">
                MRP : ₹ 2 195.00
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
            <a className="block relative h-[348px] rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                src="/images/Rectangle21.png" />
            </a>
            <div className="mt-4">
              <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                Just In
              </h3>
              <h2 className="text-black title-font text-lg font-medium">
                Nike Court Legacy Lift
              </h2>
              <p className="mt-1">Women&apos;s Shoes</p>
              <p className="mt-1">2 Colours</p>
              <p className="mt-1 text-[#111111] text-[15px] font-medium">
                MRP : ₹ 7 495.00
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
            <a className="block relative h-[348px] rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                src="/images/Rectangle22.png" />
            </a>
            <div className="mt-4">
              <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                Just In
              </h3>
              <h2 className="text-black title-font text-lg font-medium">
                Nike Swoosh
              </h2>
              <p className="mt-1">
                Women&apos;s Medium-support Padded Sports Bra Tank
              </p>
              <p className="mt-1">2 Colours</p>
              <p className="mt-1 text-[#111111] text-[15px] font-medium">
                MRP : ₹ 3 095.00
              </p>
            </div>
          </div>





          <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
            <a className="block relative h-[348px] rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                src="/images/Rectangle29.png" />
            </a>
            <div className="mt-4">
              <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                Just In
              </h3>
              <h2 className="text-black title-font text-lg font-medium">
                Nike Blazer Low &apos;77 Jumbo
              </h2>
              <p className="mt-1">Women&apos;s Shoes</p>
              <p className="mt-1">1 Colour</p>
              <p className="mt-1 text-[#111111] text-[15px] font-medium">
                MRP : ₹ 8 595.00
              </p>
            </div>
          </div>

        </div>
      </div>
    </section> */}
    <div>
    <Products />
    </div>
    </Suspense>
  );
}
