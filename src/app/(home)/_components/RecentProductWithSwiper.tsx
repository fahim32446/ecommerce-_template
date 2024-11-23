'use client';
import { Button } from '@/components/ui/button';
import { config } from '@/data';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';

type Props = {};

const RecentProductWithSwiper = (props: Props) => {
  const router = useRouter();
  const swiperRef = useRef(null) as any;
  return (
    <div className='relative'>
      <div className='flex items-center justify-between'>
        <div>
          <h3 className='text-primary'>Recent Product</h3>
          <h3 className='text-2xl font-bold'>Grab Also</h3>
        </div>
        <div className='flex gap-3'>
          <Button
            variant='outline'
            size='icon'
            className='rounded-full bg-white'
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft className='h-4 w-4' />
          </Button>

          <Button
            variant='outline'
            size='icon'
            className='rounded-full bg-white'
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight className='h-4 w-4' />
          </Button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 4,
            centeredSlides: false,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className='mySwiper'
      >
        {config.recent_product.map((product, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => router.push('/product/1')}
              key={product.name}
              className=' bg-white pb-5 rounded-xl cursor-pointer p-2'
            >
              <div className='h-[260px] bg-card_bg rounded-xl'>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecentProductWithSwiper;
