import React from 'react';
import './ComponentSelection.css';

function ComponentSelection({ componentType, options, onComponentChange }) {
  return (
    <div className="component-selection">
      <h3 className="component-title">{componentType.toUpperCase()}</h3>
      <div className="options">
        {options.map((option, index) => (
          <label key={index} className="option">
            <input
              type="radio"
              name={componentType}
              value={option.name}
              onChange={() => onComponentChange(componentType, option)}
            />
            <div className="option-content">
              <div className="option-name">{option.name} - ¥{option.price}</div>
              <div className="option-description">{option.description}</div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default ComponentSelection;
