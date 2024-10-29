import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

function Banner() {
  return (
    <div className="animated-banner">
      <div className="animation-layer layer-one"></div>
      <div className="animation-layer layer-two"></div>
      <div className="animation-layer layer-three"></div>
      <div className="relative flex items-center justify-center h-full text-center text-white banner-content-container">
        <div className="banner-content space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold artistic-text">
            定制您的梦想电脑
          </h1>
          <p className="text-lg md:text-xl artistic-text fade-up">
            Tailor Your Dream PC According to Your Needs
          </p>
          <Link to="/custom-build">
            <button className="banner-button button-animated">
              开始定制 | Start Building
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
