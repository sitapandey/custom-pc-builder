import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import newsData from '../data/newsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import './NewsDetailPage.css';

function NewsDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const newsItem = newsData.find(item => item.id === id);

  if (!newsItem) {
    return (
      <div className="news-detail-page loading">
        <p>新闻加载中或找不到该新闻...</p>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: newsItem.title,
        text: newsItem.summary,
        url: window.location.href,
      })
      .then(() => console.log('分享成功'))
      .catch((error) => console.error('分享失败', error));
    } else {
      alert('您的浏览器不支持分享功能，请尝试手动复制链接分享。');
    }
  };

  return (
    <div className="news-detail-page container mx-auto my-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-4" data-aos="fade-down">{newsItem.title}</h2>
      <p className="text-center text-gray-500 mb-8" data-aos="fade-down">{newsItem.date}</p>
      <div className="news-image-container mb-8" data-aos="fade-up">
        <img src={newsItem.image} alt={newsItem.title} className="news-image w-full h-auto rounded-lg shadow-lg" />
      </div>
      <div className="news-content text-lg text-gray-800 leading-relaxed mb-8" data-aos="fade-up">
        {newsItem.content}
      </div>
      <div className="news-actions flex justify-center space-x-4 mt-12" data-aos="fade-up">
        <button
          onClick={handleShare}
          className="share-button bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-full flex items-center shadow-lg transition duration-500 ease-in-out transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faShareAlt} className="mr-2" />
          分享
        </button>
        <button
          onClick={() => navigate('/')}
          className="back-button bg-gray-300 hover:bg-gray-400 text-black px-6 py-3 rounded-full flex items-center shadow-lg transition duration-500 ease-in-out transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          返回主页新闻公告
        </button>
      </div>
    </div>
  );
}

export default NewsDetailPage;
