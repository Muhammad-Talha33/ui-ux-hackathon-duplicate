"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { SiNike, SiJordan } from "react-icons/si";
import { TbHeart} from "react-icons/tb";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { FaCartShopping } from "react-icons/fa6";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);

    // Update the URL dynamically with the search term
    router.push(`/products?search=${encodeURIComponent(e.target.value)}`);}

  return (
    <header className="bg-white shadow-sm border-b flex flex-col">
    {/* Top Bar */}
    <div className="text-black py-2 text-sm flex-wrap justify-between items-center gap-4 px-4 md:px-8 hidden md:flex">
      <div className="text-center flex-1">
        <a href="/" className="cursor-pointer">
        <SiJordan className="text-black" />
        </a>
      </div>
  
      <div className="flex items-center gap-2">
        <a href="/" className="text-black text-sm font-normal hover:underline">
          Find A Store 
        </a>
        |
      </div>
  
      <div className="flex items-center gap-2">
        <a href="/get-help" className="text-black text-sm font-normal hover:underline">
          Help
        </a>
        |
      </div>
  
      <div className="flex items-center gap-2">
        <a href="/join-us" className="text-black text-sm font-normal hover:underline">
          Join Us
        </a>
        |
      </div>
  
      <div className="flex items-center gap-2">
        <a href="/signin" className="text-black text-sm font-normal hover:underline">
          Sign In
        </a>
        |
      </div>
    </div>
  
    {/* Main Navigation */}
    <div className="flex justify-between items-center px-4 sm:px-10 py-4">
      {/* Logo */}
      <h1 className="text-3xl sm:text-5xl font-bold text-black">
        <a href="/">
          <SiNike />
        </a>
      </h1>
  
      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <a href="/cart">
      <FaCartShopping className="text-black text-2xl hover:text-amber-500 cursor-pointer mr-4 relative"/>
        </a>
        {isMenuOpen ? (
          <HiOutlineX
            className="text-black text-3xl cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="text-black text-3xl cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>
  
      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 xl:ml-40 items-center absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent z-10 shadow-md md:shadow-none p-4 md:p-0`}
      >
         <div className="flex items-center bg-slate-100 w-full px-3 py-2 md:hidden lg:hidden">
          <CiSearch className="text-black font-semibold text-lg" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch} // Call the search handler
            className="bg-slate-100 outline-none text-sm text-black"
          />
        </div>
        <a href="/products" className="text-black hover:text-slate-600 hover:underline font-semibold">
          New & Featured
        </a>
        <a href="/men" className="text-black hover:text-slate-600 hover:underline font-semibold">
          Men
        </a>
        <a href="/women" className="text-black hover:text-slate-600 hover:underline font-semibold">
          Women
        </a>
        <a href="/signin" className="text-black hover:text-slate-600 hover:underline font-semibold md:hidden lg:hidden">
         Sign in
        </a>
        <a href="/join-us" className="text-black hover:text-slate-600 hover:underline font-semibold md:hidden lg:hidden">
         Join Us
        </a>
      </nav>
  
      {/* Search & Icons */}
      <div className="hidden md:flex items-center space-x-4 sm:space-x-6">
        <div className="hidden lg:flex items-center bg-slate-100 rounded-[100px] px-3 py-2">
          <CiSearch className="text-black font-semibold text-lg" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch} // Call the search handler
            className="bg-slate-100 outline-none text-sm text-black"
          />
        </div>
        <a href="/cart">
        <TbHeart className="text-black text-xl sm:text-2xl hover:text-amber-500 cursor-pointer" />
        </a>
        <a href="/cart">

        <FaCartShopping className="text-black text-xl sm:text-2xl hover:text-amber-500 cursor-pointer" />
        </a>
      </div>
    </div>
  </header>
  
  );
}
