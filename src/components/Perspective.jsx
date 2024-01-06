const Perspective = () => {
  return (
    <div className='relative pt-24 md:pt-20 lg:pt-16' id='perspective'>
      <img
        src='/images/crowd-1.jpg'
        alt='Crowdfunding'
        className='w-full bg-cover'
      />
      <div className='absolute pt-32 md:pt-24 lg:p-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 bg-black bg-opacity-50 p-6 w-full h-full md:w-2/3 md:flex md:flex-col md:justify-center lg:h-2/3'>
        <h1 className='font-bold text-green-500 transition duration-300 mb-4 sm:mb-6 text-xl sm:text-2xl lg:text-3xl xl:text-4xl'>
          What is Agricrowd?
        </h1>

        <h2 className='mb-4 sm:mb-6 text-lg sm:text-xl lg:text-2xl xl:text-3xl'>
          Our Perspective
        </h2>
        <div className=''>
          <p className='text-xs sm:text-sm md:text-base lg:text-base xl:text-lg'>
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
