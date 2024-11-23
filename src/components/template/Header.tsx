'use client';

import { Menu, Search, ShoppingCart, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/deals', label: 'Deals' },
  { href: '/whats-new', label: "What's New" },
];

type HeaderProps = {
  cartItemCount?: number;
};

const Header = ({ cartItemCount = 2 }: HeaderProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const renderNavLinks = (links: NavLink[], className = '') =>
    links.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={`transition-colors hover:text-foreground/80 text-foreground/60 ${className}`}
      >
        {link.label}
      </Link>
    ));

  return (
    <header className=' w-full bg-background'>
      <div className='container flex h-16 items-center justify-between '>
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon' className='mr-2 md:hidden'>
              <Menu className='h-5 w-5' />
              <span className='sr-only'>Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='w-[300px] sm:w-[400px]'>
            <nav className='flex flex-col gap-4'>
              {renderNavLinks(navLinks, 'text-lg font-medium')}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href='/' className='mr-6 flex items-center space-x-2 '>
          <Image
            src={'/images/logo.png'}
            alt='Logo'
            width={120}
            height={40}
            className='h-10 w-auto'
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-6 font-semibold '>
          {renderNavLinks(navLinks)}
        </nav>

        {/* Right Actions */}
        <div className='flex  items-center justify-end space-x-4 '>
          {/* Search */}
          <div
            className={`flex-1 md:flex-none ${
              isSearchOpen ? 'flex' : 'hidden md:flex'
            }`}
          >
            <div className='relative w-full md:w-[300px] ml-auto'>
              <Search className='absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
              <Input
                type='search'
                placeholder='Search...'
                className='w-full pl-8 bg-white rounded-full border-none'
              />
            </div>
          </div>
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden'
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className='h-5 w-5' />
            <span className='sr-only'>Toggle search</span>
          </Button>

          {/* Shopping Cart */}
          <Button variant='ghost' size='icon' className='relative'>
            <ShoppingCart className='h-5 w-5' />
            {cartItemCount > 0 && (
              <span className='absolute right-0 top-0 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground'>
                {cartItemCount}
              </span>
            )}
            <span className='sr-only'>Shopping cart</span>
          </Button>

          {/* User Account */}
          <Button variant='ghost' size='icon'>
            <User className='h-5 w-5' />
            <span className='sr-only'>User account</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
