import React from 'react';

const YouTubeEmbed = () => {
  return (
    <div className='flex flex-col justify-center' id='youtube'>
      <h2 className='text-xl font-bold mb-6 text-center border-b pb-4 text-green-500'>
        Demo Project
      </h2>
      <div className='flex justify-center'>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/NP5axpiC-aI'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded YouTube Video'
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
