import React from 'react';

const Footer = () => (
  <footer className='bg-green-600 text-white flex px-12 py-2'>
    <div className='flex flex-col gap-2 flex-grow p-6'>
      <p>
        Address: Yukarıyurtçu Mahallesi Mimar Sinan Cad. No:4, 06790 Etimesgut /
        Ankara
      </p>
      <p>Phone: +90 312 233 13 33</p>
      <p>Fax: +90 312 233 10 26</p>
      <p>E-mail: ceng@cankaya.edu.tr</p>
    </div>
    <img
      src='/images/cankaya-uni-logo.png'
      alt='Çankaya University Logo'
      className='h-32 object-cover'
    />
  </footer>
);

export default Footer;
