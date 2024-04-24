import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import JapanImg from '../assets/JapanImg.png'

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100% - 80px)] mx-4 my-4">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-8 py-4">
        <h2 className="text-4xl font-semibold mb-4 leading-none">
          <span className="block text-8xl mb-4 text-nijin">Welcome</span>
          <span className="block text-8xl mb-4">to</span>
          <span className="block text-8xl mb-4 text-nijin">Work</span>
          <span className="block text-8xl mb-4">Opportunities</span>
          <span className="block text-8xl mb-4">in</span>
          <span className="block text-8xl mb-4 text-nijin">Japan</span>
        </h2>
        <p className="text-lg  mb-8">
          Discover exciting job opportunities and immerse yourself in the rich
          culture of Japan. Our ambition is to connect talented individuals with
          rewarding career paths and contribute to the growth of businesses in
          Japan. Join us in exploring new horizons and making a meaningful
          impact.
        </p>
        <div className="flex space-x-4">
          <Link
            to="/jobs"
            className="bg-nijin hover:bg-nitro text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-colors duration-300 flex gap-2 items-center"
          >
            <MdOutlineWorkOutline className="text-xl" />
            Explore Jobs
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center overflow-hidden">
        <img src={JapanImg} alt="Japan" className="h-full max-w-full rounded-xl" />
      </div>
    </div>
  );
};

export default Home;
