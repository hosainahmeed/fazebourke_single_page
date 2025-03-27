'use client';
import React from 'react';
import HeadLine from '../HeadLine';
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
      className="relative flex items-center flex-col py-12 lg:py-28 xl:py-48 justify-center px-2"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-transparent to-black"></div>
      <div className="w-fit z-[999]">
        <HeadLine
          title="How It Works"
          description="We break down the process into simple steps to ensure seamless execution, from start to finish."
        />
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
      <div className="mt-6">
        <Link
          href="https://www.facebook.com/messages/t/betcollective"
          target="_blank"
          rel="noopener noreferrer"
          className="!underline cursor-pointer hover:text-blue-500"
        >
          <motion.button className="bg-[#0F14B6] mt-6 mb-12 hover:cursor-pointer hover:bg-[#0F14B6] text-white font-bold py-2 sm:py-3 md:py-4 px-4 w-fit sm:w-auto md:px-6 lg:px-12 rounded-md text-sm sm:text-base md:text-lg duration-300 relative overflow-hidden hover:scale-102 transition-all">
            MESSAGE US NOW
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default WorkProcess;
