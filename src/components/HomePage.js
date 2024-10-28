// src/components/HomePage.js
import React from 'react';
import Banner from './Banner';
import RecommendedBuilds from './RecommendedBuilds';
import ServicesOverview from './ServicesOverview';
import Promotions from './Promotions';
import News from './News';

function HomePage() {
  return (
    <div>
      <Banner />
      <RecommendedBuilds data-aos="fade-up" />
      <ServicesOverview data-aos="fade-up" />
      <Promotions data-aos="fade-up" />
      {/* 为 News 组件添加一个特定的 id */}
      <div id="news-section">
        <News data-aos="fade-up" />
      </div>
    </div>
  );
}

export default HomePage;
