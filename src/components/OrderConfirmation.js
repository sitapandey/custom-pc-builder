import React, { useState } from 'react';
import './OrderConfirmation.css';
import { useNavigate } from 'react-router-dom';
import paymentImage from '../assets/payment-image.png';

function OrderConfirmation() {
  const navigate = useNavigate();

  const [address, setAddress] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleContactChange = (e) => {
    setContactInfo(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    alert('订单已提交！\n地址: ' + address + '\n联系方式: ' + contactInfo);
    navigate('/order-confirmation');
  };

  return (
    <div className="order-confirmation">
      <div className="confirmation-container" data-aos="fade-up">
        <h2 className="confirmation-title">订单确认</h2>
        <p className="confirmation-message">感谢您选择我们！您的订单已经成功提交，我们将尽快处理您的请求。</p>

        <div className="order-details" data-aos="fade-in">
          <h3 className="details-title">订单详情</h3>
          <ul className="details-list">
            <li>订单编号：#1234567890</li>
            <li>下单时间：2024年10月28日</li>
            <li>支付方式：在线支付</li>
            <li>预计发货时间：5-7个工作日</li>
          </ul>
        </div>

        <div className="shipping-info" data-aos="fade-in">
          <h3 className="info-title">邮寄地址和联系信息</h3>
          <div className="form-group">
            <label htmlFor="address">邮寄地址：</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={handleAddressChange}
              placeholder="请输入您的邮寄地址"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">联系方式：</label>
            <input
              type="text"
              id="contact"
              value={contactInfo}
              onChange={handleContactChange}
              placeholder="请输入您的联系方式"
              className="form-input"
            />
          </div>
        </div>

        <div className="payment-section" data-aos="fade-in">
          <h3 className="payment-title">支付方式</h3>
          <img src={paymentImage} alt="支付方式图示" className="payment-image" />
        </div>

        <div className="customer-support" data-aos="fade-in">
          <h3 className="support-title">客户支持</h3>
          <p>如有任何问题，请随时联系我们的客户支持团队。</p>
          <button className="contact-support-button">联系客服</button>
        </div>

        <button className="submit-order-button" onClick={handleSubmit}>提交订单</button>
        <button className="back-to-home-button" onClick={handleBackToHome}>返回首页</button>
      </div>
    </div>
  );
}

export default OrderConfirmation;
