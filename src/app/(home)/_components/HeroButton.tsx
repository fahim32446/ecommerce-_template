'use client';

import { useState } from 'react';
import { MoveUpRight, MoveDownRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HoverButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='mt-4 group flex items-center'>
      <Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className='w-[149px] h-[48px] rounded-full text-lg font-light bg-[#8f71e1] hover:bg-[#7d5ed0]'
      >
        Shop Now
      </Button>
      <Button
        size='icon'
        className='text-lg font-light bg-[#8f71e1] hover:bg-[#7d5ed0] rounded-full w-12 h-12 transition-colors duration-200'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <MoveDownRight className='h-6 w-6' />
        ) : (
          <MoveUpRight className='h-6 w-6' />
        )}
      </Button>
    </div>
  );
}
