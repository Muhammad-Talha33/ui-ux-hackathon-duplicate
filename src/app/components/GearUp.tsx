import React from "react";

const gearItems = [
  {
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: "₹ 3 895",
    categoryLine1: "Men's Short-Sleeve",
    categoryLine2: "Running Top",
    image: "/images/tshirt.png",
  },
  {
    name: "Nike Dri-FIT Challenger",
    price: "₹ 2 495",
    categoryLine1: "Men's 18cm (approx.) 2-",
    categoryLine2: "in-1 Versatile Shorts",
    image: "/images/short.png",
  },
  {
    name: "Nike Dri-FIT ADV Run Division",
    price: "₹ 5 295",
    categoryLine1: "Women's Long-Sleeve",
    categoryLine2: "Running Top",
    image: "/images/wtshirt.png",
  },
  {
    name: "Nike Fast",
    price: "₹ 3 795",
    categoryLine1: "Women's Mid-Rise 7/8",
    categoryLine2: "Running Leggings with Pockets",
    image: "/images/leggings.png",
  },
  // Add more if needed
];

export default function GearUp() {
  return (
    <div>
      <h1 className="text-[#111111] font-semibold sm:mx-[225px] mx-[112.5px] text-2xl mt-36 md:mt-20 text-center">
        Gear Up
      </h1>

      <div className="flex justify-center items-center flex-wrap gap-2">
        {gearItems.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col my-6 bg-white shadow-sm rounded-lg w-[300px]"
          >
            <div className="relative p-2.5 h-[293px] overflow-hidden rounded-xl bg-clip-border">
              <img
                src={item.image}
                alt={item.name}
                className="h-[300px] w-[300px] object-cover rounded-md hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
              />
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-slate-800 text-[14px] font-semibold">
                  {item.name}
                </p>
                <p className="text-[#111111] text-[15px] font-semibold">
                  {item.price}
                </p>
              </div>
              <p className="text-[#757575] text-[16px] leading-normal font-normal">
                {item.categoryLine1}
              </p>
              <p className="text-[#757575] text-[16px] leading-normal font-normal">
                {item.categoryLine2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
