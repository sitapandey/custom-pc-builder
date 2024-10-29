import React, { useState } from 'react';
import ComponentSelection from './ComponentSelection';
import Summary from './Summary';
import './CustomBuildPage.css';

// 示例组件选项数据
const componentOptions = {
  cpu: [
    // CPU的数据（来自第一部分）
    {
      brand: 'Intel',
      models: [
        { name: 'i5-12400F', price: 150 },
        { name: 'i7-12700K', price: 350 },
        { name: 'i9-12900K', price: 500 }
      ]
    },
    {
      brand: 'AMD',
      models: [
        { name: 'Ryzen 5 5600X', price: 200 },
        { name: 'Ryzen 7 5800X', price: 300 },
        { name: 'Ryzen 9 5950X', price: 700 }
      ]
    }
  ],
  gpu: [
    // GPU的数据（来自第一部分）
    {
      brand: 'NVIDIA',
      models: [
        { name: 'RTX 3060', price: 400 },
        { name: 'RTX 3070', price: 600 },
        { name: 'RTX 3080', price: 800 }
      ]
    },
    {
      brand: 'AMD',
      models: [
        { name: 'Radeon RX 6700XT', price: 450 },
        { name: 'Radeon RX 6800XT', price: 650 },
        { name: 'Radeon RX 6900XT', price: 900 }
      ]
    }
  ],
  ram: [
    {
      brand: 'Corsair',
      models: [
        { name: 'Vengeance LPX 16GB (2 x 8GB) DDR4-3200', price: 80 },
        { name: 'Vengeance RGB Pro 32GB (2 x 16GB) DDR4-3600', price: 150 },
        { name: 'Dominion Platinum 64GB (2 x 32GB) DDR4-3200', price: 300 }
      ]
    },
    {
      brand: 'G.Skill',
      models: [
        { name: 'Ripjaws V 16GB (2 x 8GB) DDR4-3200', price: 75 },
        { name: 'Trident Z RGB 32GB (2 x 16GB) DDR4-4000', price: 180 },
        { name: 'Trident Z Neo 64GB (2 x 32GB) DDR4-3600', price: 350 }
      ]
    },
    {
      brand: 'Kingston',
      models: [
        { name: 'HyperX Fury 16GB (2 x 8GB) DDR4-2666', price: 65 },
        { name: 'Fury RGB 32GB (2 x 16GB) DDR4-3200', price: 140 },
        { name: 'Fury Beast 64GB (2 x 32GB) DDR4-3600', price: 290 }
      ]
    }
  ],
  storage: [
    {
      brand: 'Samsung',
      models: [
        { name: '970 EVO Plus 500GB NVMe SSD', price: 90 },
        { name: '970 EVO Plus 1TB NVMe SSD', price: 150 },
        { name: '870 QVO 2TB SATA SSD', price: 180 }
      ]
    },
    {
      brand: 'Western Digital',
      models: [
        { name: 'Blue SN550 500GB NVMe SSD', price: 70 },
        { name: 'Black SN750 1TB NVMe SSD', price: 140 },
        { name: 'Blue 4TB HDD', price: 110 }
      ]
    },
    {
      brand: 'Seagate',
      models: [
        { name: 'Barracuda 1TB HDD', price: 50 },
        { name: 'FireCuda 520 1TB NVMe SSD', price: 160 },
        { name: 'IronWolf 4TB NAS HDD', price: 120 }
      ]
    }
  ],
  psu: [
    {
      brand: 'Corsair',
      models: [
        { name: 'CV550 550W 80+ Bronze', price: 60 },
        { name: 'RM750x 750W 80+ Gold', price: 120 },
        { name: 'HX1200 1200W 80+ Platinum', price: 250 }
      ]
    },
    {
      brand: 'EVGA',
      models: [
        { name: '600 W1 600W 80+ White', price: 50 },
        { name: 'SuperNOVA 750 G5 750W 80+ Gold', price: 130 },
        { name: 'SuperNOVA 1000 P2 1000W 80+ Platinum', price: 200 }
      ]
    },
    {
      brand: 'Cooler Master',
      models: [
        { name: 'MWE 500W 80+ Bronze', price: 55 },
        { name: 'V850 850W 80+ Gold', price: 140 },
        { name: 'MasterWatt 1200W 80+ Titanium', price: 300 }
      ]
    }
  ],
  motherboard: [
    {
      brand: 'ASUS',
      models: [
        { name: 'ASUS ROG STRIX B450-F Gaming', price: 120 },
        { name: 'ASUS TUF Gaming X570-Plus', price: 200 },
        { name: 'ASUS PRIME Z690-P', price: 250 }
      ]
    },
    {
      brand: 'MSI',
      models: [
        { name: 'MSI B450 Tomahawk Max', price: 130 },
        { name: 'MSI MPG Z490 Gaming Edge', price: 220 },
        { name: 'MSI MEG Z690 Unify', price: 320 }
      ]
    },
    {
      brand: 'Gigabyte',
      models: [
        { name: 'Gigabyte B450 Aorus Elite', price: 125 },
        { name: 'Gigabyte Z590 Aorus Pro AX', price: 240 },
        { name: 'Gigabyte X570 Aorus Master', price: 350 }
      ]
    }
  ],
  cooling: [
    {
      brand: 'Noctua',
      models: [
        { name: 'Noctua NH-D15', price: 90 },
        { name: 'Noctua NH-L9i', price: 50 },
        { name: 'Noctua NH-U12S Redux', price: 60 }
      ]
    },
    {
      brand: 'Cooler Master',
      models: [
        { name: 'Cooler Master Hyper 212', price: 40 },
        { name: 'Cooler Master MasterLiquid ML240L', price: 80 },
        { name: 'Cooler Master MasterAir MA620P', price: 70 }
      ]
    },
    {
      brand: 'Corsair',
      models: [
        { name: 'Corsair H100i RGB Platinum', price: 130 },
        { name: 'Corsair H150i PRO XT', price: 170 },
        { name: 'Corsair iCUE H60i RGB Pro XT', price: 100 }
      ]
    }
  ],
  case: [
    {
      brand: 'NZXT',
      models: [
        { name: 'NZXT H510', price: 70 },
        { name: 'NZXT H710', price: 150 },
        { name: 'NZXT H510 Elite', price: 120 }
      ]
    },
    {
      brand: 'Corsair',
      models: [
        { name: 'Corsair 275R Airflow', price: 80 },
        { name: 'Corsair iCUE 4000X RGB', price: 110 },
        { name: 'Corsair Crystal Series 680X', price: 200 }
      ]
    },
    {
      brand: 'Cooler Master',
      models: [
        { name: 'Cooler Master MasterBox TD500 Mesh', price: 90 },
        { name: 'Cooler Master HAF 700 EVO', price: 300 },
        { name: 'Cooler Master NR200P', price: 100 }
      ]
    }
  ],
};


function CustomBuildPage() {
  const [selectedComponents, setSelectedComponents] = useState({
    cpu: null,
    gpu: null,
    ram: null,
    storage: null,
    psu: null,
    // 其他组件...
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const handleComponentChange = (componentType, component) => {
    setSelectedComponents((prev) => ({
      ...prev,
      [componentType]: component,
    }));

    // 更新总价
    const newPrice = Object.values({ ...selectedComponents, [componentType]: component })
      .filter((item) => item !== null)
      .reduce((acc, curr) => acc + curr.price, 0);
    setTotalPrice(newPrice);
  };

  return (
    <div className="custom-build-page">
      <div className="components-selection-container">
        <h2 className="section-title">选择您的组件</h2>
        <div className="components-selection">
          {Object.keys(componentOptions).map((componentType, index) => (
            <ComponentSelection
              key={index}
              componentType={componentType}
              options={componentOptions[componentType]}
              onComponentChange={handleComponentChange}
            />
          ))}
        </div>
      </div>
      <Summary totalPrice={totalPrice} selectedComponents={selectedComponents} />
    </div>
  );
}

export default CustomBuildPage;
