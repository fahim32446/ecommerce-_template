'use client';
import { Button } from '@/components/ui/button';
import { config } from '@/data';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Props = {};

const RecentProduct = (props: Props) => {
  const router = useRouter();

  return (
    <div>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-5'>
        {config.recent_product.map((product) => (
          <div
            onClick={() => router.push('/product/1')}
            key={product.name}
            className=' bg-white pb-5 rounded-xl cursor-pointer'
          >
            <div className='h-[260px] bg-card_bg m-2 rounded-xl'>
              <Image
                src={product.image}
                height={200}
                width={260}
                alt={product.image}
                className='object-cover h-full overflow-hidden rounded-xl'
              />
            </div>
            <div className='px-3 '>
              <div className='flex items-center gap-1 mt-5 mb-3'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < product.rating
                        ? 'fill-orange-400 text-orange-400'
                        : 'fill-white text-orange-400'
                    }`}
                  />
                ))}
                <span className='text-sm text-muted-foreground'>
                  ({product.reviews})
                </span>
              </div>
              <div className='flex justify-between'>
                <h3 className='text-base'>{product.name}</h3>
                <h3 className='text-lg font-bold'>{product.price}</h3>
              </div>

              <Button
                variant={'outline'}
                className='w-full mt-3 text-primary border-primary text-base font-semibold'
              >
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProduct;
