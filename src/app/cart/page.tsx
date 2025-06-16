"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../components/Products";
import { getCartItems, removeFromCart } from "../actions/action";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setCartItems(getCartItems());
    setLoading(false)
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed", "success");
      }
    });
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const router = useRouter();

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed && cartItems.length > 0) {
        Swal.fire("Success", "Your order has been successfully processed", "success");
        router.push("/checkout")
        setCartItems([]);
      } else{
        Swal.fire("Error", "Please add items to your cart before proceeding to checkout", "error");
      }
    });

  };

  if (loading) {
    return (
      <div className="text-center text-4xl h-full py-14 my-28 text-black">
        Loading...
      </div>
    );
  }

  return (
    <div className="grid sm:px-10 md:grid-cols-2 lg:px-20 xl:px-32 lg:mb-10">
      <div className="px-4 pt-8">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.productName} className="flex flex-col rounded-lg bg-white sm:flex-row">
              <img className="m-2 w-[150px] rounded-md border object-cover object-center" src={item.imageUrl} alt={item.productName} />
              <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold text-[#111111]">{item.productName}</span>
                <span className="text-[#757575]">{item.category}</span>
                <span className="text-[#757575]">Quantity: {item.inventory}</span>
                <p className="text-[15px] text-[#111111]">MRP: ₹{item.price.toFixed(2)}</p>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleRemove(item.productName)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700 duration-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl text-[#111111]">Your cart is empty!</p>
        )}
      </div>

      <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
        <p className="text-[21px] font-medium text-[#111111]">Summary</p>
        <div className="mt-6 py-2">
          <div className="flex items-center justify-between">
            <p className="text-[15px] font-medium text-[#111111]">Subtotal</p>
            <p className="text-[#111111] text-sm">₹ {calculatedTotal().toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Estimated Delivery & Handling</p>
            <p className="text-[#111111]">Free</p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between border-t">
          <p className="text-sm font-medium text-gray-900">Total</p>
          <p className="text-sm text-gray-900">₹ {calculatedTotal().toFixed(2)}</p>
        </div>

        <div className="flex justify-center items-center border-t">
          <button
            onClick={handleProceed}
            className="mt-10 mb-8 rounded-[30px] bg-black px-6 py-3 font-medium text-white hover:bg-slate-600 duration-700"
          >
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
