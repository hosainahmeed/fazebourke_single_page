'use client';
import React from 'react';
import { Collapse } from 'antd';
import { CircleMinus, CirclePlus } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
const { Panel } = Collapse;

const FrequentlyAskedQuestions = () => {
  const faqData = [
    {
      question: 'How does the $200 partnership work?',
      answer:
        'Express your interest by first sending us a message and then filling out our form application. It only takes a few minutes  Once we verify your betting accounts, we’ll send $200 to your bank via PayID or OSKO within 1 business day.',
    },
    {
      question: 'What if I already have sports betting accounts?',
      answer:
        ' You’ll pass on your existing logins to us to use during the partnership. If you would like to keep an account, we can work that out with you.',
    },
    {
      question: 'What if I haven’t created any sports betting accounts?',
      answer:
        'No problem! We create the accounts for you. Sit back and relax we’ll handle this part.',
    },
    {
      question: 'Is my personal information safe and secure?',
      answer:
        'Absolutely. Our submission forms use 256 bit SSL encryption which is the same protection level used by online banking and e-commerce providers. We value your privacy and take the security of your personal information seriously. Your data will never be shared or sold to any third-parties.',
    },
    {
      question: 'Which betting accounts do you create?',
      answer: 'We use the main corporate bookmakers in Australia.',
    },
    {
      question: 'Why do we want your accounts?',
      answer:
        ' We use a strategy called “matched betting” that uses promotions. We access these promos to continue betting and pay you some of the profit upfront. Feel free to research “matched betting” to learn more.',
    },
    {
      question: 'How do I contact you?',
      answer: (
        <Link
          href="https://m.me/betcollectiveFB"
          target="_blank"
          rel="noopener noreferrer"
          className="!underline cursor-pointer hover:text-blue-500"
        >
          Facebook Messenger
        </Link>
      ),
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(/Image/faq.jpg)`,
      }}
      className=" relative bg-cover bg-center md:py-28 bg-no-repeat py-10"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-3xl md:text-5xl relative z-[999] mb-6 font-bold text-center text-white  bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Frequently Asked Questions
        </motion.h1>

        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <span>
              {isActive ? (
                <CircleMinus className="text-white" />
              ) : (
                <CirclePlus className="text-white" />
              )}
            </span>
          )}
          expandIconPosition="end"
          defaultActiveKey={['1']}
          accordion
          className="!text-white"
        >
          {faqData.map((faq, index) => (
            <Panel header={faq.question} key={index + 1}>
              <p className="text-white leading-6  relative z-[999]  text-base md:text-lg text-md">
                {faq.answer}
              </p>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
