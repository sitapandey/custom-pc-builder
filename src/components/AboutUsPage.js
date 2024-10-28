// AboutUsPage.js
import React from 'react';
import './AboutUsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function AboutUsPage() {
  return (
    <div className="about-us-page">
      <h1 className="section-title">关于我们</h1>
      
      <div className="company-introduction">
        <h2 className="sub-title">公司介绍</h2>
        <p>
          我们公司专门为客户提供高品质的定制化装机和全面的计算机保修服务。自成立以来，我们秉持客户至上的服务为本理念，
          不断拓展服务，涵盖定制装机、保修、维护一体化的服务体系。
        </p>
        <img src="/images/company-building.jpg" alt="公司大楼" className="company-image" />
      </div>

      <div className="service-advantages">
        <h2 className="sub-title">我们的服务优势</h2>
        <ul className="advantages-list">
          <li>定制化装机服务：根据用户的需求量身打造个性化电脑配置。</li>
          <li>一体化保修维护：提供设备保修、清灰、维护等一站式服务，解决用户后顾之忧。</li>
          <li>高效服务团队：拥有专业的技术人员，确保快速响应客户需求。</li>
        </ul>
      </div>

      <div className="service-team">
        <h2 className="sub-title">我们的服务团队</h2>
        <p>
          我们的团队由各咨询领域的计算机硬件工程师和技术支持专家组成，每位成员都有丰富的行业经验。无论是高端装机，
          还是项目维护，我们的团队都能提供最优质的服务。
        </p>
        <div className="team-image">
          <img src="/images/team-photo.jpg" alt="我们的团队" className="team-photo" />
        </div>
      </div>

      <div className="contact-info">
        <h2 className="sub-title">联系方式</h2>
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <span>电话: +86 123 456 7890</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <span>邮箱: contact@company.com</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <span>地址: 中国北京市朝阳区某某街道</span>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;