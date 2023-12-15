const Perspective = () => {
  return (
    <div className='relative'>
      <img
        src='/images/crowd-1.jpg'
        alt='Crowdfunding'
        className='w-full bg-cover'
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 bg-black bg-opacity-60 p-12'>
        <a href='#agricrowd'>
          <h1 className='text-4xl font-bold text-green-500 transition duration-300 mb-6'>
            What is Agricrowd?
          </h1>
        </a>
        <h2 className='text-2xl mb-6'>Our Perspective</h2>
        <div className=''>
          <p className='text-lg'>
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
