import React from 'react';

interface CardProps {
  id: number;
  title: string;
  description: string;
}
function Card({ id, title, description }: CardProps) {
  return (
    <div className="backdrop-blur-md  border-[1px] !border-[#111] shadow-[0px_0px_15px_rgba(0,0,0,0.09)] lg:w-full md:w-3/4 w-full p-4 xl:p-9 space-y-3 mx-auto relative overflow-hidden h-42 xl:min-h-56 mt-4 rounded-md">
      <div className="xl:w-24 lg:w-20 w-16 h-16 lg:h-20 xl:h-24 bg-[#F97316] rounded-full absolute lg:-right-2 lg:-top-4 !flex !items-center !justify-center -right-2 -top-2 xl:-right-5 xl:-top-7">
        <p className="absolute bottom-6 left-7 text-white md:text-2xl">0{id}</p>
      </div>
      <div className="fill-[#F97316] w-12"></div>
      <h1 className="font-bold text-lg xl:text-3xl text-white">{title}</h1>
      <p className="text-base xl:text-base text-white leading-6 ">
        {description}
      </p>
    </div>
  );
}

export default Card;
