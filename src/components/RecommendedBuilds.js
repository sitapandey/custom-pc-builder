import React from 'react';
import { Link } from 'react-router-dom';
import gameSetupImage from '../assets/game-setup-1.jpg';
import officeSetupImage from '../assets/office-setup-1.jpg';
import designerSetupImage from '../assets/designer-setup-1.jpg';
import './RecommendedBuilds.css';

function RecommendedBuilds() {
  // 推荐配置数据
  const recommendedBuilds = [
    {
        id: 1,
        name: '高端游戏装机',
        category: '游戏',
        description: '适合运行大作和高分辨率游戏的高端配置。',
        price: 15000,
        rating: 4.8,
        date: '2024-01-15',
        recommendedCount: 250,
        image: gameSetupImage
      },
      {
        id: 2,
        name: '高效办公配置',
        category: '办公',
        description: '为日常办公和多任务处理提供稳定性和高效的办公配置。',
        price: 6000,
        rating: 4.5,
        date: '2024-02-10',
        recommendedCount: 150,
        image: officeSetupImage
      },
      {
        id: 3,
        name: '设计师专用配置',
        category: '设计',
        description: '图形处理和设计应用的高性能配置，提升您的工作效率。',
        price: 18000,
        rating: 4.9,
        date: '2024-03-05',
        recommendedCount: 300,
        image: designerSetupImage
      },
  ];

  return (
    <div className="recommended-builds container mx-auto my-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">推荐配置</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {recommendedBuilds.map((build) => (
          <div key={build.id} className="build-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <img src={build.image} alt={build.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{build.name}</h3>
              <p className="text-gray-600 mb-4">{build.description}</p>
              <p className="text-xl font-semibold mb-2">价格：¥{build.price}</p>
              <Link to={`/build/${build.id}`} className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                查看详情
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedBuilds;
