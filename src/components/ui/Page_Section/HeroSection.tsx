'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Lock, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import IconImage from '@/components/minimul/IconImage';
import Link from 'next/link';
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.08,
        duration: 0.8,
      },
    }),
  };

  const iconVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 1.1 + i * 0.15,
      },
    }),
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b  from-gray-900 py-12 via-gray-800 to-black md:pb-28 flex items-center justify-center">
      <div className=" w-full pt-12 md:pb-28 pb-12  flex items-center px-4 sm:px-6 md:px-8 lg:px-16 md:py-12 relative overflow-hidden">
        {isLoaded && (
          <>
            {/* Animated background elements - more visible on larger screens */}
            <motion.div
              className="absolute w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-blue-500 opacity-10 sm:opacity-20"
              animate={{
                x: [0, 100, 200, 100, 0],
                y: [0, 50, 0, -50, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{ top: '20%', left: '10%' }}
            />
            <motion.div
              className="absolute w-1 sm:w-2 h-1 sm:h-2 rounded-full bg-green-400 opacity-10 sm:opacity-20"
              animate={{
                x: [0, -100, 0, 100, 0],
                y: [0, 100, 200, 100, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{ top: '60%', left: '5%' }}
            />
            <motion.div
              className="absolute w-2 sm:w-4 h-2 sm:h-4 rounded-full bg-[#F97316] opacity-5 sm:opacity-10"
              animate={{
                x: [0, 150, 0, -150, 0],
                y: [0, -100, -200, -100, 0],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{ top: '30%', left: '30%' }}
            />
          </>
        )}

        <div className="container w-full mx-auto relative">
          <div className="md:mb-16 lg:mb-16 xl:mb-28">
            <IconImage />
          </div>
          {/* Logo and Brand Name - Improved spacing */}
          {/* <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 15,
            duration: 0.8,
          }}
          className="flex items-center mb-12 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <motion.div
            className="bg-white rounded-full p-2 md:p-3 mr-3  md:mr-4 relative"
            whileHover={{
              scale: 1.1,
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Image
              src="/brand_icon.svg"
              alt="Logo"
              width={windowWidth < 768 ? 24 : windowWidth < 1024 ? 32 : 40}
              height={windowWidth < 768 ? 24 : windowWidth < 1024 ? 32 : 40}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
            <motion.div
              className="absolute -inset-1 rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                background:
                  'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)',
                zIndex: -1,
              }}
            />
          </motion.div>
          <motion.h2
            className="text-white font- text-lg sm:text-xl md:text-2xl font-bold "
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            BET COLLECTIVE
          </motion.h2>
        </motion.div> */}
          <div className="z-10 relative pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col z-[888] !pointer-events-none md:flex-row items-start"
            >
              {/* Main content column - better responsive margins and sizing */}
              <div className="w-full md:w-3/5 lg:w-1/2">
                <div className="overflow-hidden mb-4">
                  <motion.h1
                    className="text-white hidden md:block text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.8,
                      type: 'spring',
                      stiffness: 50,
                      damping: 10,
                    }}
                  >
                    {'LEND YOUR SPORTS'.split('').map((char, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        style={{
                          display: char === ' ' ? 'inline' : 'inline-block',
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                    <br />
                    {'BETTING ACCOUNTS'.split('').map((char, i) => (
                      <motion.span
                        key={i + 100}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        style={{
                          display: char === ' ' ? 'inline' : 'inline-block',
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.h1>
                  <motion.h1 className="text-white uppercase md:hidden text-3xl mt-12 font-bold leading-tight">
                    Lend Your Sports Betting Accounts
                  </motion.h1>
                </div>

                {/* CTA text - improved responsive scaling */}

                <motion.h2
                  className="text-green-400  text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  style={{
                    textShadow: '0 0 15px rgba(74, 222, 128, 0.4)',
                  }}
                >
                  GET PAID $200 TODAY
                </motion.h2>

                {/* Subtext - better responsive text size */}
                <motion.p
                  className="text-white text-base pr-38 lg:pr-0 mt-6 md:mt-12 sm:text-xl md:text-base max-w-screen-sm  lg:text-2xl mb-4 sm:mb-5 md:mb-6 lg:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  Trusted By 500+ Aussies.
                  <br className="sm:block hidden" /> Safe. Secure. Hassle-Free.
                </motion.p>

                {/* CTA Button - better responsive sizing and mobile full-width */}
                <Link href="https://m.me/betcollectiveFB" target="_blank">
                  <motion.button
                    className="bg-[#F97316] cursor-pointer pointer-events-auto  md:mt-0 mt-3 text-xl mb-3 uppercase hover:bg-[#F97316] text-white font-bold py-2 sm:py-3 md:py-4 px-4 w-fit sm:w-auto md:px-6 lg:px-12 rounded-md  md:text-2xl duration-300 relative overflow-hidden hover:scale-102 transition-all"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      className="absolute inset-0 uppercase bg-[#F97316]"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    Get Paid $200 Now
                  </motion.button>
                </Link>

                {/* Trust indicators - improved responsive spacing and icon sizing */}
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-6 mt-1 sm:mt-5 md:mt-6 lg:mt-8">
                  {[
                    {
                      icon: (
                        <Shield
                          className="mr-1 md:mr-2"
                          size={
                            windowWidth < 640 ? 14 : windowWidth < 768 ? 16 : 20
                          }
                        />
                      ),
                      text: 'Verified',
                    },
                    {
                      icon: (
                        <Lock
                          className="mr-1 md:mr-2"
                          size={
                            windowWidth < 640 ? 14 : windowWidth < 768 ? 16 : 20
                          }
                        />
                      ),
                      text: 'Encrypted',
                    },
                    {
                      icon: (
                        <Zap
                          className="mr-1 md:mr-2"
                          size={
                            windowWidth < 640 ? 14 : windowWidth < 768 ? 16 : 20
                          }
                        />
                      ),
                      text: 'Fast Payouts',
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center text-white text-base"
                      custom={i}
                      variants={iconVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                    >
                      {item.icon}
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Desktop image - improved responsive positioning and appearance on medium screens */}
          <motion.div
            className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-5/12 sm:w-1/2 lg:w-1/2 h-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              x: isLoaded ? mousePosition.x * 0.02 : 0,
              y: isLoaded ? mousePosition.y * 0.01 : 0,
            }}
          >
            <div className="relative w-full h-full">
              <motion.div
                className="absolute right-12 sm:right-16 md:right-20 lg:right-32 xl:right-40 top-1/2 transform -translate-y-1/2 w-2 sm:w-3 md:w-4 lg:w-5 xl:w-6 h-2 sm:h-3 md:h-4 lg:h-5 xl:h-6 rounded-full bg-blue-100"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />

              <motion.div
                className="absolute right-6 sm:right-8  md:right-12 lg:right-16 xl:right-20 bottom-20 sm:bottom-24 md:bottom-28 lg:bottom-32 xl:bottom-40 w-2 sm:w-3 md:w-3 lg:w-4 h-2 sm:h-3 md:h-3 lg:h-4 rounded-full bg-white"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />

              {/* Main image - better responsive sizing */}
              <motion.div
                className="absolute right-4  sm:right-8 md:right-12 lg:right-16 xl:right-24 top-1/2 transform -translate-y-1/2"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.5))',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.6,
                    type: 'spring',
                    stiffness: 50,
                  }}
                >
                  <Image
                    src="/Img.svg"
                    alt="Horse Racing"
                    width={
                      windowWidth < 640
                        ? 200
                        : windowWidth < 768
                        ? 240
                        : windowWidth > 1650
                        ? 380
                        : 500
                    }
                    height={
                      windowWidth < 640
                        ? 200
                        : windowWidth < 768
                        ? 240
                        : windowWidth > 1024
                        ? 300
                        : 450
                    }
                    className="object-contain   !w-[400px]  !h-[400px] xl:!w-[450px] xl:!h-[450px] "
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile reviews section - better spacing and improved for small screens */}
          <div className="block w-fit overflow-hidden lg:hidden mt-6">
            <motion.div className="flex items-center  h-16 sm:mb-2">
              <motion.div
                className=" rounded-full w-16 h-full  mr-2"
                whileHover={{
                  boxShadow: '0 0 10px rgba(59, 130, 246, 0.7)',
                }}
              >
                <Image
                  src="/_Facebook.svg"
                  alt="Facebook"
                  width={132}
                  height={132}
                  className="w-full h-full"
                />
              </motion.div>
              <span className="text-white text-base  leading-4">
                Facebook Rating
                <div className="flex pr-1 items-center justify-between">
                  <div className="flex w-full justify-between text-yellow-400">
                    {['★', '★', '★', '★', '★'].map((star, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + i * 0.1, duration: 0.3 }}
                        whileHover={{
                          scale: 1.3,
                          color: i === 4 ? '#FCD34D' : '#FCD34D',
                          textShadow: '0 0 8px rgba(252, 211, 77, 0.8)',
                        }}
                        className="text-base leading-4 "
                        style={{
                          textShadow: '0 0 15px rgba(74, 222, 128, 0.4)',
                        }}
                      >
                        {star}
                      </motion.span>
                    ))}
                  </div>
                  <span className="text-white ml-2 text-sm">4.9/5</span>
                </div>
                <Link
                  href="https://www.facebook.com/betcollectiveFB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center cursor-pointer mt-2"
                >
                  <span className="text-xs !z-[999] leading-4 underline">
                    Why People Trust Us
                  </span>
                </Link>
              </span>
            </motion.div>
          </div>

          {/* Desktop reviews section - improved responsive positioning */}
          <motion.div
            className="hidden absolute left-1/2  -bottom-12 xl:bottom-0 xl:transform xl:-translate-x-1/2 lg:flex flex-col xl:items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div className="flex h-18 items-center overflow-hidden mb-1 md:mb-2">
              <motion.div
                className="bg-[#0967FF] rounded-full w-18 h-full flex items-center justify-center mr-3"
                whileHover={{
                  boxShadow: '0 0 10px rgba(59, 130, 246, 0.7)',
                }}
              >
                <Image
                  src="/_Facebook.svg"
                  alt="Facebook"
                  width={windowWidth < 1024 ? 20 : 30}
                  height={windowWidth < 1024 ? 20 : 30}
                  className="w-full h-full"
                />
              </motion.div>
              <span className="text-white leading-4 text-sm md:text-base lg:text-lg">
                Facebook Rating
                <div className="flex justify-between overflow-hidden items-center">
                  <div className="flex justify-between  w-full font-sm text-yellow-400">
                    {['★', '★', '★', '★', '★'].map((star, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + i * 0.1, duration: 0.3 }}
                        whileHover={{
                          scale: 1.3,
                          color: i === 4 ? '#FCD34D' : '#FCD34D',
                          textShadow: '0 0 8px rgba(252, 211, 77, 0.8)',
                        }}
                        className="text-sm md:text-base lg:text-lg xl:text-xl"
                        style={{
                          textShadow: '0 0 15px rgb(251, 199, 1,0.8)',
                        }}
                      >
                        {star}
                      </motion.span>
                    ))}
                  </div>
                  <span className="text-white w-full ml-1 text-xs md:text-sm leading-4 lg:text-sm">
                    4.9 / 5
                  </span>
                </div>
                <Link
                  href="https://www.facebook.com/betcollectiveFB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mt-2"
                >
                  <span className="text-sm underline !z-[999] !cursor-pointer leading-4">
                    Why People Trust Us
                  </span>
                </Link>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
