import React from 'react';
import { Link } from 'react-router-dom';
function Banner() {
  return (
    <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('../assets/banner-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative flex items-center justify-center h-full text-center text-white">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">定制您的梦想电脑</h1>
          <p className="text-lg md:text-xl">根据您的需求打造独一无二的装机方案。</p>
        <Link to="/custom-build">
        <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 transform hover:scale-105">
            开始定制
          </button>
        </Link>

        </div>
      </div>
    </div>
  );
}

export default Banner;
