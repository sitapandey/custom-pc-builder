import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Summary.css';

function Summary({ totalPrice, selectedComponents }) {
  const navigate = useNavigate();

  const handleOrderSubmit = () => {
    // Redirect to the order confirmation page
    navigate('/order-confirmation');
  };

  return (
    <div className="summary">
      <h2>您的配置总价</h2>
      <div className="selected-components">
        {Object.keys(selectedComponents).map((key) => (
          selectedComponents[key] ? (
            <div key={key} className="selected-component">
              <strong>{key.toUpperCase()}:</strong> {selectedComponents[key].name} - ¥{selectedComponents[key].price}
            </div>
          ) : null
        ))}
      </div>
      <p className="total-price">总价：¥{totalPrice}</p>
      <button className="submit-button" onClick={handleOrderSubmit}>提交订单</button>
    </div>
  );
}

export default Summary;
