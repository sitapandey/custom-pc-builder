// src/components/PromotionDetailPage.js
import React from 'react';
import './PromotionDetailPage.css';
import promotionImage from '../assets/promotion-image.jpg'; // 示例促销图片

function PromotionDetailPage() {
  return (
    <div className="promotion-detail container mx-auto my-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">限时促销详情</h2>
      <div className="promotion-content bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold mb-4">火热促销中！</h3>
        <p className="mb-6">
          我们正在进行限时促销活动，所有配件享受8折优惠，活动仅限本周！赶紧来选购属于您的专属配置，享受惊喜折扣。
          本次活动包括显卡、CPU、主板等全系组件，优惠力度空前，不容错过！
        </p>
        <img
          src={promotionImage}
          alt="促销图片"
          className="w-full rounded-lg mt-4"
        />
      </div>
    </div>
  );
}

export default PromotionDetailPage;
