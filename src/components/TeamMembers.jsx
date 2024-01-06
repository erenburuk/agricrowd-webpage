import React from 'react';

const TeamMembers = () => {
  return (
    <div className='text-center mb-12 pt-12 border-t' id='team-members'>
      <h2 className='text-2xl font-bold mb-6'>Advisor</h2>

      {/* Advisor */}
      <div className='flex flex-col items-center sm:mx-12 mb-10'>
        <div class='w-2/3 md:w-1/2 lg:w-1/4 xl:w-1/5'>
          <div class='bg-white shadow-xl rounded-lg py-3'>
            <div class='photo-wrapper p-2'>
              <img
                class='w-32 h-32 rounded-full mx-auto'
                src='/images/gul-tokdemir.jpg'
                alt='advisor'
              />
            </div>
            <div class='flex flex-col items-center px-4'>
              <h3 class='text-center text-xl text-gray-900 font-medium leading-8 mt-2'>
                <div className='flex flex-col'>
                  <span className='text-lg'>Assoc. Prof. Dr.</span>
                  <span>Gül TOKDEMİR</span>
                </div>
              </h3>
              <table class='text-sm my-3'>
                <tbody>
                  <tr>
                    <td class='px-2 py-1 text-gray-500 font-semibold'>
                      Advisor
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class='flex flex-row gap-3 my-3'>
                <a
                  class='text-xs text-gray-700 italic hover:underline hover:text-green-500 font-medium'
                  href='https://www.linkedin.com/in/g%C3%BCl-tokdemir-925998b/'
                  target='_blank'
                >
                  <img
                    src='/images/logo-linkedin.svg'
                    alt='LinkedIn'
                    className='w-6'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className='text-2xl font-bold mb-6'>Team Members</h2>

      {/* Other Team Members */}
      <div className='flex flex-wrap justify-center sm:mx-12 md:mx-0 mb-8 gap-8'>
        <div class='w-2/3 md:w-1/3 lg:w-1/4 xl:w-1/6'>
          <div class='bg-white shadow-xl rounded-lg py-3'>
            <div class='photo-wrapper p-2'>
              <img
                class='w-32 h-32 rounded-full mx-auto'
                src='/images/mustafa-eren-buruk.jpg'
                alt='member'
              />
            </div>
            <div class='flex flex-col items-center px-4 lg:px-0'>
              <h3 class='text-center text-xl text-gray-900 font-medium leading-8 mt-2 lg:text-lg'>
                Mustafa Eren Buruk
              </h3>
              <table class='text-sm my-3'>
                <tbody>
                  <tr>
                    <td class='px-2 py-1 text-gray-500 font-semibold'>
                      201911017
                    </td>
                  </tr>
                  <tr>
                    <td class='px-2 py-1 text-green-500 font-semibold'>
                      @erenburuk
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class='flex flex-row gap-3 my-3'>
                <a
                  class='text-xs text-gray-700 italic hover:underline hover:text-green-500 font-medium'
                  href='https://www.linkedin.com/in/erenburuk/'
                  target='_blank'
                >
                  <img
                    src='/images/logo-linkedin.svg'
                    alt='LinkedIn'
                    className='w-6'
                  />
                </a>
                <a
                  class='text-xs text-gray-700 italic hover:underline hover:text-green-500 font-medium'
                  href='https://github.com/erenburuk'
                  target='_blank'
                >
                  <img
                    src='/images/logo-github.svg'
                    alt='LinkedIn'
                    className='w-6'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class='w-2/3 md:w-1/3 lg:w-1/4 xl:w-1/6'>
          <div class='bg-white shadow-xl rounded-lg py-3'>
            <div class='photo-wrapper p-2'>
              <img
                class='w-32 h-32 rounded-full mx-auto'
                src='/images/mustafa-yılmaz.jpg'
                alt='member'
              />
            </div>
            <div class='flex flex-col items-center px-4 lg:px-0'>
              <h3 class='text-center text-xl text-gray-900 font-medium leading-8 mt-2 lg:text-lg'>
                Mustafa Yılmaz
              </h3>
              <table class='text-sm my-3'>
                <tbody>
                  <tr>
                    <td class='px-2 py-1 text-gray-500 font-semibold'>
                      201911075
                    </td>
                  </tr>
                  <tr>
                    <td class='px-2 py-1 text-green-500 font-semibold'>
                      @mustyilmaz
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class='flex flex-row gap-3 my-3'>
                <a
                  class='text-xs text-gray-700 italic hover:underline hover:text-green-500 font-medium'
                  href='https://www.linkedin.com/in/mustafayilmazzz/'
                  target='_blank'
                >
                  <img
                    src='/images/logo-linkedin.svg'
                    alt='LinkedIn'
                    className='w-6'
                  />
                </a>
                <a
                  class='text-xs text-gray-700 italic hover:underline hover:text-green-500 font-medium'
                  href='https://github.com/mustyilmaz'
                  target='_blank'
                >
                  <img
                    src='/images/logo-github.svg'
                    alt='Github'
                    className='w-6'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class='w-2/3 md:w-1/3 lg:w-1/4 xl:w-1/6'>
          <div class='bg-white shadow-xl rounded-lg py-3'>
            <div class='photo-wrapper p-2'>
              <img
                class='w-32 h-32 rounded-full mx-auto'
                src='/images/adil-tukenmez.jpg'
                alt='member'
              />
            </div>
            <div class='flex flex-col items-center px-4 lg:px-0'>
              <h3 class='text-center text-xl text-gray-900 font-medium leading-8 mt-2 lg:text-lg'>
                Adil Tükenmez
              </h3>
              <table class='text-sm my-3'>
                <tbody>
                  <tr>
                    <td class='px-2 py-1 text-gray-500 font-semibold'>
                      201911063
                    </td>
                  </tr>
                  <tr>
                    <td class='px-2 py-1 text-green-500 font-semibold'>
                      @adiltukenmez
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class='flex flex-row gap-3 my-3'>
                <a
                  class='text-xs text-gray-700 italic hover:underline hover:text-green-500 font-medium'
                  href='https://www.linkedin.com/in/adil-t%C3%BCkenmez-27a9bb237/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
                  target='_blank'
                >
                  <img
                    src='/images/logo-linkedin.svg'
                    alt='LinkedIn'
                    className='w-6'
                  />
                </a>
                <a
                  class='text-xs text-gray-700 italic hover:underline hover:text-green-500 font-medium'
                  href='https://github.com/adiltukenmez'
                  target='_blank'
                >
                  <img
                    src='/images/logo-github.svg'
                    alt='Github'
                    className='w-6'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class='w-2/3 md:w-1/3 lg:w-1/4 xl:w-1/6'>
          <div class='bg-white shadow-xl rounded-lg py-3'>
            <div class='photo-wrapper p-2'>
              <img
                class='w-32 h-32 rounded-full mx-auto'
                src='/images/user.jpg'
                alt='member'
              />
            </div>
            <div class='flex flex-col items-center px-4 lg:px-0'>
              <h3 class='text-center text-xl text-gray-900 font-medium leading-8 mt-2 lg:text-lg'>
                Emirhan GÖKOĞLU
              </h3>
              <table class='text-sm my-3'>
                <tbody>
                  <tr>
                    <td class='px-2 py-1 text-gray-500 font-semibold'>
                      201911027
                    </td>
                  </tr>
                  <tr>
                    <td class='px-2 py-1 text-green-500 font-semibold'>
                      @gklemr
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class='flex flex-row gap-3 my-3'>
                <a
                  class='text-xs text-gray-700 italic hover:underline hover:text-green-500 font-medium'
                  href='https://www.linkedin.com/in/emirhan-g%C3%B6ko%C4%9Flu-872786262/'
                  target='_blank'
                >
                  <img
                    src='/images/logo-linkedin.svg'
                    alt='LinkedIn'
                    className='w-6'
                  />
                </a>
                <a
                  class='text-xs text-gray-700 italic hover:underline hover:text-green-500 font-medium'
                  href='https://github.com/gklemr'
                  target='_blank'
                >
                  <img
                    src='/images/logo-github.svg'
                    alt='Github'
                    className='w-6'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class='w-2/3 md:w-1/3 lg:w-1/4 xl:w-1/6'>
          <div class='bg-white shadow-xl rounded-lg py-3'>
            <div class='photo-wrapper p-2'>
              <img
                class='w-32 h-32 rounded-full mx-auto'
                src='/images/user.jpg'
                alt='member'
              />
            </div>
            <div class='flex flex-col items-center px-4 lg:px-0'>
              <h3 class='text-center text-xl text-gray-900 font-medium leading-8 mt-2 lg:text-lg'>
                Enes Ramazan AKDAMAR
              </h3>
              <table class='text-sm my-3'>
                <tbody>
                  <tr>
                    <td class='px-2 py-1 text-gray-500 font-semibold'>
                      201911002
                    </td>
                  </tr>
                  <tr>
                    <td class='px-2 py-1 text-green-500 font-semibold'>
                      @remzn
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class='flex flex-row gap-3 my-3'>
                <a
                  class='text-xs text-gray-700 italic hover:underline hover:text-green-500 font-medium'
                  href='https://www.linkedin.com/in/enes-ramazan-akdamar-7b7256199/'
                  target='_blank'
                >
                  <img
                    src='/images/logo-linkedin.svg'
                    alt='LinkedIn'
                    className='w-6'
                  />
                </a>
                <a
                  class='text-xs text-gray-700 italic hover:underline hover:text-green-500 font-medium'
                  href='https://github.com/remzn'
                  target='_blank'
                >
                  <img
                    src='/images/logo-github.svg'
                    alt='Github'
                    className='w-6'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Co-Advisors */}
      <h2 className='text-2xl font-bold mb-6'>Co-Advisors</h2>

      <div className='flex flex-wrap justify-center sm:mx-12 gap-8'>
        <div class='w-2/3 md:w-1/3 lg:w-1/4 xl:w-1/5'>
          <div class='bg-white shadow-xl rounded-lg py-3'>
            <div class='photo-wrapper p-2'>
              <img
                class='w-32 h-32 rounded-full mx-auto'
                src='/images/alper-ates.png'
                alt='member'
              />
            </div>
            <div class='flex flex-col items-center px-4 lg:px-0'>
              <h3 class='text-center text-xl text-gray-900 font-medium leading-8 mt-2 lg:text-lg sm:text-base lg:text-lg'>
                Alper Ateş
              </h3>
              <table class='text-sm my-3'>
                <tbody>
                  <tr>
                    <td class='px-2 py-1 text-gray-500 font-semibold'>
                      Co-Advisor
                    </td>
                  </tr>
                  <tr>
                    <td class='px-2 py-1 text-gray-500 font-base md:text-xs lg:text-sm'>
                      Softtech | IT Director
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class='flex flex-row gap-3 my-3'>
                <a
                  class='text-xs text-gray-700 italic hover:underline hover:text-green-500 font-medium'
                  href='https://www.linkedin.com/in/alperates1923/'
                  target='_blank'
                >
                  <img
                    src='/images/logo-linkedin.svg'
                    alt='LinkedIn'
                    className='w-6'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class='w-2/3 md:w-1/3 lg:w-1/4 xl:w-1/5'>
          <div class='bg-white shadow-xl rounded-lg py-3'>
            <div class='photo-wrapper p-2'>
              <img
                class='w-32 h-32 rounded-full mx-auto'
                src='/images/mustafa-bilal-demirkan.jpeg'
                alt='member'
              />
            </div>
            <div class='flex flex-col items-center px-4 lg:px-0'>
              <h3 class='text-center text-xl text-gray-900 font-medium leading-8 mt-2 sm:text-base lg:text-lg'>
                Mustafa Bilal Demirkan
              </h3>
              <table class='text-sm my-3'>
                <tbody>
                  <tr>
                    <td class='px-2 py-1 text-gray-500 font-semibold'>
                      Co-Advisor
                    </td>
                  </tr>
                  <tr>
                    <td class='px-2 py-1 text-gray-500 font-base md:text-xs lg:text-sm'>
                      Softtech | Solution Architect
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class='flex flex-row gap-3 my-3'>
                <a
                  class='text-xs text-gray-700 italic hover:underline hover:text-green-500 font-medium'
                  href='https://www.linkedin.com/in/mustafabilaldemirkan/'
                  target='_blank'
                >
                  <img
                    src='/images/logo-linkedin.svg'
                    alt='LinkedIn'
                    className='w-6'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
