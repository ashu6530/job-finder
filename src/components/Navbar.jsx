import React from 'react';
import { Link } from 'react-router-dom';
import JapanLogo from '../assets/japanlogo.png'
import TranslateFetch from './TranslateFetch';

const Navbar = () => {
  return (
    <div className="w-full bg-nijin text-white py-4 px-8 h-20 z-99 flex items-center" >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold transition-colors duration-300 ease-in-out overflow-hidden">
          <img src={JapanLogo} alt="" className='w-[60px] h-[60px] object-cover rounded-full' />
        </Link>
        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link to="/" className="text-2xl hover:border-b-4 transition-all duration-300 ease-in-out">Home</Link>
          <Link to="/about" className="text-2xl hover:border-b-4 transition-all duration-300 ease-in-out">About Us</Link>
          <Link to="/jobs" className="text-2xl hover:border-b-4 transition-all duration-300 ease-in-out">Jobs</Link>
          <Link to="/companies" className="text-2xl hover:border-b-4 transition-all duration-300 ease-in-out">Companies</Link>         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
