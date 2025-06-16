import React from 'react';

const categories = [
  {
    title: 'Icons',
    items: ['Air Force 1', 'Huarache', 'Air Max 90', 'Air Max 95'],
  },
  {
    title: 'Shoes',
    items: ['All Shoes', 'Custom Shoes', 'Jordan Shoes', 'Running Shoes'],
  },
  {
    title: 'Clothing',
    items: ['All Clothing', 'Modest Wear', 'Hoodies & Pullovers', 'Shirts & Tops'],
  },
  {
    title: "Kids'",
    items: [
      'Infant & Toddler Shoes',
      "Kids' Shoes",
      "Kids' Jordan Shoes",
      "Kids' Basketball Shoes",
    ],
  },
];

export default function Category() {
  return (
    <section className="text-black body-font">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.title}>
              <h2 className="text-sm font-semibold tracking-widest text-center text-black mb-4 transform transition-transform duration-300 hover:scale-110 cursor-pointer">
                {category.title}
              </h2>
              <nav className="flex flex-col items-center space-y-3 text-[#757575] text-sm">
                {category.items.map((item) => (
                  <button
                    key={item}
                    className="hover:text-black transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
