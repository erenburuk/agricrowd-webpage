const Perspective = () => {
  return (
    <div className='relative pt-20 lg:pt-16' id='perspective'>
      <img
        src='/images/crowd-1.jpg'
        alt='Crowdfunding'
        className='w-full bg-cover'
      />
      <div className='absolute flex flex-col justify-center lg:p-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 bg-black bg-opacity-50 sm:p-6 w-full h-full'>
        <h1 className='font-bold text-green-500 mt-20 xs:mt-24 sm:mb-6 text-lg sm:text-2xl md:text-3xl xl:text-4xl'>
          What is Agricrowd?
        </h1>

        <h2 className='sm:mb-6 text-base sm:text-xl md:text-2xl xl:text-3xl'>
          Our Perspective
        </h2>
        <div className=''>
          <p className='xs:px-1 sm:px-12 lg:px-24 xl:px-36 text-xs sm:text-sm lg:text-base xl:text-xl'>
            The agricultural crowdfunding platform embodies an innovative
            digital environment specifically designed to revolutionize the
            financial landscape within the agricultural sector. Functioning as
            an independent and comprehensive online solution, it serves as a
            pivotal point of connection between agricultural project initiators,
            encompassing individual farmers, cooperatives, and larger-scale
            agricultural enterprises, and potential investors, including
            individuals, organizations, or institutions interested in supporting
            these initiatives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Perspective;
