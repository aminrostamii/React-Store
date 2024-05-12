
const SearchBar = ({ search, setSearch, searchHandler }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchHandler();
    }
  };

  return (
    <label
      style={{ width: '98%', maxWidth: '40rem' }}
      htmlFor="search-bar"
      className=" mx-1 mb-4 mt-4 sm:mr-12 sm:ml-8 sm:mt-10 relative w-auto  bg-white flex flex-row sm:flex-row items-start justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
    >
      <input
        id="search-bar"
        placeholder="your keyword here"
        className="px-6 py-2 w-auto rounded-md flex-1 outline-none bg-white"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={searchHandler}
        className="w-auto md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70"
      >
        <div className="relative">
          <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
            <svg
              className="opacity-0 animate-spin w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
        Search
      </button>
    </label>
  );
};

export default SearchBar;
