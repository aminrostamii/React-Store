import shoppingImg from '../assets/shopping.jpg'

const DiagonalSlider = () => {
  return (
    <div className="flex pt-12 px-6 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden bg-gray-100">
      <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full md:w-1/2 lg:pr-32">
          <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
          Discover a stylish way to express your fashion.
          </h2>
          <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
          Our online clothing store is designed to elevate your style. Explore a wide range of fashionable clothing items, experience personalized assistance, and find the perfect look for every occasion — all in one place, and at irresistible prices.
          </h3>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
            <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-800 text-white border-2 border-blue-500">Explore Now</button>
            <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md  text-blue-800 bg-gray-400 border-2 border-gray-100">See the Styles</button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img src={shoppingImg} className='rounded-xl' alt="Shopping" />
        </div>
      </div>
    </div>
  );
};

export default DiagonalSlider;
