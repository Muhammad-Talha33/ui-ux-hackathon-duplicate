import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { IoLocationSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#111111]">
      <div className="container px-6 py-8 mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div>
            <div className="text-xs font-medium text-white uppercase">
              <a
                href="/"
                className="cursor-pointer hover:text-blue-500"
              >
                <span>Find A Store</span>
              </a>
            </div>

            <a
              href="/join-us"
              className="block mt-5 text-sm font-medium text-white duration-700 dark:text-white hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
            >
              BECOME A MEMBER
            </a>
            <a
              href="/join-us" 
              className="block mt-3 text-sm font-medium text-white duration-700 dark:text-white hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
            >
              SIGN UP FOR EMAIL
            </a>
            <a
              href="/join-us"
              className="block mt-3 text-sm font-medium text-white duration-700 dark:text-white hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
            >
              Send Us Feedback
            </a>
            <a
              href="/join-us"
              className="block mt-3 text-sm font-medium text-white duration-700 dark:text-white hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
            >
              STUDENT DICOUNTS
            </a>
          </div>

          <div>
          <div className="text-xs font-medium text-white uppercase">
              <a
                href="/get-help" target="_blank"
                className="cursor-pointer hover:text-blue-500"
              >
                <span>Get Help</span>
              </a>
            </div>

            <a
              href="/get-help"
              className="block mt-5 text-sm font-medium text-[#7E7E7E] duration-700 dark:text-[#7E7E7E] hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
            >
              Order Status
            </a>
            <a
              href="/get-help"
              className="block mt-3 text-sm font-medium text-[#7E7E7E] duration-700 dark:text-[#7E7E7E] hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
            >
              Delivery
            </a>
            <a
              href="/get-help"
              className="block mt-3 text-sm font-medium text-[#7E7E7E] duration-700 dark:text-[#7E7E7E] hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
            >
              Returns
            </a>
            <a
              href="/get-help"
              className="block mt-3 text-sm font-medium text-[#7E7E7E] duration-700 dark:text-[#7E7E7E] hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
            >
              Payment Options
            </a>
            <a
              href="/get-help"
              className="block mt-3 text-sm font-medium text-[#7E7E7E] duration-700 dark:text-[#7E7E7E] hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
            >
              Contact Us On Nike.com Inquiries
            </a>
            <a
              href="/get-help"
              className="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-[#7E7E7E] hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
            >
              Contact Us On All Other Inquiries
            </a>
          </div>

          <div>
          <div className="text-xs font-medium text-white uppercase">
              <a
                href="/"
                className="cursor-pointer hover:text-blue-500"
              >
                <span>About Nike</span>
              </a>
            </div>

            <a
              href="#"
              className="block mt-5 text-sm font-medium text-[#7E7E7E] duration-700 dark:text-[#7E7E7E] hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
            >
              News
            </a>
            <a
              href="#"
              className="block mt-3 text-sm font-medium text-[#7E7E7E] duration-700 dark:text-[#7E7E7E] hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
            >
              Careers
            </a>
            <a
              href="#"
              className="block mt-3 text-sm font-medium text-[#7E7E7E] duration-700 dark:text-[#7E7E7E] hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
            >
              Investors
            </a>
            <a
              href="#"
              className="block mt-3 text-sm font-medium text-[#7E7E7E] duration-700 dark:text-[#7E7E7E] hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
            >
              Sustainability
            </a>
          </div>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            <a
              href="https://twitter.com/Nike"
              className="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="twitter"
            >
              <FaTwitter className="w-5 h-5 " />
            </a>

            <a
              href="https://www.facebook.com/nike/" target="_blank"
              className="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>

            <a
              href="https://www.youtube.com/user/nike" target="_blank"
              className="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Facebook"
            >
              <TfiYoutube className="w-5 h-5" />
            </a>

            <a
              href="https://www.instagram.com/nike/" target="_blank"
              className="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Facebook"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
          <div className="sm:flex sm:items-center sm:justify-evenly">
            <IoLocationSharp className="text-white" />
            <h3 className="mb-3 md:mb-0 md:my-10 text-white">India</h3>
            <p className="text-[#7E7E7E] lg:mx-6">
              © 2023 Nike, Inc. All Rights Reserved
            </p>
          </div>
          <div className="sm:flex sm:justify-between sm:items-center gap-10 xl:ml-64">
            <p className="text-[#7E7E7E] ">Guides</p>
            <p className="text-[#7E7E7E] ">Terms of Sale</p>
            <p className="text-[#7E7E7E] ">Terms of Use</p>
            <p className="text-[#7E7E7E] ">Nike Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
