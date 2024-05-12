import React from 'react';

const Banner = () => {
  return (
    <main className="w-full bg-gray-100 flex justify-center flex-wrap sm:flex-row-reverse gap-3 p-4 md:mt-6">
      <div className="px-4 max-w-[640px]">
        {/* <img src="https://raw.githubusercontent.com/prajwal89/audiostory-app-landing-page/ec384e241176d1bfddac9df979c14e37a05a7afe/dist/static/logo.png" className="h-20 py-4" alt="audiostory app maker" /> */}

        <h1 className="font-extrabold text-[36px] md:text-[50px] leading-10 md:leading-normal">
          #1 App Builder
          <br />
          for audiobooks and podcasts
        </h1>

        <p className="py-8 text-xl md:text-2xl font-bold text-gray-600">
          Studio makes it easy to create high-quality audio apps
          <br />
          right on your phone
        </p>

        <div className="flex flex-col items-center">
          <a href="https://www.youtube.com/watch?v=SPAr1TaSW2o">
            <svg id="svg51" className="h-32 py-6" version="1.1" viewBox="0 0 180 53.333" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
              {/* Add the path elements and other SVG content here */}
            </svg>
          </a>

          <div className="flex items-center gap-6 mt-4 pl-1">
            <a className="text-gray-700 hover:text-orange transition-colors" aria-label="Visit TrendyMinds Instagram" href="https://www.instagram.com/audiostoryappstudio" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8">
                {/* Add the path element for Instagram icon */}
              </svg>
            </a>
            <a className="text-gray-700 hover:text-orange transition-colors" aria-label="Visit TrendyMinds YouTube" href="https://t.me/audiostoryappstudio" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-8">
                {/* Add the path element for YouTube icon */}
              </svg>
            </a>
            <a className="text-gray-700 hover:text-orange transition-colors" aria-label="Visit TrendyMinds YouTube" href="https://www.youtube.com/@audiostoryappstudio" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-8" viewBox="0 0 24 24">
                {/* Add the path element for YouTube icon */}
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-lg flex justify-center items-center">
        {/* Add the YouTube video iframe or image */}
        <img src="https://raw.githubusercontent.com/prajwal89/audiostory-app-landing-page/ec384e241176d1bfddac9df979c14e37a05a7afe/dist/static/watch_on_youtube.png" className="h-[600px]" alt="" />
      </div>
    </main>
  );
};

export default Banner;
