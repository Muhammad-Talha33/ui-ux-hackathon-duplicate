import React, { Suspense } from "react";
import Products from "../components/Products";

export default function men() {
  return (
    <Suspense
      fallback={<div className="text-center py-20">Loading products...</div>}
    >
      {/* <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl text-gray-600 font-semibold mb-7">
            Men (16)
          </h1>
          <div className="flex flex-wrap m-4 lg:-m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
              <a className="block relative h-[348px] rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                  src="/images/Rectangle.png"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                  Just In
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Nike Air Force 1 Mid &apos;07
                </h2>
                <p className="mt-1">Men&apos;s Shoes</p>
                <p className="mt-1">1 Colour</p>
                <p className="mt-1 text-[#111111] text-[15px] font-medium">
                  MRP : ₹ 10 795.00
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
              <a className="block relative h-[348px] rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                  src="/images/Rectangle2.png"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                  Just In
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Nike Court Vision Low Next Nature
                </h2>
                <p className="mt-1">Men&apos;s Shoes</p>
                <p className="mt-1">1 Colour</p>
                <p className="mt-1 text-[#111111] text-[15px] font-medium">
                  MRP : ₹ 4 995.00
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
              <a className="block relative h-[348px] rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                  src="/images/Rectangle4.png"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                  Just In
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Nike Air Force 1 React
                </h2>
                <p className="mt-1">Men&apos;s Shoes</p>
                <p className="mt-1">1 Colour</p>
                <p className="mt-1 text-[#111111] text-[15px] font-medium">
                  MRP : ₹ 13 295.00
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
              <a className="block relative h-[348px] rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                  src="/images/Rectangle7.png"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                  Promo Exclusion
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Nike Dunk Low Retro SE
                </h2>
                <p className="mt-1">Men&apos;s Shoes</p>
                <p className="mt-1">1 Colour</p>
                <p className="mt-1 text-[#111111] text-[15px] font-medium">
                  MRP : ₹ 9 695.00
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
              <a className="block relative h-[348px] rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                  src="/images/Rectangle8.png"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                  Sustainable Materials
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Nike Dri-FIT UV Hyverse
                </h2>
                <p className="mt-1">
                  Men&apos;s Short-Sleeve Graphic Fitness Top
                </p>
                <p className="mt-1">1 Colour</p>
                <p className="mt-1 text-[#111111] text-[15px] font-medium">
                  MRP : ₹ 2 495.00
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
              <a className="block relative h-[348px] rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                  src="/images/Rectangle9.png"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                  Just In
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Nike Court Vision Low
                </h2>
                <p className="mt-1">Men&apos;s Shoes</p>
                <p className="mt-1">1 Colour</p>
                <p className="mt-1 text-[#111111] text-[15px] font-medium">
                  MRP : ₹ 5 695.00
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
              <a className="block relative h-[348px] rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                  src="/images/Rectangle10.png"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                  Just In
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Nike Dri-FIT Ready
                </h2>
                <p className="mt-1">Men&apos;s Short-Sleeve Fitness Top</p>
                <p className="mt-1">3 Colours</p>
                <p className="mt-1 text-[#111111] text-[15px] font-medium">
                  MRP : ₹ 2 495.00
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
              <a className="block relative h-[348px] rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                  src="/images/Rectangle15.png"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                  Just In
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Nike Pro Dri-FIT
                </h2>
                <p className="mt-1">Men&apos;s Tight-Fit Sleeveless Top</p>
                <p className="mt-1">1 Colour</p>
                <p className="mt-1 text-[#111111] text-[15px] font-medium">
                  MRP : ₹ 1 495.00
                </p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
              <a className="block relative h-[348px] rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                  src="/images/Rectangle16.png"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                  Just In
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Nike Dunk Low Retro
                </h2>
                <p className="mt-1">Men&apos;s Shoes</p>
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
                  src="/images/Rectangle18.png"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                  Just In
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Nike Dri-FIT UV Miler
                </h2>
                <p className="mt-1">Men&apos;s Short-Sleeve Running Top</p>
                <p className="mt-1">1 Colour</p>
                <p className="mt-1 text-[#111111] text-[15px] font-medium">
                  MRP : ₹ 1 695.00
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
              <a className="block relative h-[348px] rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                  src="/images/Rectangle23.png"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                  Just In
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Nike SB Zoom Janoski OG+
                </h2>
                <p className="mt-1">Shoes</p>
                <p className="mt-1">1 Colour</p>
                <p className="mt-1 text-[#111111] text-[15px] font-medium">
                  MRP : ₹ 8 595.00
                </p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
              <a className="block relative h-[348px] rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                  src="/images/Rectangle24.png"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                  Just In
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Nike Dri-FIT Run Division Rise 365
                </h2>
                <p className="mt-1">Men&apos;s Running Tank</p>
                <p className="mt-1">2 Colours</p>
                <p className="mt-1 text-[#111111] text-[15px] font-medium">
                  MRP : ₹ 3 495.00
                </p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
              <a className="block relative h-[348px] rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                  src="/images/Rectangle25.png"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                  Just In
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Nike Dri-FIT Challenger
                </h2>
                <p className="mt-1">
                  Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts
                </p>
                <p className="mt-1">1 Colour</p>
                <p className="mt-1 text-[#111111] text-[15px] font-medium">
                  MRP : ₹ 2 495.00
                </p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
              <a className="block relative h-[348px] rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                  src="/images/Rectangle26.png"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                  Just In
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Jordan Series ES
                </h2>
                <p className="mt-1">Men&apos;s Shoes</p>
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
                  src="/images/Rectangle29.png"
                />
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
            <div className="lg:w-1/4 md:w-1/2 p-4 w-[348px]">
              <a className="block relative h-[348px] rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-[348px] h-[348px] block hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
                  src="/images/Rectangle30.png"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-[#9E3500] text-[15px] tracking-widest title-font mb-1">
                  Just In
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Nike SB Force 58
                </h2>
                <p className="mt-1">Skate Shoe</p>
                <p className="mt-1">1 Colour</p>
                <p className="mt-1 text-[#111111] text-[15px] font-medium">
                  MRP : ₹ 5 995.00
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
