'use client';
import React from 'react';
import Image from 'next/image';
import img from '@/../public/sitting-person.svg';
import Link from 'next/link';
import { motion } from 'framer-motion';

function MessageSection() {
  return (
    <div className="px-4 bg-gradient-to-b from-[#16222E] to-[#5E7893] sm:px-6 md:px-8 lg:px-12 py-12 md:py-28 overflow-hidden">
      <div className="container mx-auto overflow-hidden sm:flex-row flex-col-reverse  rounded-md xl:rounded-2xl py-6 px-4 md:px-8 lg:px-12 xl:px-24 relative flex  items-center justify-between bg-[#101828]">
        <div className="gradient-ellipse"></div>
        <div className="w-full md:flex-1 text-left">
          <h1 className="text-white text-2xl sm:text-2xl sm:text-start text-center !z-[999] relative md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
            Join 500+ Aussies <br /> Become a partner today!
          </h1>
          <div className="flex flex-col items-center sm:items-start">
            <Link
              href="https://m.me/betcollectiveFB"
              target="_blank"
              rel="noopener noreferrer"
              className="!underline cursor-pointer  hover:text-blue-500"
            >
              <motion.button
                className="bg-[#F97316] text-xl mt-6  uppercase hover:cursor-pointer hover:bg-[#F97316] text-white font-bold py-2 sm:py-3 md:py-4 px-4 w-fit sm:w-auto md:px-6 lg:px-12 rounded-md  md:text-2xl duration-300 relative overflow-hidden hover:scale-102 transition-all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 uppercase bg-[#21f916]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                MESSAGE US NOW
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="w-full md:flex-1 relative z-[999] flex items-center justify-center -mt-3 md:mt-0">
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
