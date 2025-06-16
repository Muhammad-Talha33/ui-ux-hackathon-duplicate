"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../components/Products";
import { getCartItems } from "../actions/action";
import Link from "next/link";
import { CgChevronRight } from "react-icons/cg";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (validateForm()) {
          const orderData = {
            _type: "order",
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            address: formValues.address,
            city: formValues.city,
            zipCode: formValues.zipCode,
            phone: formValues.phone,
            email: formValues.email,
            cartItems: cartItems.map((item) => ({
              _type: "reference",
              _key: `${item._id}-${Date.now()}`,
              _ref: item._id,
            })),
            total: subTotal - discount,
            discount: discount,
            orderDate: new Date().toISOString(),
          };

          try {
            await client.create(orderData);

            //  Clear cart and discount from localStorage and React state
            localStorage.removeItem("cart");
            localStorage.removeItem("appliedDiscount");
            setCartItems([]);

            // Clear form fields
            setFormValues({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              address: "",
              zipCode: "",
              city: "",
            });

            // Clear validation errors too
            setFormErrors({
              firstName: false,
              lastName: false,
              email: false,
              phone: false,
              address: false,
              zipCode: false,
              city: false,
            });

            Swal.fire(
              "Success!",
              "Your order has been successfully created!",
              "success"
            );

            // Optional redirect
            // router.push("/thank-you");
          } catch (error) {
            Swal.fire(
              "Error",
              "Failed to create the order. Please try again.",
              "error"
            );
            console.error("Sanity error:", error);
          }
        } else {
          Swal.fire(
            "Error!",
            "Please fill in all the fields before proceeding.",
            "error"
          );
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href={"/cart"}
              className="text-[#666666] hover:text-black transition text-sm"
            >
              Cart
            </Link>
            <CgChevronRight />
            <span>CheckOut</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.productName}
                  className="text-black flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.productName}
                        width={50}
                        height={50}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="text-black flex-1">
                    <h3 className="text-sm font-medium">{item.productName}</h3>
                    <p className="text-xs text-gray-500">
                      Quantity: {item.inventory}
                    </p>
                  </div>

                  <p>₹{item.price * item.inventory}</p>
                </div>
              ))
            ) : (
              <p className="text-xs font-medium">No item in cart</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">
                Subtotal: <span className="font-medium">₹{subTotal}</span>
              </p>
              <p className="text-sm">
                Discount: <span className="font-medium">{discount}</span>
              </p>
              <p className="text-lg font-semibold">
                Total: ₹{subTotal.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold">Billing Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName"> First Name </label>
                <input
                  id="firstName"
                  placeholder="Enter Your First Name"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className="border border-black px-3 py-1 w-full"
                />
                {formErrors.firstName && (
                  <p className="text-sm text-red-500">first name is required</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName"> Last Name </label>
                <input
                  id="lastName"
                  placeholder="Enter Your Last Name"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  className="border border-black px-3 py-1 w-full"
                />
                {formErrors.lastName && (
                  <p className="text-sm text-red-500">last name is required</p>
                )}
              </div>

              <div>
                <label htmlFor="address"> Address </label>
                <input
                  id="address"
                  placeholder="Enter Your Address"
                  value={formValues.address}
                  onChange={handleInputChange}
                  className="border border-black px-3 py-1 w-full"
                />
                {formErrors.address && (
                  <p className="text-sm text-red-500">address is required</p>
                )}
              </div>

              <div>
                <label htmlFor="city"> City </label>
                <input
                  id="city"
                  placeholder="Enter Your City"
                  value={formValues.city}
                  onChange={handleInputChange}
                  className="border border-black px-3 py-1 w-full"
                />
                {formErrors.city && (
                  <p className="text-sm text-red-500">city is required</p>
                )}
              </div>

              <div>
                <label htmlFor="zipCode"> Zip Code </label>
                <input
                  id="zipCode"
                  placeholder="Enter Your Zip Code"
                  value={formValues.zipCode}
                  onChange={handleInputChange}
                  className="border border-black px-3 py-1 w-full"
                />
                {formErrors.zipCode && (
                  <p className="text-sm text-red-500">zip code is required</p>
                )}
              </div>

              <div>
                <label htmlFor="phone"> Phone Number </label>
                <input
                  id="phone"
                  placeholder="Enter Your Phone"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className="border border-black px-3 py-1 w-full"
                />
                {formErrors.phone && (
                  <p className="text-sm text-red-500">
                    phone number is required
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email"> Email </label>
                <input
                  id="email"
                  placeholder="Enter Your Email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className="border border-black px-3 py-1 w-full"
                />
                {formErrors.email && (
                  <p className="text-sm text-red-500">email is required</p>
                )}
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full h-12 bg-black hover:bg-gray-800 text-white"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
