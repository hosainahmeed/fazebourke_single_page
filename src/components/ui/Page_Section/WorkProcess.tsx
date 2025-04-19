'use client';
import React from 'react';
import Card from '../Card';
import { motion } from 'framer-motion';
import Link from 'next/link';
function WorkProcess() {
  const data = [
    {
      id: 1,
      title: 'Complete Application Form',
      description: `Register to become a partner by filling out our form (valid ID is required)`,
    },
    {
      id: 2,
      title: 'We Create Your Accounts',
      description: `Sit back and relax, no need to do anything`,
    },
    {
      id: 3,
      title: 'Payment is sent!',
      description: `Once approved, $200 will be sent instantly via PayID or OSKO  💰`,
    },
  ];
  return (
    <div
      style={{
        backgroundImage: `url('/step_bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        // backgroundAttachment: 'fixed',
        backfaceVisibility: 'hidden',
      }}
      className="relative flex items-center gap-12 md:gap-24 justify-between flex-col py-8 md:pt-28 md:pb-16 px-2"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-transparent to-black"></div>
      <div className="flex items-center justify-center flex-col">
        <div className="w-fit z-[999]">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-center text-white  bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            How It Works
          </motion.h1>
          <motion.h1
            className="text-xl font-normal mt-3 text-center mb-8 text-white  bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            3 simple steps
          </motion.h1>
        </div>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {data.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
      <div>
        <Link
          href="https://m.me/betcollectiveFB"
          target="_blank"
          rel="noopener noreferrer"
          className="!underline cursor-pointer hover:text-blue-500"
        >
          <motion.button className="bg-[#F97316] mt-6 mb-12 hover:cursor-pointer hover:bg-[#F97316] text-white font-bold py-2 sm:py-3 md:py-4 px-4 w-fit sm:w-auto md:px-6 lg:px-12 rounded-md text-xl sm:text-xl md:text-2xl duration-300 relative overflow-hidden hover:scale-102 transition-all">
            MESSAGE US NOW
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default WorkProcess;
