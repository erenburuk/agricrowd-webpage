import React from 'react';

const Contents = () => {
  return (
    <div className='flex justify-center my-12' id='documents'>
      <div className='w-2/3 md:w-1/2 lg:w-1/3 bg-white shadow-xl rounded-lg py-8'>
        <h2 className='text-xl font-bold mb-6 text-center border-b pb-4 text-green-500'>
          Project Documents
        </h2>
        <ul className='list-none px-4 text-center'>
          <li className='py-4 transition ease-in-out hover:text-green-500 hover:-translate-y-1 hover:scale-110 duration-300'>
            <a
              href='https://github.com/CankayaUniversity/ceng-407-408-2023-2024-AGRICROWD-Tarimda-Kitlesel-Fonlama-Uygulamasi/wiki/Project-Work-Plan'
              target='_blank'
              rel='noopener noreferrer'
              className='border-b pb-1'
            >
              Project Work Plan
            </a>
          </li>
          <li className='py-4 transition ease-in-out hover:text-green-500 hover:-translate-y-1 hover:scale-110 duration-300'>
            <a
              href='https://github.com/CankayaUniversity/ceng-407-408-2023-2024-AGRICROWD-Tarimda-Kitlesel-Fonlama-Uygulamasi/wiki/Literature-Review'
              target='_blank'
              rel='noopener noreferrer'
              className='border-b pb-1'
            >
              Literature Review
            </a>
          </li>
          <li className='py-4 transition ease-in-out hover:text-green-500 hover:-translate-y-1 hover:scale-110 duration-300'>
            <a
              href='https://github.com/CankayaUniversity/ceng-407-408-2023-2024-AGRICROWD-Tarimda-Kitlesel-Fonlama-Uygulamasi/wiki/Software-Requirement-Specification'
              target='_blank'
              rel='noopener noreferrer'
              className='border-b pb-1'
            >
              Software Requirement Specification
            </a>
          </li>
          <li className='py-4 transition ease-in-out hover:text-green-500 hover:-translate-y-1 hover:scale-110 duration-300'>
            <a
              href='https://github.com/CankayaUniversity/ceng-407-408-2023-2024-AGRICROWD-Tarimda-Kitlesel-Fonlama-Uygulamasi/wiki/Software-Design-Description'
              target='_blank'
              rel='noopener noreferrer'
              className='border-b pb-1'
            >
              Software Design Description
            </a>
          </li>
          <li className='py-4 transition ease-in-out hover:text-green-500 hover:-translate-y-1 hover:scale-110 duration-300'>
            <a
              href='https://github.com/CankayaUniversity/ceng-407-408-2023-2024-AGRICROWD-Tarimda-Kitlesel-Fonlama-Uygulamasi/wiki/Project-Report'
              target='_blank'
              rel='noopener noreferrer'
              className='border-b pb-1'
            >
              Project Report
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contents;
