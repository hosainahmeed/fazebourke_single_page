import React from 'react';
import Image from 'next/image';
import img from '@/../public/sitting-person.svg';
import Link from 'next/link';

function MessageSection() {
  return (
    <div className="px-4 bg-gradient-to-b from-[#16222E] to-[#5E7893] sm:px-6 md:px-8 lg:px-12 py-12 md:py-28 overflow-hidden">
      <div className="container mx-auto overflow-hidden sm:flex-row flex-col-reverse rounded-md xl:rounded-2xl py-6 px-4 md:px-8 lg:px-12 xl:px-24 relative flex  items-center justify-between bg-[#101828]">
        <div className="gradient-ellipse"></div>
        <div className="flex-1 text-left">
          <h1 className="text-white text-lg sm:text-2xl !z-[999] relative md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
            Join 500+ Aussies <br /> “Become a partner today!”
          </h1>
          <Link
            href="https://www.facebook.com/messages/t/betcollective"
            target="_blank"
            rel="noopener noreferrer"
            className="!underline cursor-pointer hover:text-blue-500"
          >
            <button className="uppercase bg-[#F97316] font-semibold xl:text-2xl px-4 py-2 mt-4 md:px-6 md:py-3 rounded-md text-white  sm:text-sm md:text-md transition-transform transform hover:scale-105">
              MESSAGE US NOW
            </button>
          </Link>
        </div>

        <div className="flex-1 relative z-[999] flex items-center justify-center mt-6 md:mt-0">
          <Image
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
            src={img}
            alt="Sitting person"
            width={320}
            height={320}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default MessageSection;
