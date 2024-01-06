import React from 'react';

const Footer = () => (
  <footer className='bg-green-600 text-white flex px-12 py-2'>
    <div className='flex flex-col gap-2 flex-grow py-6'>
      <p className='mb-4'>
        Yukarıyurtçu Mahallesi Mimar Sinan Cad. No:4, 06790 Etimesgut / Ankara
      </p>
      <p>
        <span className='font-semibold'>Phone:</span> +90 312 233 13 33
      </p>
      <p>
        <span className='font-semibold'>Fax:</span> +90 312 233 10 26
      </p>
      <p>
        <span className='font-semibold'>E-mail:</span> ceng@cankaya.edu.tr
      </p>
    </div>
    <img
      src='/images/cankaya-uni-logo.png'
      alt='Çankaya University Logo'
      className='h-32 object-cover self-center'
    />
  </footer>
);

export default Footer;
