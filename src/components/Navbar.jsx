import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-white shadow-md p-4'>
      <nav className='container mx-auto flex items-center justify-between'>
        <a
          href='#perspective'
          className='text-green-700 text-3xl font-bold flex items-center'
        >
          <span role='img' aria-label='Agricrowd Logo' className='mr-2'>
            🌾
          </span>
          AGRICROWD
        </a>
        <ul className='flex space-x-6 text-sm md:text-base'>
          <a
            href='#perspective'
            className='hover:text-green-700 transition duration-300'
          >
            Our Perspective
          </a>
          <a
            href='#overview'
            className='hover:text-green-700 transition duration-300'
          >
            Agricrowd
          </a>
          <a
            href='#contents'
            className='hover:text-green-700 transition duration-300'
          >
            Project Documents
          </a>
          <a
            href='#team-members'
            className='hover:text-green-700 transition duration-300'
          >
            Team Members
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
