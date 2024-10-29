import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import newsImage from '../assets/news-image.jpg'; // 示例图片路径
import { Link } from 'react-router-dom';
import './News.css';

function News() {
    const newsItems = [
        { id: '1', title: "新款显卡发布", date: "2024-01-10", image: newsImage },
        { id: '2', title: "双十一装机活动开始啦！", date: "2024-11-01", image: newsImage },
        { id: '3', title: "如何选择适合您的电脑配置", date: "2024-06-15", image: newsImage }
    ];

    return (
        <div className="my-16 px-8">
            <h2 className="text-3xl font-bold text-center mb-8">新闻公告</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {newsItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        {/* 图片部分 */}
                        <div className="relative">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                            <div className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 text-sm font-semibold rounded-md shadow-md">
                                {item.date}
                            </div>
                        </div>
                        {/* 内容部分 */}
                        <div className="p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <FontAwesomeIcon icon={faNewspaper} className="text-blue-500 text-2xl" />
                                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                            </div>
                            <p className="text-gray-600 mb-4">新闻概述内容，提供一些关于该新闻的简短信息，吸引用户点击了解更多。</p>
                            <Link to={`/news/${item.id}`} className="text-blue-600 font-bold hover:text-blue-800 transition duration-300">
                                阅读更多
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;
