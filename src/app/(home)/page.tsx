import { Button } from '@/components/ui/button';
import { config } from '@/data';
import Image from 'next/image';
import FeaturedProduct from './_components/FeaturedProduct';
import HoverButton from './_components/HeroButton';
import RecentProduct from './_components/RecentProduct';

const page = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className='h-[500px] relative'>
        <Image
          src={'/images/hero_image.png'}
          alt='hero-section'
          width={1400}
          height={500}
          className='h-full w-full object-cover'
        />

        <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
          <div className='text-background'>
            <h3 className='text-2xl md:text-5xl font-bold'>
              Elevate Your Everyday Style
            </h3>
            <p className='mt-2 text-sm md:text-lg font-light'>
              Discover the Latest Trends in Sustainable Fashion
            </p>
          </div>
          <div className='mt-4 group'>
            <HoverButton />
          </div>
        </div>
      </section>
      <section
        className='w-full md:h-[82px] bg-[img] py-5 md:py-0'
        style={{ backgroundImage: "url('/images/ticker.png')" }}
      >
        <div className='container flex flex-col md:flex-row md:justify-between md:items-center h-full gap-4 md:md-0'>
          {config.ticker_info.map((item, index) => (
            <div key={index} className='flex gap-3 text-white items-start'>
              <Image src={item.icon} height={32} width={32} alt='icon' />
              <div>
                <h2 className='text-xl'>{item.name}</h2>
                <p className='text-sm font-light mt-1'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='container mt-10'>
        <FeaturedProduct />
      </section>

      <section className='container mt-10 bg-card_bg w-full'>
        <div className='flex flex-col md:flex-row justify-between items-center px-5 gap-5'>
          <div className='flex flex-col justify-center items-center md:block'>
            <Image
              src={'/svg/bigDeal.svg'}
              height={42}
              width={100}
              alt='bigDeal'
            />
            <h2 className='font-bold text-3xl text-center md:text-5xl mt-2 mb-5'>
              <span className='text-primary'> 30%</span> Off for New Customers
            </h2>
            <HoverButton />
          </div>
          <div>
            <Image
              src={'/images/twoperson.png'}
              width={495}
              height={427}
              alt='model'
              className='h-full object-cover w-full'
            />
          </div>
        </div>
      </section>

      <section className='container mt-10 w-full'>
        <div className='flex flex-col md:flex-row  gap-10 items-center'>
          <Image src={'/images/man.png'} height={566} width={621} alt='man' />
          <HoverButton />
        </div>
      </section>

      <section className='container mt-20 w-full'>
        <h3 className='text-primary'>SUMMER</h3>
        <h3 className='text-2xl font-bold'>Big Deal</h3>
        <RecentProduct />
        <RecentProduct />
        <div className='flex justify-center items-center my-10'>
          <Button>Show More</Button>
        </div>
      </section>
    </>
  );
};

export default page;
