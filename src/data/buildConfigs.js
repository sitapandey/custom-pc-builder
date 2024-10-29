// buildConfigs.js

import gameSetupImage from '../assets/game-setup-1.jpg';
import officeSetupImage from '../assets/office-setup-1.jpg';
import designerSetupImage from '../assets/designer-setup-1.jpg';
import highEndSetupImage from '../assets/high-end-setup.jpg';
import valueSetupImage from '../assets/value-setup.jpg';
import randomSetupImage from '../assets/random-setup.jpg';

const buildConfigs = [
  {
    id: '1',
    name: '高端游戏装机',
    category: '游戏',
    description: '适合运行大作和高分辨率游戏的高端配置。',
    price: 15000,
    rating: 4.8,
    date: '2024-01-15',
    recommendedCount: 250,
    image: gameSetupImage,
    specs: ['Intel i9 CPU', 'NVIDIA RTX 3080 GPU', '32GB RAM', '1TB SSD']
  },
  {
    id: '2',
    name: '高效办公配置',
    category: '办公',
    description: '为日常办公和多任务处理提供稳定性和高效的办公配置。',
    price: 6000,
    rating: 4.5,
    date: '2024-02-10',
    recommendedCount: 150,
    image: officeSetupImage,
    specs: ['Intel i5 CPU', 'Integrated Graphics', '16GB RAM', '512GB SSD']
  },
  // ... 其他配置
  ...Array.from({ length: 65 }, (_, index) => {
    const categories = ['游戏', '办公', '设计', '高端', '性价比'];
    const category = categories[Math.floor(Math.random() * categories.length)];
    return {
      id: (index + 6).toString(),
      name: `${category}配置 - 配置 #${index + 6}`,
      category,
      description: `这是一个属于${category}的随机配置，适合该领域的需求。`,
      price: Math.floor(Math.random() * 10000) + 5000,
      rating: (Math.random() * 2 + 3).toFixed(1), // 生成 3.0 - 5.0 之间的评分
      date: `2024-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
      recommendedCount: Math.floor(Math.random() * 500),
      image: randomSetupImage,
      specs: ['随机配置的规格信息']
    };
  })
];

export default buildConfigs;
