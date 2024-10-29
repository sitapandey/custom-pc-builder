import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
        {/* 左侧部分 - 版权信息 */}
        <div className="md:w-1/3">
          <p className="text-sm">&copy; 2024 Custom PC Builder. 保留所有权利。</p>
        </div>
        
        {/* 中间部分 - 链接部分 */}
        <div className="md:w-1/3 flex justify-center md:justify-center space-x-8 text-yellow-500">
          <a href="#terms" className="hover:underline hover:text-yellow-400 transition duration-300">服务条款</a>
          <a href="#privacy" className="hover:underline hover:text-yellow-400 transition duration-300">隐私政策</a>
        </div>

        {/* 右侧部分 - 社交媒体图标 */}
        <div className="md:w-1/3 flex justify-center md:justify-end space-x-6">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faFacebookF} className="text-2xl p-2 bg-blue-600 rounded-full" />
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faTwitter} className="text-2xl p-2 bg-blue-500 rounded-full" />
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl p-2 bg-pink-500 rounded-full" />
          </a>
        </div>
      </div>

      {/* 底部分隔线 */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-xs text-gray-500">
          设计和开发由 Custom PC Builder 团队完成
        </p>
      </div>
    </footer>
  );
}

export default Footer;
