import React from 'react';
interface HeadLineProps {
  title: string;
  description: string;
}

function HeadLine({ title, description }: HeadLineProps) {
  return (
    <div className='max-w-screen-md mx-auto flex mb-12 items-center justify-center flex-col gap-2 text-center'>
      <h1 className='text-3xl font-black text-white'>{title}</h1>
      <h3 className='text-xl text-white'>{description}</h3>
    </div>
  );
}

export default HeadLine;
