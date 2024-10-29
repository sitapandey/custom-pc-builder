import React, { useState } from 'react';
import './ContactUsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function ContactUsPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 模拟提交处理
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-us-page">
      <h2 className="section-title">联系我们</h2>

      <div className="contact-info" data-aos="fade-right">
        <h3>联系信息</h3>
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <span>电话：+86 123 456 7890</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <span>邮箱：contact@company.com</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <span>地址：中国北京市朝阳区某某街道</span>
        </div>
        <div className="social-media">
          <h4>关注我们</h4>
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </div>
      </div>

      <div className="contact-form" data-aos="fade-left">
        <h3>在线留言</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">姓名：</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">邮箱：</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">留言：</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            {formSubmitted ? '提交成功！' : '提交留言'}
          </button>
        </form>
      </div>

      <div className="map-section" data-aos="fade-up">
        <h3>公司位置</h3>
        <div className="map-container">
          <iframe
            title="company-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999291442558!2d2.2944813156744313!3d48.85837007928792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fcbf0f4c8e5%3A0x4213df6e4e3b37d!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1618332679514!5m2!1sen!2sfr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
