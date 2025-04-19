import IconImage from '@/components/minimul/IconImage';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div className="bg-[#000] pt-6 ">
      <div className="flex justify-between items-center container mx-auto px-2 md:px-0">
        <div className="flex items-center  ">
          <IconImage />
        </div>
        <div className="flex gap-2 items-center">
          <Link
            href="https://www.facebook.com/betcollectiveFB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="md:w-8 hover:scale-102 cursor-pointer md:h-8 w-6 h-6">
              <Image
                src="/_Facebook.svg"
                alt="Logo"
                width={1000}
                height={1000}
                className="md:w-12 md:h-12 w-6 h-6"
              />
            </button>
          </Link>
          <Link
            href="https://m.me/betcollectiveFB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="md:w-8 hover:scale-102 cursor-pointer md:h-8 w-6 h-6">
              <Image
                src="/message.svg"
                alt="Logo"
                width={1000}
                height={1000}
                className="md:w-12 md:h-12 w-6 h-6"
              />
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full text-white flex items-center text-xs mt-2 pb-4 md:text-base justify-center">
        {`Copyright © ${new Date().getFullYear()} Bet Collective | All Rights Reserved`}
      </div>
    </div>
  );
}

export default Footer;
