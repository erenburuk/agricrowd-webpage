import React from 'react';

const Overview = () => {
  return (
    <div className='flex flex-wrap items-center justify-between' id='overview'>
      <div className='w-full md:w-full lg:w-7/12 xl:w-3/6 overflow-auto pb-12 pl-12 pr-12 lg:pr-0 pt-8 sm:pt-12'>
        <h2 className='text-3xl font-bold text-green-500 green mb-4 md:text-4xl'>
          Agricrowd
        </h2>
        <p className='text-base'>
          The agricultural crowdfunding platform aims to revolutionize financial
          support for agricultural initiatives, acting as a catalyst for the
          advancement of farming practices and investment prospects. It is
          conceived to cater to a wide array of stakeholders, encompassing
          individual farmers, agricultural enterprises, and potential investors,
          establishing a synergistic ecosystem for sustainable agricultural
          progress. The core objectives of the platform encompass the
          empowerment of agricultural initiatives, the facilitation of
          investment opportunities, and the assurance of transparency among all
          participants. By providing a dynamic online hub, the platform enables
          farmers and agricultural project initiators to showcase their
          ventures, solicit financial backing, and establish collaborations
          within a global network of potential investors. Key functionalities
          include the creation of comprehensive user profiles, detailed project
          listings, secure and transparent payment processing, implementation of
          smart contracts, blockchain-based transaction records, and audit
          trails ensuring transparency and traceability. The platform targets a
          diverse audience, including farmers, agricultural entrepreneurs,
          investors, and donors keen on supporting innovative agricultural
          endeavors.
        </p>
      </div>
      <img
        src='/images/crowd-4.png'
        alt='Crowdfunding'
        className='px-6 w-full sm:py-0 sm:px-12 lg:p-12 lg:w-5/12'
      />
    </div>
  );
};

export default Overview;
