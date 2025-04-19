import Image from 'next/image';
import React from 'react';

function IconImage() {
  return (
    <div>
      <div className="h-fit w-48 md:w-56 lg:w-64 xl:w-72">
        <Image
          src="/logo.png"
          alt="Logo"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default IconImage;
