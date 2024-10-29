// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTag } from '@fortawesome/free-solid-svg-icons';

// function Promotions() {
//   return (
//     <div className="my-16 px-8 relative">
//       {/* 背景图案 */}
//       <div className="absolute inset-0 bg-yellow-100 opacity-30 rounded-lg blur-lg -z-10"></div>

//       {/* 内容部分 */}
//       <div className="bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-100 border-l-4 border-yellow-500 p-8 rounded-lg shadow-lg flex items-center space-x-6 transition duration-300 hover:shadow-xl">
//         <FontAwesomeIcon icon={faTag} className="text-yellow-500 text-5xl" />
//         <div className="flex flex-col space-y-2">
//           <h2 className="text-3xl font-bold text-yellow-800">当前促销活动</h2>
//           <p className="text-lg text-yellow-700">限时折扣 - 所有配置8折优惠，赶快行动！</p>
//           <button className="mt-4 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 transform hover:scale-110 hover:shadow-md">
//             了解更多
//           </button>
//         </div>
//         <div className="flex flex-col space-y-2">
//           <h2 className="text-3xl font-bold text-yellow-800">当前促销活动</h2>
//           <p className="text-lg text-yellow-700">限时折扣 - 所有配置8折优惠，赶快行动！</p>
//           <button className="mt-4 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 transform hover:scale-110 hover:shadow-md">
//             了解更多
//           </button>
//         </div>
//         <div className="flex flex-col space-y-2">
//           <h2 className="text-3xl font-bold text-yellow-800">当前促销活动</h2>
//           <p className="text-lg text-yellow-700">限时折扣 - 所有配置8折优惠，赶快行动！</p>
//           <button className="mt-4 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 transform hover:scale-110 hover:shadow-md">
//             了解更多
//           </button>
//         </div>
//         <div className="flex flex-col space-y-2">
//           <h2 className="text-3xl font-bold text-yellow-800">当前促销活动</h2>
//           <p className="text-lg text-yellow-700">限时折扣 - 所有配置8折优惠，赶快行动！</p>
//           <button className="mt-4 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 transform hover:scale-110 hover:shadow-md">
//             了解更多
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Promotions;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // 导入 useNavigate
import promotionImage from '../assets/promotion-image.jpg'; // 示例促销图片
import './Promotions.css';

function Promotions() {
  const navigate = useNavigate(); // 使用 useNavigate 钩子进行导航

  const handleLearnMore = () => {
    navigate('/promotion-detail'); // 点击按钮跳转到促销详情页面
  };

  return (
    <div className="my-16 px-8 relative">
      {/* 背景图案 */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-300 opacity-25 blur-xl rounded-lg -z-10"></div>

      {/* 促销内容卡片 */}
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-2xl p-8 space-y-6 md:space-y-0 md:space-x-8 transition-all duration-500 hover:shadow-3xl">
        {/* 图标和视觉部分 */}
        <div className="relative flex-shrink-0">
          <FontAwesomeIcon icon={faFire} className="text-yellow-600 text-6xl animate-bounce-slow" />
        </div>
        
        {/* 文字和按钮部分 */}
        <div className="flex-grow">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">限时促销 - 火热进行中！</h2>
          <p className="text-lg text-gray-600 mb-6">所有配置享受8折优惠，活动仅限本周。赶紧抢购，定制属于您的梦想电脑！</p>
          <button 
            onClick={handleLearnMore} // 添加点击事件
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 rotate-1 hover:rotate-0 shadow-md hover:shadow-lg"
          >
            了解更多
          </button>
        </div>

        {/* 图片部分 */}
        <div className="hidden md:block">
          <img src={promotionImage} alt="促销活动图片" className="w-48 h-48 object-cover rounded-lg shadow-md transform transition duration-500 hover:scale-110" />
        </div>
      </div>
    </div>
  );
}

export default Promotions;
