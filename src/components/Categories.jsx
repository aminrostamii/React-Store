import React, { useState } from 'react';

const Categories = ({ categoriesHandler }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    categoriesHandler(category); // You can pass the selected category to the handler if needed
  };

  return (
    <ul 
      onClick={categoriesHandler}
      className="flex flex-wrap gap-2 justify-center items-center sm:mr-20"
      style={{ width: '100%', maxWidth: '40rem' }}
    >
      <li
        className={`inline-block cursor-pointer ${
          activeCategory === 'All'
            ? 'bg-blue-800 text-white' // Apply your active styles for 'All' category
            : 'bg-opacity-35 hover:opacity-70'
        } backdrop-filter backdrop-blur-lg shadow-xl border border-opacity-18 p-4 text-black font-normal rounded-xl text-sm mt-2 break-words`}
        onClick={() => handleCategoryClick('All')}
      >
        All
      </li>

      <li
        className={`inline-block cursor-pointer ${
          activeCategory === 'Electronics'
            ? 'bg-blue-800 text-white' // Apply your active styles for 'Electronics' category
            : 'bg-opacity-35 hover:opacity-70'
        } backdrop-filter backdrop-blur-lg shadow-xl border border-opacity-18 p-4 text-black font-normal rounded-xl text-sm mt-2 break-words`}
        onClick={() => handleCategoryClick('Electronics')}
      >
        Electronics
      </li>

      <li
        className={`inline-block cursor-pointer ${
          activeCategory === 'Jewelery'
            ? 'bg-blue-800 text-white' // Apply your active styles for 'Jewelery' category
            : 'bg-opacity-35 hover:opacity-70'
        } backdrop-filter backdrop-blur-lg shadow-xl border border-opacity-18 p-4 text-black font-normal rounded-xl text-sm mt-2 break-words`}
        onClick={() => handleCategoryClick('Jewelery')}
      >
        Jewelery
      </li>

      <li
        className={`inline-block cursor-pointer ${
          activeCategory === 'Men\'s clothing'
            ? 'bg-blue-800 text-white' // Apply your active styles for 'Men\'s clothing' category
            : 'bg-opacity-35 hover:opacity-70'
        } backdrop-filter backdrop-blur-lg shadow-xl border border-opacity-18 p-4 text-black font-normal rounded-xl text-sm mt-2 break-words`}
        onClick={() => handleCategoryClick('Men\'s clothing')}
      >
        Men's clothing
      </li>

      <li
        className={`inline-block cursor-pointer ${
          activeCategory === 'Women\'s clothing'
            ? 'bg-blue-800 text-white' // Apply your active styles for 'Women\'s clothing' category
            : 'bg-opacity-35 hover:opacity-70'
        } backdrop-filter backdrop-blur-lg shadow-xl border border-opacity-18 p-4 text-black font-normal rounded-xl text-sm mt-2 break-words`}
        onClick={() => handleCategoryClick('Women\'s clothing')}
      >
        Women's clothing
      </li>
    </ul>
  );
};

export default Categories;
