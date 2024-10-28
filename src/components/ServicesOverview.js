import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faShieldAlt, faBroom } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './ServicesOverview.css';

function ServicesOverview() {
  const navigate = useNavigate();

  // 定义服务内容数组
  const services = [
    {
      title: "定制装机",
      description: "根据您的需求为您定制专属电脑。",
      icon: faWrench,
      path: "/custom-build",
    },
    {
      title: "保修服务",
      description: "提供一年保修服务，让您放心使用。",
      icon: faShieldAlt,
      path: "/service-booking",
    },
    {
      title: "清灰维护",
      description: "定期维护与清灰，保持设备性能最佳。",
      icon: faBroom,
      path: "/service-booking",
    },
  ];

  // 处理跳转功能
  const handleServiceClick = (path) => {
    navigate(path);
  };

  return (
    <div className="my-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">我们的服务</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 bg-blue-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer"
            onClick={() => handleServiceClick(service.path)}
          >
            <FontAwesomeIcon icon={service.icon} className="text-blue-500 text-4xl mb-4 animate-pulse-slow" />
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesOverview;
