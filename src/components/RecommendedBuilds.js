import React from 'react';
import { Link } from 'react-router-dom';
function RecommendedBuilds() {
    const builds = [
        { name: "游戏配置", price: "¥8000", description: "适合高性能游戏" },
        { name: "办公配置", price: "¥5000", description: "适合日常办公" },
        { name: "设计师配置", price: "¥12000", description: "为设计师量身定做" }
    ];

    return (
        <div className="my-16 px-8">
            <h2 className="text-3xl font-bold text-center mb-8">推荐配置</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {builds.map((build, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50 hover:brightness-110">
                        <h3 className="text-2xl font-semibold mb-4">{build.name}</h3>
                        <p className="mb-4 text-gray-600">{build.description}</p>
                        <p className="text-xl font-bold text-yellow-500 mb-4">价格：{build.price}</p>
                    <Link to="/custom-build">
                    <button className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300">
                            查看详情
                        </button>
                    </Link>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default RecommendedBuilds;
