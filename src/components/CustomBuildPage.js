import React, { useState, useEffect } from 'react';
import Header from './Header';
import ComponentSelection from './ComponentSelection';
import Summary from './Summary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faMemory, faHdd, faFan, faThermometerThreeQuarters, faLaptopHouse, faServer, faBolt } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CustomBuildPage.css';

// 示例组件选项数据
const cpuOptions = [
  { name: 'Intel i5', price: 200, description: '适合日常办公和中等强度的游戏' },
  { name: 'Intel i7', price: 300, description: '适合高端游戏和多任务处理' },
  { name: 'AMD Ryzen 5', price: 250, description: '适合高性能需求，性价比高' },
];

const gpuOptions = [
  { name: 'NVIDIA GTX 1660', price: 300, description: '适合流行游戏和普通任务' },
  { name: 'NVIDIA RTX 3060', price: 500, description: '适合高性能游戏和图形处理' },
  { name: 'AMD Radeon RX 5600', price: 400, description: '性价比较高的选择' },
];

const ramOptions = [
  { name: '16GB DDR4', price: 80, description: '适合日常办公和轻量游戏' },
  { name: '32GB DDR4', price: 150, description: '适合多任务处理和高端游戏' },
  { name: '64GB DDR4', price: 300, description: '适合极限性能需求' },
];

const storageOptions = [
  { name: '1TB HDD', price: 50, description: '大容量机械硬盘，适合文件存储' },
  { name: '500GB SSD', price: 100, description: '高速固态硬盘，适合系统和应用程序' },
  { name: '1TB SSD', price: 180, description: '大容量固态硬盘，适合高性能需求' },
];

const psuOptions = [
  { name: '500W Bronze', price: 60, description: '适合基础配置' },
  { name: '650W Gold', price: 100, description: '高效电源，适合中等配置' },
  { name: '750W Platinum', price: 150, description: '高性能电源，适合发烧友' },
];

const motherboardOptions = [
  { name: 'ASUS B450', price: 120, description: '性价比较高，适合入门用户' },
  { name: 'MSI Z490', price: 200, description: '适合中高端用户' },
  { name: 'Gigabyte X570', price: 250, description: '高端用户的理想选择' },
];

const coolingOptions = [
  { name: 'Air Cooler', price: 50, description: '基础的空气散热器' },
  { name: 'Liquid Cooler', price: 120, description: '高效液冷系统，适合高温环境' },
  { name: 'Noctua NH-D15', price: 90, description: '顶级空气散热器，安静且高效' },
];

const caseOptions = [
  { name: 'Mid Tower Case', price: 70, description: '适合大多数标准配置' },
  { name: 'Full Tower Case', price: 150, description: '适合高端配置和多GPU设置' },
  { name: 'Mini ITX Case', price: 90, description: '适合紧凑型小型机箱配置' },
];

function CustomBuildPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // 定义状态来跟踪用户的选择和总价
  const [selectedComponents, setSelectedComponents] = useState({
    cpu: null,
    gpu: null,
    ram: null,
    storage: null,
    psu: null,
    motherboard: null,
    cooling: null,
    case: null,
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [budget, setBudget] = useState('');
  const [usage, setUsage] = useState('');

  // 当用户选择组件时更新状态
  const handleComponentChange = (componentType, component) => {
    setSelectedComponents((prev) => ({
      ...prev,
      [componentType]: component,
    }));

    // 重新计算总价
    const newPrice = Object.values({ ...selectedComponents, [componentType]: component })
      .filter((item) => item !== null)
      .reduce((acc, curr) => acc + curr.price, 0);
    setTotalPrice(newPrice);
  };

  // 根据用户的预算和需求推荐配置
  const handleRecommend = () => {
    let recommendedComponents = {
      cpu: null,
      gpu: null,
      ram: null,
      storage: null,
      psu: null,
      motherboard: null,
      cooling: null,
      case: null,
    };

    if (usage === 'gaming') {
      recommendedComponents = {
        cpu: cpuOptions[1], // Intel i7
        gpu: gpuOptions[1], // NVIDIA RTX 3060
        ram: ramOptions[1], // 32GB DDR4
        storage: storageOptions[2], // 1TB SSD
        psu: psuOptions[1], // 650W Gold
        motherboard: motherboardOptions[1], // MSI Z490
        cooling: coolingOptions[1], // Liquid Cooler
        case: caseOptions[0], // Mid Tower Case
      };
    } else if (usage === 'design') {
      recommendedComponents = {
        cpu: cpuOptions[1], // Intel i7
        gpu: gpuOptions[1], // NVIDIA RTX 3060
        ram: ramOptions[2], // 64GB DDR4
        storage: storageOptions[2], // 1TB SSD
        psu: psuOptions[2], // 750W Platinum
        motherboard: motherboardOptions[2], // Gigabyte X570
        cooling: coolingOptions[1], // Liquid Cooler
        case: caseOptions[1], // Full Tower Case
      };
    } else if (usage === 'office') {
      recommendedComponents = {
        cpu: cpuOptions[0], // Intel i5
        gpu: gpuOptions[0], // NVIDIA GTX 1660
        ram: ramOptions[0], // 16GB DDR4
        storage: storageOptions[1], // 500GB SSD
        psu: psuOptions[0], // 500W Bronze
        motherboard: motherboardOptions[0], // ASUS B450
        cooling: coolingOptions[0], // Air Cooler
        case: caseOptions[0], // Mid Tower Case
      };
    }

    // 根据预算调整配置
    let currentTotal = Object.values(recommendedComponents)
      .filter((item) => item !== null)
      .reduce((acc, curr) => acc + curr.price, 0);

    if (budget && currentTotal > budget) {
      // 根据预算减少某些组件的配置
      if (budget < 1000) {
        recommendedComponents.gpu = gpuOptions[0]; // 降级 GPU
        recommendedComponents.ram = ramOptions[0]; // 降级 RAM
        recommendedComponents.storage = storageOptions[1]; // 降级存储
      }
    }

    setSelectedComponents(recommendedComponents);
    setTotalPrice(currentTotal);
  };

  return (
    <div className="custom-build-page">
      <Header />
      <div className="recommendation-container">
        <h2 className="section-title" data-aos="fade-right">智能推荐配置</h2>
        <p className="recommendation-description" data-aos="fade-up">
          根据您的预算和用途，我们将为您推荐最合适的硬件配置，确保您获得最佳的性价比。请根据以下选项填写您的预算和需求，我们将为您智能推荐最佳组合。
        </p>
        <div className="recommendation-inputs" data-aos="fade-up">
          <input
            type="number"
            placeholder="输入您的预算 (¥)"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="budget-input styled-input"
          />
          <select value={usage} onChange={(e) => setUsage(e.target.value)} className="usage-select styled-select">
            <option value="">选择用途</option>
            <option value="gaming">游戏</option>
            <option value="design">设计</option>
            <option value="office">办公</option>
          </select>
          <button onClick={handleRecommend} className="recommend-button styled-button">获取推荐配置</button>
        </div>
      </div>
      <div className="components-selection-container">
        <h2 className="section-title" data-aos="fade-left">选择您的组件</h2>
        <div className="components-selection" data-aos="fade-up">
          <div className="component-section">
            <FontAwesomeIcon icon={faMicrochip} className="component-icon" />
            <ComponentSelection
              componentType="cpu"
              options={cpuOptions}
              onComponentChange={handleComponentChange}
              selectedComponent={selectedComponents.cpu}
            />
          </div>
          <div className="component-section">
            <FontAwesomeIcon icon={faMemory} className="component-icon" />
            <ComponentSelection
              componentType="gpu"
              options={gpuOptions}
              onComponentChange={handleComponentChange}
              selectedComponent={selectedComponents.gpu}
            />
          </div>
          <div className="component-section">
            <FontAwesomeIcon icon={faMemory} className="component-icon" />
            <ComponentSelection
              componentType="ram"
              options={ramOptions}
              onComponentChange={handleComponentChange}
              selectedComponent={selectedComponents.ram}
            />
          </div>
          <div className="component-section">
            <FontAwesomeIcon icon={faHdd} className="component-icon" />
            <ComponentSelection
              componentType="storage"
              options={storageOptions}
              onComponentChange={handleComponentChange}
              selectedComponent={selectedComponents.storage}
            />
          </div>
          <div className="component-section">
            <FontAwesomeIcon icon={faBolt} className="component-icon" />
            <ComponentSelection
              componentType="psu"
              options={psuOptions}
              onComponentChange={handleComponentChange}
              selectedComponent={selectedComponents.psu}
            />
          </div>
          <div className="component-section">
            <FontAwesomeIcon icon={faServer} className="component-icon" />
            <ComponentSelection
              componentType="motherboard"
              options={motherboardOptions}
              onComponentChange={handleComponentChange}
              selectedComponent={selectedComponents.motherboard}
            />
          </div>
          <div className="component-section">
            <FontAwesomeIcon icon={faFan} className="component-icon" />
            <ComponentSelection
              componentType="cooling"
              options={coolingOptions}
              onComponentChange={handleComponentChange}
              selectedComponent={selectedComponents.cooling}
            />
          </div>
          <div className="component-section">
            <FontAwesomeIcon icon={faLaptopHouse} className="component-icon" />
            <ComponentSelection
              componentType="case"
              options={caseOptions}
              onComponentChange={handleComponentChange}
              selectedComponent={selectedComponents.case}
            />
          </div>
        </div>
      </div>
      <Summary totalPrice={totalPrice} selectedComponents={selectedComponents} />
    </div>
  );
}

export default CustomBuildPage;
