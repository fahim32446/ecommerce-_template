import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-zinc-900 text-zinc-100'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid gap-12 lg:grid-cols-2'>
          {/* Logo and Description */}
          <div className='space-y-6'>
            <div className='flex items-center gap-2 text-2xl font-bold'>
              <Image
                src={'/images/logo_white.png'}
                alt='Logo'
                width={120}
                height={40}
                className='h-10 w-auto'
                priority
              />
            </div>
            <p className='max-w-md text-zinc-400'>
              Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam
              unde quae qui quasi mollitia tenetur. Dicta explicabo est
              consectetur maxime quos fugit velit assumenda est.
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold'>Sign Up For Our Newsletter!</h3>
            <p className='text-zinc-400'>
              Get notified about updates and be the first to get early access to
              new Podcast episodes.
            </p>
            <div className='flex'>
              <Input
                type='email'
                placeholder='Your email address'
                className='bg-white border-none rounded-r-none py-5'
              />
              <Button className='rounded-l-none py-5'>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className='mt-12 grid gap-8 border-t border-zinc-800 pt-8 md:grid-cols-2 lg:grid-cols-4'>
          {/* Contact Us */}
          <div>
            <h4 className='mb-4 font-semibold'>Contact Us</h4>
            <p className='text-zinc-400'>support@we5ive.com</p>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h4 className='mb-4 font-semibold'>Quick Links</h4>
            <div className='space-y-2 text-zinc-400'>
              <p>
                <Link href='#'>About Us</Link>
              </p>
              <p>
                <Link href='#'>Contact Us</Link>
              </p>
            </div>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h4 className='mb-4 font-semibold'>Legal</h4>
            <div className='space-y-2 text-zinc-400'>
              <p>
                <Link href='#'>Privacy policy</Link>
              </p>
              <p>
                <Link href='#'>Terms & Condition</Link>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className='mb-4 font-semibold'>Social Link</h4>
            <div className='flex gap-4'>
              <Link href='#' className='text-zinc-400 hover:text-purple-500'>
                <Facebook className='h-6 w-6' />
                <span className='sr-only'>Facebook</span>
              </Link>
              <Link href='#' className='text-zinc-400 hover:text-purple-500'>
                <Twitter className='h-6 w-6' />
                <span className='sr-only'>Twitter</span>
              </Link>
              <Link href='#' className='text-zinc-400 hover:text-purple-500'>
                <Linkedin className='h-6 w-6' />
                <span className='sr-only'>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='h-10 bg-primary'></div>
    </footer>
  );
}
