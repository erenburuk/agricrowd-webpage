import React from 'react';

const Contents = () => {
  return (
    <div className='w-full max-w-md mx-auto mt-16 p-16 border border-green-500 mb-16'>
      <h2 className='text-4xl font-bold mb-6 text-center'>Project Documents</h2>
      <ul className='list-none p-0'>
        <li className='border-y border-gray-300 py-4'>
          <a
            href='https://github.com/CankayaUniversity/ceng-407-408-2023-2024-AGRICROWD-Tarimda-Kitlesel-Fonlama-Uygulamasi/wiki/Project-Work-Plan'
            target='_blank'
            rel='noopener noreferrer'
            className='block text-xl hover:text-green-500'
          >
            <p>Project Work Plan</p>
          </a>
        </li>
        <li className='border-b border-gray-300 py-4'>
          <a
            href='https://github.com/CankayaUniversity/ceng-407-408-2023-2024-AGRICROWD-Tarimda-Kitlesel-Fonlama-Uygulamasi/wiki/Literature-Review'
            target='_blank'
            rel='noopener noreferrer'
            className='block text-xl hover:text-green-500'
          >
            <p>Literature Review</p>
          </a>
        </li>
        <li className='border-b border-gray-300 py-4'>
          <a
            href='https://github.com/CankayaUniversity/ceng-407-408-2023-2024-AGRICROWD-Tarimda-Kitlesel-Fonlama-Uygulamasi/wiki/Software-Requirement-Specification'
            target='_blank'
            rel='noopener noreferrer'
            className='block text-xl hover:text-green-500'
          >
            <p>Software Requirement Specification</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contents;
