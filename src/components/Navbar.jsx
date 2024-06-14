import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  return (
    <header class='fixed bg-white w-full flex flex-col overflow-hidden px-16 py-4 shadow-md z-50 text-slate-700 shadow-md md:mx-auto md:flex-row md:content-center'>
      <a
        to='home'
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        class='flex justify-center cursor-pointer items-center whitespace-nowrap font-light text-4xl font-black'
      >
        <img src='/images/growth.png' alt='Growth' className='h-12 mr-2' />

        <span>AGRI</span>
        <span class='text-green-600'>CROWD</span>
      </a>
      <input type='checkbox' class='peer hidden' id='navbar-open' />
      <label
        class='absolute top-7 right-4 cursor-pointer lg:hidden'
        for='navbar-open'
      >
        <span class='sr-only'>Toggle Navigation</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          stroke-width='2'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </label>
      <nav
        aria-label='Header Navigation'
        class='flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:mt-0 peer-checked:max-h-56 md:items-end lg:items-center lg:max-h-full lg:flex-row lg:justify-end'
      >
        <div class='flex flex-col items-center space-y-4 lg:gap-6 lg:flex-row lg:space-y-0 lg:py-2 lg:pl-12'>
          <Link
            to='perspective'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className='mt-4 lg:mt-0 cursor-pointer hover:text-green-500'
          >
            Our Perspective
          </Link>
          <Link
            to='overview'
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className='cursor-pointer hover:text-green-500'
          >
            Agricrowd
          </Link>
          <Link
            to='youtube'
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className='mt-4 lg:mt-0 cursor-pointer hover:text-green-500'
          >
            Demo Video
          </Link>
          <Link
            to='documents'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='cursor-pointer hover:text-green-500'
          >
            Project Documents
          </Link>
          <Link
            to='team-members'
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className='cursor-pointer hover:text-green-500'
          >
            Team Members
          </Link>
          <a
            class='text-xs text-gray-700 italic hover:underline hover:text-green-500 font-medium'
            href='https://github.com/CankayaUniversity/ceng-407-408-2023-2024-AGRICROWD-Tarimda-Kitlesel-Fonlama-Uygulamasi/wiki'
            target='_blank'
          >
            <img src='/images/logo-github.svg' alt='Github' className='w-10' />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
