import React, { useState } from 'react';
import './ComponentSelection.css';

function ComponentSelection({ componentType, options, onComponentChange }) {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  const handleBrandChange = (e) => {
    const brandName = e.target.value;
    const brand = options.find((opt) => opt.brand === brandName);
    setSelectedBrand(brand);
    setSelectedModel(null); // 清空选择的型号
  };

  const handleModelChange = (e) => {
    const modelName = e.target.value;
    const model = selectedBrand.models.find((mod) => mod.name === modelName);
    setSelectedModel(model);
    onComponentChange(componentType, model);
  };

  return (
    <div className="component-selection">
      <h4 className="component-title">{componentType.toUpperCase()}</h4>
      {/* 品牌选择框 */}
      <select onChange={handleBrandChange} className="brand-select">
        <option value="">选择品牌</option>
        {options.map((brand, index) => (
          <option key={index} value={brand.brand}>
            {brand.brand}
          </option>
        ))}
      </select>

      {/* 型号选择框 */}
      {selectedBrand && (
        <select onChange={handleModelChange} className="model-select">
          <option value="">选择型号</option>
          {selectedBrand.models.map((model, index) => (
            <option key={index} value={model.name}>
              {model.name} - ¥{model.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default ComponentSelection;
