import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

type Props = {
  productImages: string[];
};

const SingleProductImage = ({ productImages }: Props) => {
  const [mainImage, setMainImage] = useState(productImages[0]);

  return (
    <div className='md:w-1/2 space-y-4'>
      <div className='relative aspect-square'>
        <Image
          src={mainImage}
          alt='Main product image'
          fill
          className='object-cover rounded-lg'
        />
      </div>
      <div className='flex gap-2 overflow-x-auto pb-2'>
        {productImages.map((img, index) => (
          <button
            key={index}
            onClick={() => setMainImage(img)}
            className='relative w-20 h-20 flex-shrink-0'
          >
            <Image
              src={img}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className={`object-cover rounded-md ${
                mainImage === img ? 'ring-2 ring-primary' : ''
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SingleProductImage;
