import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import menuIcon from '../assets/hamburgerMenu.svg';
import mixiM from '../assets/mixiM.png';
import shoppingCart from '../assets/shoppingCart.svg'
import RegistrationForm from './registerForm';
import { useCart } from '../Contexts/cartContextProvider';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const cartItemCount = 1;
  const [state]=useCart()

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const isNavLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div>
      <nav className="border-gray-200 py-2.5 bg-black">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link to="/" className="flex items-center">
            <img src={mixiM} className="mr-3 sm:h-9" style={{ width: '100px', height: '70px' }} alt="Landwind Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Mixi Store</span>
          </Link>
          <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
              <span></span>
            </div>

            <div className="relative ml-2 mr-6">
              <Link to={'/ShoppingCart'}>
              <img src={shoppingCart} alt="Shopping Cart" className="h-10 w-10 cursor-pointer" />
              {state.itemsCounter > 0 && (
                <span className="absolute top-0 right-0 bg-blue-800 text-white rounded-full px-2 py-1 text-xs">
                  {state.itemsCounter}
                </span>
              )}
              </Link>   
            </div>

            <Link to={'/signUp'}
              href="https://themesberg.com/product/tailwind-css/landing-page"
              className="text-white bg-blue-800 hover:bg-blue-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0"
            >
              Sign In
            </Link>
            <button
              onClick={handleMobileMenuToggle}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <img src={menuIcon} alt="" className="h-6 w-6" />
              ) : (
                <img src={menuIcon} alt="" className="h-6 w-6" />
              )}
            </button>
          </div>
          <div
            className={`${
              isMobileMenuOpen ? 'block' : 'hidden'
            } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  className={`block py-2 pl-3 pr-4 ${
                    isNavLinkActive('/') ? 'text-white rounded lg:bg-transparent  lg:p-0 dark:text-white' : 'text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-50 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-500 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-500'
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className={`block py-2 pl-3 pr-4 ${
                    isNavLinkActive('/products') ? 'text-white  rounded lg:bg-transparent lg:p-0 ' : 'text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-50 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-500 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-500'
                  }`}
                >
                  Store
                </Link>
              </li>
              <li>
                <Link
                  to="/Support"
                  className={`block py-2 pl-3 pr-4 ${
                    isNavLinkActive('/Support') ? 'text-white  rounded lg:bg-transparent lg:text-gray-50 lg:p-0 dark:text-white' : 'text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-50 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-500 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-500'
                  }`}
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to="/AboutUS"
                  className={`block py-2 pl-3 pr-4 ${
                    isNavLinkActive('/AboutUS') ? 'text-white rounded lg:bg-transparent lg:text-gray-50 lg:p-0 dark:text-white' : 'text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-50 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-500 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-500'
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/Contacts"
                  className={`block py-2 pl-3 pr-4 ${
                    isNavLinkActive('/Contacts') ? 'text-white bg-purple-500 rounded lg:bg-transparent lg:text-gray-50 lg:p-0 dark:text-white' : 'text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-50 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-500 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-500'
                  }`}
                >
                  Contacts
                </Link>
              </li>
              {/* ... (Repeat for other navigation items) */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
