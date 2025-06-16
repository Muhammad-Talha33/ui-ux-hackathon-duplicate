import React from "react";

const airMaxProducts = [
  {
    name: "Nike Air Max Pulse",
    price: "₹ 13 995",
    gender: "Women's Shoes",
    image: "/images/shoes.png",
  },
  {
    name: "Nike Air Max Pulse",
    price: "₹ 13 995",
    gender: "Men's Shoes",
    image: "/images/shoes.png",
  },
  {
    name: "Nike Air Max Pulse",
    price: "₹ 13 995",
    gender: "Women's Shoes",
    image: "/images/shoes2.png",
  },
  // Add more items here if needed
];

export default function BestOfAirMax() {
  return (
    <div className="my-24 lg:my-32">
      <h1 className="text-[#111111] font-semibold text-center md:text-pretty text-2xl md:text-3xl mt-20">
        Best of Air Max
      </h1>

      <div
        className="flex justify-center items-center flex-wrap gap-4"
        id="Air-Max"
      >
        {airMaxProducts.map((product, index) => (
          <div
            key={index}
            className="relative flex flex-col my-6 bg-white shadow-sm rounded-lg w-96"
          >
            <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
              <img
                src={product.image}
                alt={`${product.name} - ${product.gender}`}
                className="h-full w-full object-cover rounded-md hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer"
              />
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-slate-800 text-[15px] font-semibold">
                  {product.name}
                </p>
                <p className="text-[#111111] text-[15px] font-semibold">
                  {product.price}
                </p>
              </div>
              <p className="text-[#757575] leading-normal font-normal">
                {product.gender}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
