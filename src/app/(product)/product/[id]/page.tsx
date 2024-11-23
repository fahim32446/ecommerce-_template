'use client';

import RecentProductWithSwiper from '@/app/(home)/_components/RecentProductWithSwiper';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import QuantitySelector from '../../_component/QuantitySelector';
import SingleProductImage from '../../_component/SingleProductImage';

const productImages = [
  'https://fabrilife.com/products/6568a140d2c31-square.jpg?v=20',
  'https://fabrilife.com/products/6568a140d2e55-square.jpg?v=20',
  'https://fabrilife.com/image-gallery/6568a140dbe79-square.jpg?v=20',
];

const colorOptions = ['Red', 'Blue', 'Green', 'Yellow'];
const sizeOptions = ['S', 'M', 'L', 'XL'];

export default function ProductDetails() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='flex flex-col md:flex-row gap-8'>
        {/* Left side - Product Images */}
        <SingleProductImage productImages={productImages} />

        {/* Right side - Product Details */}
        <div className='md:w-1/2 space-y-6'>
          <h1 className='text-3xl font-bold'>
            Mens Premium Jacket - Stockholm
          </h1>

          {/* Size Variant */}
          <div>
            <h2 className='text-lg font-semibold mb-2'>Size</h2>
            <RadioGroup defaultValue='M' className='flex gap-2'>
              {sizeOptions.map((size) => (
                <div key={size}>
                  <RadioGroupItem
                    value={size}
                    id={`size-${size}`}
                    className='peer sr-only'
                  />
                  <Label
                    htmlFor={`size-${size}`}
                    className='flex items-center justify-center rounded-md border-2 border-muted bg-popover px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary'
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Color Variant */}
          <div>
            <h2 className='text-lg font-semibold mb-2'>Color</h2>
            <RadioGroup defaultValue='Red' className='flex gap-2'>
              {colorOptions.map((color) => (
                <div key={color}>
                  <RadioGroupItem
                    value={color}
                    id={`color-${color}`}
                    className='peer sr-only'
                  />
                  <Label
                    htmlFor={`color-${color}`}
                    className='flex items-center justify-center rounded-md border-2 border-muted bg-popover px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary'
                  >
                    {color}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Quantity Selector and Buy */}
          <QuantitySelector />
        </div>
      </div>

      {/* Recent Product */}
      <div className='mt-10'>
        <RecentProductWithSwiper />
      </div>
    </div>
  );
}
