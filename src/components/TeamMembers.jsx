import React from 'react';

const TeamMembers = () => {
  return (
    <div className='text-center mb-12 pt-12 border-t'>
      <h2 className='text-3xl font-bold mb-6'>Advisor</h2>

      {/* Advisor */}
      <div className='mb-6'>
        <div className='w-1/6 border border-green-500 m-auto p-8'>
          <img
            src='/images/gul-tokdemir.jpg'
            alt='advisor'
            className='profile-image mx-auto mb-6'
          />
          <p className='mb-2 font-bold text-xl'>Advisor</p>
          <p className='mb-2 text-lg'>
            Assoc. Prof. Dr. <br />
            Gül TOKDEMİR
          </p>
        </div>
      </div>

      <h2 className='text-3xl font-bold mb-6'>Team Members</h2>

      {/* Other Team Members */}
      <div className='flex flex-wrap justify-center'>
        <div className='w-1/6 p-8 border border-green-500 m-2'>
          <img
            src='/images/adil-tukenmez.jpg'
            alt='member'
            className='profile-image mx-auto mb-6'
          />
          <p className='mb-2 font-bold text-lg'>Adil TÜKENMEZ</p>
          <p className='mb-2'>201911063</p>
          <a
            href='https://github.com/adiltukenmez'
            target='_blank'
            rel='noopener noreferrer'
            className='text-green-500 hover:underline'
          >
            <p>@adiltukenmez</p>
          </a>
        </div>
        <div className='w-1/6 p-8 border border-green-500 m-2'>
          <img
            src='/images/user.jpg'
            alt='member'
            className='profile-image mx-auto mb-6'
          />
          <p className='mb-2 font-bold text-lg'>Emirhan GÖKOĞLU</p>
          <p className='mb-2'>201911027</p>
          <a
            href='https://github.com/gklemr'
            target='_blank'
            rel='noopener noreferrer'
            className='text-green-500 hover:underline'
          >
            <p>@gklemr</p>
          </a>
        </div>
        <div className='w-1/6 p-8 border border-green-500 m-2'>
          <img
            src='/images/user.jpg'
            alt='member'
            className='profile-image mx-auto mb-6'
          />
          <p className='mb-2 font-bold text-lg'>Enes Ramazan AKDAMAR</p>
          <p className='mb-2'>201911002</p>
          <a
            href='https://github.com/remzn'
            target='_blank'
            rel='noopener noreferrer'
            className='text-green-500 hover:underline'
          >
            <p>@remzn</p>
          </a>
        </div>
        <div className='w-1/6 p-8 border border-green-500 m-2'>
          <img
            src='/images/mustafa-yılmaz.jpg'
            alt='member'
            className='profile-image mx-auto mb-6'
          />
          <p className='mb-2 font-bold text-lg'>Mustafa YILMAZ</p>
          <p className='mb-2'>201911075</p>
          <a
            href='https://github.com/mustyilmaz'
            target='_blank'
            rel='noopener noreferrer'
            className='text-green-500 hover:underline'
          >
            <p>@mustyilmaz</p>
          </a>
        </div>
        <div className='w-1/6 p-8 border border-green-500 m-2'>
          <img
            src='/images/mustafa-eren-buruk.jpg'
            alt='member'
            className='profile-image mx-auto mb-6'
          />
          <p className='mb-2 font-bold text-lg'>Mustafa Eren BURUK</p>
          <p className='mb-2'>201911017</p>
          <a
            href='https://github.com/erenburuk'
            target='_blank'
            rel='noopener noreferrer'
            className='text-green-500 hover:underline'
          >
            <p>@erenburuk</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
