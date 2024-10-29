import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import buildConfigs from '../data/buildConfigs';
import './BuildDetailsPage.css';

function BuildDetailsPage() {
  const { id } = useParams();
  const [build, setBuild] = useState(null);

  useEffect(() => {
    // 根据ID查找对应的build配置
    const selectedBuild = buildConfigs.find((config) => config.id.toString() === id);
    setBuild(selectedBuild);
  }, [id]);

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handlePayment = () => {
    alert('支付功能暂时不可用。这是一个示例！');
    // 在这里可以集成支付接口，比如支付宝、微信支付等。
  };

  if (!build) {
    return <div className="loading-container">加载中...</div>;
  }

  return (
    <div className="build-details-page">
      <div className="details-container">
        {/* 配置图片 */}
        <div className="build-image">
          <img src={build.image} alt={build.name} />
        </div>

        {/* 配置信息 */}
        <div className="build-info">
          <h1>{build.name}</h1>
          <p>{build.description}</p>
          <div className="specs">
            <h3>配置详情:</h3>
            <ul>
              {build.specs ? (
                build.specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))
              ) : (
                <li>暂无配置详情</li>
              )}
            </ul>
          </div>

          <div className="price-section">
            <span>价格：¥{build.price}</span>
            <div className="quantity-selector">
              <label>数量：</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
            <button className="pay-button" onClick={handlePayment}>
              立即购买
            </button>
          </div>
        </div>
      </div>

      {/* 用户评价 */}
      <div className="reviews-section">
        <h3>用户评价</h3>
        {build.reviews && build.reviews.length > 0 ? (
          build.reviews.map((review, index) => (
            <div key={index} className="review">
              <strong>{review.username}</strong> - 评分: {review.rating}/5
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>暂无评价</p>
        )}
      </div>
    </div>
  );
}

export default BuildDetailsPage;
