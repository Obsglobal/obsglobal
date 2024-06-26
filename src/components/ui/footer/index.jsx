import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-darkside text-primary py-12 md:py-10">
      <div className="flex flex-col">
        <div className="flex lg:flex-row flex-col items-start py-10 justify-between lg:gap-0 gap-10 px-6 lg:px-24">
          <div className="flex w-full lg:w-[30%] gap-2 flex-col">
            <span className="uppercase font-normal text-3xl">obsglobal</span>
            <span className="font-medium lg:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ornare cursus sed nunc eget dictum Sed ornare cursus sed nunc eget
              dictumd nunc eget dictum Sed ornare cursus sed nunc eget dictum .
            </span>
          </div>
          <div className="flex flex-col font-medium gap-2 items-start">
            <span className="text-2xl">Quick Links</span>
            <div className="flex flex-col items-start text-base">
              <Link href="/">Home</Link>
              <Link href="/for-sale">For Sale</Link>
              <Link href="/for-rent">For Rent</Link>
              <Link href="/request">Request</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col font-medium gap-2 items-start">
            <span className="text-2xl">Our Socials</span>
            <div className="flex flex-col text-base items-start">
              <Link href="/">Facebook</Link>
              <Link href="/">Instagram</Link>
              <Link href="/">X</Link>
            </div>
          </div>
        </div>
      </div>
      <span className="px-7 md:px-6 lg:px-24">Copyright @OBSGLOBAL 2024</span>
    </div>
  );
};

export default Footer;
