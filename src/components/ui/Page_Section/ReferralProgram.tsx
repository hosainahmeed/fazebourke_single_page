'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';

type ReferralStepProps = {
  number?: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  alignment: 'left' | 'right';
  isMobile?: boolean;
};

const ReferralStep = ({
  number,
  title,
  description,
  icon,
  alignment,
  isMobile,
}: ReferralStepProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 'some',
    margin: '0px 0px -100px 0px',
  });

  const desktopVariants = {
    hidden: {
      opacity: 0,
      x: alignment === 'left' ? -50 : 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // If mobile, use empty variants (no animation)
  const mobileVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };

  const mobileChildVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial={isMobile ? 'visible' : 'hidden'}
      animate={isMobile ? 'visible' : isInView ? 'visible' : 'hidden'}
      variants={isMobile ? mobileVariants : desktopVariants}
      className={`flex items-center my-12  ${
        alignment === 'left' ? 'md:justify-end md:pr-12 pr-4' : 'md:pl-12 pl-4'
      } max-w-full`}
    >
      <div
        className={`  ${isMobile && icon ? 'hidden' : ''} ${
          isMobile ? 'backdrop-blur-sm p-6 rounded-xl shadow-lg border' : ''
        } border-blue-500/20 hover:border-blue-500/50 ml-2 transition-all duration-300 max-w-md w-full`}
      >
        <motion.div
          className="flex justify-center mb-8"
          variants={isMobile ? mobileChildVariants : childVariants}
        >
          <div className="text-blue-500 bg-white p-4 rounded-md">{icon}</div>
        </motion.div>
        <motion.h2
          className="font-bold text-lg xl:text-3xl mb-2 bg-gradient-to-r from-white to-purple-600 text-transparent bg-clip-text"
          variants={isMobile ? mobileChildVariants : childVariants}
        >
          {number}
        </motion.h2>
        <motion.h3
          className="font-bold text-lg text-white xl:text-xl mb-4"
          variants={isMobile ? mobileChildVariants : childVariants}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-sm xl:text-base text-white  dark:text-gray-300"
          variants={isMobile ? mobileChildVariants : childVariants}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const TimelineNode = ({
  active,
  isMobile,
}: {
  active: boolean;
  isMobile: boolean;
}) => (
  <motion.div
    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 border-blue-500 z-10"
    initial={isMobile ? { scale: 1 } : { scale: 0 }}
    animate={
      isMobile
        ? { backgroundColor: active ? '#3B82F6' : 'transparent' }
        : { scale: 1, backgroundColor: active ? '#3B82F6' : 'transparent' }
    }
    transition={
      isMobile ? { duration: 0 } : { duration: 0.3, delay: active ? 0.2 : 0 }
    }
  />
);

const ReferralProgram = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setHoveredStep] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const fillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const steps: ReferralStepProps[] = [
    {
      icon: (
        <Image
          src="/Image/img1.png"
          alt="Logo"
          width={100}
          height={100}
          className="w-24 h-24"
        />
      ),
      alignment: 'left',
    },
    {
      number: '01',
      title: 'Tell Your Friends & Family',
      description:
        'Introducing Our Referral Program. You Can Earn An Extra $200 For Each Successful Referral!',
      alignment: 'right',
    },
    {
      number: '02',
      title: 'They Message Us',
      description:
        'We’ll respond promptly, get them set up, and make sure we know you sent them.',
      alignment: 'right',
    },
    {
      icon: (
        <Image
          src="/Image/img3.png"
          alt="Logo"
          width={100}
          height={100}
          className="w-24 h-24"
        />
      ),
      alignment: 'left',
    },
    {
      icon: (
        <Image
          src="/Image/img2.png"
          alt="Logo"
          width={100}
          height={100}
          className="w-24 h-24"
        />
      ),
      alignment: 'left',
    },
    {
      number: '03',
      title: 'Cash In!',
      description:
        "Once Their Application Is Approved, We'll Send You Up To $200 For Each Person You Referred.",

      alignment: 'left',
    },
  ];

  const nodePositions = [10, 50, 90];

  return (
    <div
      ref={containerRef}
      className="relative bg-gradient-to-b from-[#16222E] to-[#5E7893] overflow-hidden py-20 px-4  flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto min-h-screen">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-center text-white  bg-clip-text"
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={
            isMobile ? { duration: 0 } : { duration: 0.8, ease: 'easeOut' }
          }
        >
          Our Referral Program
        </motion.h1>
        <motion.h1
          className="text-xl font-normal mt-3 text-center mb-16 md:mb-20 text-white  bg-clip-text"
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={
            isMobile ? { duration: 0 } : { duration: 0.8, ease: 'easeOut' }
          }
        >
          invite mates - both make $$$
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          {/* Timeline line - visible on tablet and up */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gray-500 dark:bg-gray-700/30">
            <motion.div
              className="w-full bg-white origin-top"
              style={{ height: fillHeight }}
            />

            {/* Timeline nodes */}
            {nodePositions.map((pos, index) => (
              <div key={index} style={{ top: `${pos}%` }} className="absolute">
                <TimelineNode
                  active={scrollYProgress.get() * 100 >= pos}
                  isMobile={isMobile}
                />
              </div>
            ))}
          </div>

          {/* Mobile timeline - visible on mobile only */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-[3px] bg-gray-200 dark:bg-gray-700/30">
            <div
              className="w-full bg-gradient-to-b from-blue-500 to-purple-600 origin-top"
              style={{ height: fillHeight.get() }}
            />

            {/* Mobile timeline nodes - no animation */}
            {nodePositions.map((pos, index) => (
              <div key={index} style={{ top: `${pos}%` }} className="absolute">
                <div
                  className={`absolute left-1/2 hidden lg:block transform -translate-x-1/2 w-6 h-6 rounded-full border-2 border-blue-500 z-10 ${
                    scrollYProgress.get() * 100 >= pos ? 'bg-blue-500' : ''
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Mobile view: render without animations */}
          {isMobile ? (
            <div className="col-span-1 md:col-span-2">
              {steps.map((step, index) => (
                <div key={index} className="col-span-1">
                  <ReferralStep
                    number={step.number}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                    alignment="left"
                    isMobile={isMobile}
                  />
                </div>
              ))}
            </div>
          ) : (
            <>
              {steps.map((step, index) => (
                <div key={index}>
                  {/* This creates the alternating pattern */}
                  {step.alignment === 'right' && (
                    <div className="hidden md:block"></div>
                  )}

                  <div
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className="col-span-1"
                  >
                    <ReferralStep
                      number={step.number}
                      title={step.title}
                      description={step.description}
                      icon={step.icon}
                      alignment={`${step.alignment}`}
                      isMobile={isMobile}
                    />
                  </div>

                  {step.alignment === 'left' && (
                    <div className="hidden md:block"></div>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReferralProgram;
